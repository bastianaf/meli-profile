import { PurchaseState, Purchase } from '../../interfaces';

type PurchaseAction = 
    | { type: 'next_result', payload: Purchase }
    | { type: 'prev_result', payload: { } };

export const PurchaseReducer = ( state: PurchaseState, action: PurchaseAction ): PurchaseState => {

    switch ( action.type ) {
        case 'next_result':
            return {
                ...state,
                authenitcated: true,
                userProfile: action.payload
            }

        default:
            return state;
    }

}