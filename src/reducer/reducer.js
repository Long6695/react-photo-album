import { GET_ALBUMS, GET_ALBUM, ADD_ALBUM, EDIT_ALBUM } from "../constants/reducerType";

export const initialState = {
  albums: [],
  album: {},
  isLoading: false,
}

const albumReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALBUMS:
      return {...state, albums: action.payload};
    case GET_ALBUM:
      return {...state, album: action.payload};
    case ADD_ALBUM: 
      return {...state, isLoading: true, albums:[action.payload, ...state.albums ]}
    case EDIT_ALBUM: 
      const editedAlbum = state.albums.map(album => album.id === action.id ? action.payload : album)
      return {...state, isLoading: true, albums: editedAlbum }
    default:
      return state
  }
}

export default albumReducer