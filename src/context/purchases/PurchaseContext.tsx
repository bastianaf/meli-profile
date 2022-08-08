import { createContext } from "react";
import { PurchaseState, Purchases } from '../../interfaces';

export type PurchaseContextProps = {
    purchaseState: PurchaseState;
    fetchUserPurchases: () => Promise<void>;
    updatePurchasesResult: (purchases: Purchases) => void;
} 

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps );