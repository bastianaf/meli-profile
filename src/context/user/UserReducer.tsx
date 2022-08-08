import { UserState, User } from '../../interfaces';

type UserAction = 
    | { type: 'login', payload: User }
    | { type: 'logout' }
    | { type: 'set_error' };

export const UserReducer = ( state: UserState, action: UserAction ): UserState => {

    switch ( action.type ) {
        case 'login':
            return {
                ...state,
                authenitcated: true,
                userProfile: action.payload
            }

        case 'logout': 
            return {
                ...state,
                authenitcated: false,
            }
        
        case 'set_error': 
        return {
            ...state,
            authenitcated: false,
            errorProfileFetch: true,
        }

        default:
            return state;
    }

}