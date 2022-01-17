import { GET_ALBUMS, GET_ALBUM } from "../constants/reducerType";

export const initialState = {
  albums: [],
  album: {},
}

const albumReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALBUMS:
      return {...state, albums: action.payload};
    case GET_ALBUM:
      return {...state, album: action.payload};

    default:
      return state
  }
}

export default albumReducer