import { useReducer } from "react"

import { UserContext } from "./UserContext"
import { UserState, User } from "../../interfaces"
import { UserReducer } from "./UserReducer"

const INITIAL_STATE: UserState = {
  authenitcated: false,
  userProfile: null,
  errorProfileFetch: false
}

interface props {
  children: React.ReactNode
}

export const UserProvider = ({ children }: props) => {
  const [userState, dispatch] = useReducer(UserReducer, INITIAL_STATE)

  const updateUserProfile = (user: User) => {
    dispatch({ type: "login", payload: user })
  }

  const setErrorUserProfile = () => {
    dispatch({ type: "set_error" })
    console.log(userState)
  }

  const fetchUser = async () => {
    
      const res: any = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
        method: "GET",
      }).catch((error) => {
        console.error(error)
      })

      if(res && res.ok) {
          const data = await (res.json())
          //console.log("USER FETCH RESPONSE", data )
          updateUserProfile(data)
      } else {
          setErrorUserProfile()
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
