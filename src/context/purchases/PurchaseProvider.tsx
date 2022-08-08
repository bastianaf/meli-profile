import { useReducer } from "react"

import { PurchaseContext } from "./PurchaseContext"
import { PurchaseState, Purchases, Pagination } from "../../interfaces"
import { PurchaseReducer } from "./PurchaseReducer"

const INITIAL_STATE: PurchaseState = {
    pagination: {
        total: 10,
        offset: 0,
        limit: 3,
        page: 0,
    },
    userPurchases: [],
    loading: true
}

interface props {
  children: React.ReactNode
}

export const PurchaseProvider = ({ children }: props) => {
  const [purchaseState, dispatch] = useReducer(PurchaseReducer, INITIAL_STATE)

  const updatePurchasesResult = (purchases: Purchases) => {
    dispatch({ type: "load_result", payload: purchases })
  }

  const toggleLoading = () => {
    dispatch({ type: "toggle_loading" })
  }

  const changePage = (page: number) => {
    const currentPagination: Pagination = {
        total:  purchaseState.pagination.total,
        offset:  (page) - 1  * purchaseState.pagination.limit + 1,
        limit:  purchaseState.pagination.limit,
        page,
    }
    //console.log('current pagination', currentPagination)
    dispatch({ type: "set_pagination", payload:  currentPagination, callback: fetchUserPurchases(currentPagination.limit, currentPagination.offset) })
  }

  const fetchUserPurchases = async (limit: number, offset: number) => {
      console.log('fetchUserPurchases current pagination', limit, offset);
      const res: any = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/purchases/1?limit=${limit || 3}&offset=${offset || 0}`, {
        method: "GET",
      }).catch((error) => {
        console.error(error)
      })

      if(res){    
          if (res.ok) {
          const result = await (res.json())
          console.log("PURCHASES FETCH ", result.data)
          updatePurchasesResult(result.data)
      } else {
          throw await res.text();
      }
      toggleLoading()
    }
  }

  return (
    <PurchaseContext.Provider
      value={{
        purchaseState,
        toggleLoading,
        changePage,
        fetchUserPurchases,
        updatePurchasesResult,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}
