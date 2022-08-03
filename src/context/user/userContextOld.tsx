import { createContext, useState, useContext, ReactNode } from "react";


export type UserData = {
  userId: string;
  name: string;
  nickName: string
  email: string;
} | null

type UserContextType = {
    user: UserData;
    login: () => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    login: () => {},
    logout: () => {},
})

export function useUserContext() {
  return useContext(UserContext);
}

type Props = {
  children: ReactNode;
};

export function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState<UserData>(null);

  const userData: UserData = {
    userId: 'id',
    name: 'Jhon',
    nickName: 'Dark Knight',
    email: 'jdoe@fakemail.com'
  }

  const login = () => {
      console.log('login...')
      setUser(userData);
  };

  const logout = () => {
      setUser(null);
  };

  const value = {
      user,
      login,
      logout,
  };

  return (
      <>
          <UserContext.Provider value={value}>
              {children}
          </UserContext.Provider>
      </>
  );
}