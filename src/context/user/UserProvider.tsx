import { useReducer } from 'react';

import { UserContext } from './UserContext';
import { UserState, User } from '../../interfaces';
import { UserReducer } from './UserReducer';

const INITIAL_STATE: UserState = {
    authenitcated: false,
    userProfile: null
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props ) => {

    const [ userState, dispatch] = useReducer( UserReducer, INITIAL_STATE );
    
    const updateUserProfile = (user: User) => {
        dispatch({ type: 'login', payload: user })
    }

    return (
        <UserContext.Provider value={{
            userState,
            updateUserProfile
        }}>
            { children }
        </UserContext.Provider>
    )
}