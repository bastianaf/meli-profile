import { PurchaseState, Purchases, Pagination } from '../../interfaces';

type PurchaseAction = 
    | { type: 'load_result', payload: Purchases }
    | { type: 'set_pagination', payload: Pagination, callback:  Promise<void> }
    | { type: 'toggle_loading' };

export const PurchaseReducer = ( state: PurchaseState, action: PurchaseAction ): PurchaseState => {

    switch ( action.type ) {
        case 'load_result':
            return {
                ...state,
                userPurchases: action.payload
            }

        case 'set_pagination':
            return {
                ...state,
                pagination: action.payload,
            }
        case 'toggle_loading':  
            return {
                ...state,
                loading: !state.loading,
            }  

        default:
            return state;
    }

}