<<<<<<< HEAD
const initialState = {
    login: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_LOGIN":
        return {
          ...state, 
          login: action.payload
        }
      default:
        return state
    }
  }
  
=======
const initialState = {
    login: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_LOGIN":
        return {
          ...state, 
          login: action.payload
        }
      default:
        return state
    }
  }
  
>>>>>>> 6a6a2a3651340f88f966328b46fa107b06b202a4
  export default reducer;