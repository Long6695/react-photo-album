import { createContext, useContext, useEffect, useReducer } from "react";

//Services
import httpRequest from "../services/httpRequest";

//API_URL
import { BASE_URL } from "../constants/apiUrl";

//reducer
import albumReducer from "../reducer/reducer";
import { initialState } from "../reducer/reducer";
import { GET_ALBUMS, GET_ALBUM, ADD_ALBUM } from "../constants/reducerType";

// context
const AlbumContext = createContext()

const AlbumProvider = ({children}) => {

  const [state, dispatch] = useReducer(albumReducer, initialState)


  const fetchAlbums = async () =>{
    const res = await httpRequest.get(BASE_URL + `?_page=1&_limit=10`)

    const data= res.data.data

    dispatch({type: GET_ALBUMS, payload: data})

  }

  const fetchSingleAlbum = async (id) => {
    const res = await httpRequest.get(BASE_URL + `/${id}`)

    const data= res.data.data

    dispatch({type: GET_ALBUM, payload: data})
  }


  const addAlbums = async (data) => {

    if(Object.keys(data).length === 0) return
    await httpRequest.post(BASE_URL, data)

    dispatch({type:ADD_ALBUM, payload: data})
  }



  useEffect(() => {
    try {
      fetchAlbums()
    } catch (error) {
      throw new Error(error)
    }
  },[])



  
  return (
    <AlbumContext.Provider value={{state, fetchSingleAlbum, dispatch, addAlbums}}>
          {children}
    </AlbumContext.Provider>
  )
}

const useAlbumContext = () => useContext(AlbumContext)

export { useAlbumContext }

export default AlbumProvider