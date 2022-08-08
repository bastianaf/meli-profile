import { useContext } from 'react';
import { UserContext } from '../context/user/UserContext';

export const useUser= () => {

    const { userState, fetchUser, updateUserProfile } = useContext(UserContext);
    const { authenitcated, errorProfileFetch, userProfile } = userState;

    return {
        authenitcated,
        userProfile,
        errorProfileFetch,
        fetchUser,
        updateUserProfile
    }
}