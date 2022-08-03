import { createContext } from "react";
import { UserState, User } from '../../interfaces';

export type UserContextProps = {
    userState: UserState;
    fetchUser: () => Promise<void>;
    updateUserProfile: (user: User) => void;
} 

export const UserContext = createContext<UserContextProps>({} as UserContextProps );