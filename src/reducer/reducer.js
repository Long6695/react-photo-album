import { GET_ALBUMS, GET_ALBUM, ADD_ALBUM } from "../constants/reducerType";

export const initialState = {
  albums: [],
  album: {},
  addAlbum: {},
}

const albumReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALBUMS:
      return {...state, albums: action.payload};
    case GET_ALBUM:
      return {...state, album: action.payload};
    case ADD_ALBUM: 
      return {...state, addAlbum: action.payload}
    default:
      return state
  }
}

export default albumReducer