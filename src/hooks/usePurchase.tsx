import { useContext } from 'react';
import { PurchaseContext } from '../context/purchases/PurchaseContext';

export const usePurchase= () => {

    const { purchaseState, fetchUserPurchases, updatePurchasesResult } = useContext(PurchaseContext);
    const { pagination, user_purchases } = purchaseState;

    return {
        pagination,
        user_purchases,
        fetchUserPurchases,
        updatePurchasesResult
    }
}