import { createContext, useContext, useReducer, useState } from "react";
//Services
import httpRequest from "../services/httpRequest";

//API_URL
import { BASE_URL } from "../constants/apiUrl";

//reducer
import albumReducer from "../reducer/reducer";
import { initialState } from "../reducer/reducer";
import { GET_ALBUMS, GET_ALBUM, ADD_ALBUM, EDIT_ALBUM } from "../constants/reducerType";

// context
const AlbumContext = createContext()

const AlbumProvider = ({children}) => {

  const [state, dispatch] = useReducer(albumReducer, initialState)

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const fetchAlbums = async (_page) =>{
    const res = await httpRequest.get(BASE_URL + `?_page=${_page}&_limit=2`)

    const data= res.data.data

    setTotalPage(Math.ceil(res.data.pagination.totalCount / res.data.pagination.limit))

    dispatch({type: GET_ALBUMS, payload: data})
  }

  const fetchSingleAlbum = async (id) => {
    const res = await httpRequest.get(BASE_URL + `/${id}`)

    const data= res.data.data
    
    dispatch({type: GET_ALBUM, payload: data})
  }

  const handleAddAlbum = async (data) => {
      if(Object.keys(data).length === 0) return

      await httpRequest.post(BASE_URL, data)
  
      dispatch({type:ADD_ALBUM, payload: data})
  
  }

  const handleEditAlbum = async(id, data) => {
    await httpRequest.patch(BASE_URL + `/${id}`, data)

    dispatch({type:EDIT_ALBUM, id: id , payload: data})
  }

  
  return (
    <AlbumContext.Provider value={{state, fetchSingleAlbum, dispatch, handleAddAlbum, handleEditAlbum, fetchAlbums, page, setPage, totalPage}}>
          {children}
    </AlbumContext.Provider>
  )
}

const useAlbumContext = () => useContext(AlbumContext)

export { useAlbumContext }

export default AlbumProvider