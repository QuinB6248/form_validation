import { INFORMATION  } from '../actions'

const initialState = []


const reducer = (state = initialState, action) => {
  switch (action.type) {
      case INFORMATION: {
        console.log('ACTION', action.payload)
          return  action.payload
      }
     


      default:
          return state
}}

export default reducer