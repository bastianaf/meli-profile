import React from "react"
import { reducer, initialState } from "./reducer"

export const PurchaseContext = React.createContext({
  state: initialState,
})

export const PurchaseProvider = ({ children }) => {
  const [state] = React.useReducer(reducer, initialState)

  return (
    <PurchaseContext.Provider value={state}>
    	{ children }
    </PurchaseContext.Provider>
  )
}