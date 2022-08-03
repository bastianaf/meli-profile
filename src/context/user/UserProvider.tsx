import { useReducer } from 'react';

import { UserContext } from './UserContext';
import { UserState, User } from '../../interfaces';
import { UserReducer } from './UserReducer';
import { setTimeout } from 'timers/promises';

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
    
    const fetchUser = async() => {
        fetch('/api/user')
        .then((res) => res.json())
        .then((data) => {
            console.log("FETCH RESPONSE",  data)
            updateUserProfile(data)
        })
    }

    return (
        <UserContext.Provider value={{
            userState,
            fetchUser,
            updateUserProfile
        }}>
            { children }
        </UserContext.Provider>
    )
}