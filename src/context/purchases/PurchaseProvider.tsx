import { useReducer } from "react"

import { PurchaseContext } from "./PurchaseContext"
import { PurchaseState, Purchases } from "../../interfaces"
import { PurchaseReducer } from "./PurchaseReducer"

const INITIAL_STATE: PurchaseState = {
    pagination: {
        total: 10,
        offset: 5,
        limit: 3,
        page: 0,
    },
    user_purchases: [{
        id_compra: 300195,
        titulo: "Samsung Galaxy S8 Sm-g950f Refabricado Outlet 64gb 4gb Ram",
        precio: {
        total: 44999.99,
        moneda: "ARS"
        },
        cantidad: 1,
        fecha: "2022-07-01T01:52:10.000-03:00",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_634516-MLA31352746382_072019-V.webp",
        vendedor: {
        id: 4007,
        nickname: "AIR-VISION"
        },
        id_transaccion: 7010195,
        id_envio: 1000010195
    },
    {
      id_compra: 300194,
      titulo: "Xiaomi Redmi Note 10 Pro (Global) Dual SIM 128 GB gris ónix 6 GB RAM",
      precio: {
      total: 114999.99,
      moneda: "ARS"
      },
      cantidad: 1,
      fecha: "2022-06-28T05:15:47.000-03:00",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_689330-MLA50263507908_062022-V.webp",
      vendedor: {
      id: 4008,
      nickname: "ABC_MAC"
      },
      id_transaccion: 7010194,
      id_envio: 1000010194
      }
  ],
}

interface props {
  children: React.ReactNode
}

export const PurchaseProvider = ({ children }: props) => {
  const [purchaseState, dispatch] = useReducer(PurchaseReducer, INITIAL_STATE)

  const updatePurchasesResult = (purchases: Purchases) => {
    dispatch({ type: "load_result", payload: purchases })
  }

  const fetchUserPurchases = async () => {
      const res: any = await fetch("http://localhost:4000/user/purchases/1?limit=3&offset=5", {
        method: "GET",
      }).catch((error) => {
        console.error(error)
      })

      if(res){    
          if (res.ok) {
          const result = await (res.json())
          console.log("PURCHASES FETCH ", result.data)
          updatePurchasesResult(result)
      } else {
          throw await res.text();
      }
    }
  }

  return (
    <PurchaseContext.Provider
      value={{
        purchaseState,
        fetchUserPurchases,
        updatePurchasesResult,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}
