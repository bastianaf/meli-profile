import { useReducer } from "react"

import { UserContext } from "./UserContext"
import { UserState, User } from "../../interfaces"
import { UserReducer } from "./UserReducer"

const INITIAL_STATE: UserState = {
  authenitcated: false,
  userProfile: null,
}

interface props {
  children: React.ReactNode
}

export const UserProvider = ({ children }: props) => {
  const [userState, dispatch] = useReducer(UserReducer, INITIAL_STATE)

  const updateUserProfile = (user: User) => {
    dispatch({ type: "login", payload: user })
  }

  const fetchUser = async () => {
      const res: any = await fetch("http://localhost:4000/user", {
        method: "GET",
      }).catch((error) => {
        console.error(error)
      })

      if(res){    
          if (res.ok) {
          const data = await (res.json())
          //console.log("USER FETCH RESPONSE", data )
          updateUserProfile(data)
      } else {
          throw await res.text();
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        userState,
        fetchUser,
        updateUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
