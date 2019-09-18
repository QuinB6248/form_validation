import { POST_INFO, GET_INFO  } from '../actions'

const initialState = []


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO: {
      console.log('GET', action.payload)
        return action.payload
    }
 
    case POST_INFO: {
        console.log('POST', action.payload)
          return [...state, action.event]
    }
      


      default:
          return state
}}

export default reducer