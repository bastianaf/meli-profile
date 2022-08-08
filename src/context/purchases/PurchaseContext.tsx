import { createContext } from "react";
import { PurchaseState, Purchases } from '../../interfaces';

export type PurchaseContextProps = {
    purchaseState: PurchaseState;
    fetchUserPurchases: (limit: number, offset:number ) => Promise<void>;
    updatePurchasesResult: (purchases: Purchases) => void;
    changePage: (page: number) => void;
    toggleLoading: () => void;
} 

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps );