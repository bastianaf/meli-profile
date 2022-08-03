import { useReducer } from "react"

import { UserContext } from "./UserContext"
import { UserState, User } from "../../interfaces"
import { UserReducer } from "./UserReducer"
import { setTimeout } from "timers/promises"

const INITIAL_STATE: UserState = {
  authenitcated: false,
  userProfile: null,
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props) => {
  const [userState, dispatch] = useReducer(UserReducer, INITIAL_STATE)

  const updateUserProfile = (user: User) => {
    dispatch({ type: "login", payload: user })
  }

  /* const fetchUser = async() => {
        fetch('/api/user')
        .then((res) => res.json())
        .then((data) => {
            updateUserProfile(data)
        })
    }
 */

  const fetchUser = async () => {
    const res: any = await fetch("http://localhost:4000/user", {
      method: "GET",
    }).catch((error) => {
      console.error(error)
    })

    if (res.ok) {
        const data = await (res.json())
        console.log("FETCH RESPONSE", data )
        updateUserProfile({
            userId: "id",
            name: "Jhon",
            nickName: "Dark Knight",
            email: "jdoe@fakemail.com",
        })
    } else {
        throw await res.text();
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
