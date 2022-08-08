import { PurchaseState, Purchases, Pagination } from '../../interfaces';

type PurchaseAction = 
    | { type: 'load_result', payload: Purchases }
    | { type: 'set_pagination', payload: Pagination, callback:  Promise<void> };

export const PurchaseReducer = ( state: PurchaseState, action: PurchaseAction ): PurchaseState => {

    switch ( action.type ) {
        case 'load_result':
            return {
                ...state,
                user_purchases: action.payload
            }
        
        case 'set_pagination':
            return {
                ...state,
                pagination: action.payload,
            }

        default:
            return state;
    }

}

/* total: number,
    limit: number,
    offset: number,
    page: number,
    user_purchases: Purchases */