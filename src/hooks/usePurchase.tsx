import { useContext } from "react"
import { PurchaseContext } from "../context/purchases/PurchaseContext"

export const usePurchase = () => {
  const {
    purchaseState,
    fetchUserPurchases,
    updatePurchasesResult,
    changePage,
    toggleLoading,
  } = useContext(PurchaseContext)
  const { pagination, userPurchases, loading } = purchaseState

  return {
    pagination,
    userPurchases,
    loading,
    toggleLoading,
    fetchUserPurchases,
    updatePurchasesResult,
    changePage,
  }
}
