import { GET_ALBUMS } from "../constants/reducerType";

export const initialState = {
  albums: [],
  album: {},
  isLoading: true,
}

const albumReducer = (state = initialState,action) => {
  switch(action.type) {
    case GET_ALBUMS:
      return {...state, albums: action.payload}


    default:
      return state
  }
}

export default albumReducer