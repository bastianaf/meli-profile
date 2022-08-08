import { createContext } from "react";
import { PurchaseState, Purchases } from '../../interfaces';

export type PurchaseContextProps = {
    purchaseState: PurchaseState;
    fetchUserPurchases: () => Promise<void>;
    updatePurchasesResult: (purchases: Purchases) => void;
    changePage: (page: number) => void;
} 

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps );