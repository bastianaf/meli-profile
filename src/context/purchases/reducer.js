export const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          authenticated: !state.authenticated
        }

      default:
        return state
    }
  }
  
  export const initialState = {
    authenticated: false,
    profile: null
  }