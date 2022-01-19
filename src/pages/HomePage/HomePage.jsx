import React, { useEffect } from 'react'
//styled
import styled from 'styled-components'
//components
import Card from './components/Card';
import Loading from '../../components/Loading/Loading';
import Pagination from './components/Pagination';
// context
import {useAlbumContext} from '../../context/albumContext'

const HomePage = () => {
  const {state, fetchAlbums} = useAlbumContext()
  
  const {albums} = state
  
  useEffect(() => {
    try {
      fetchAlbums()
    } catch (error) {
      throw new Error(error)
    }
  },[])

  if(albums.length === 0) {
    return (
      <Loading/>
    )
  }


  return (
    <>
      <Wrap>
        {albums.length > 0 && albums.map(album => <Card key={album.id} album= {album}/>)}
      </Wrap>
        <Pagination />
    </>
  )
}

export default HomePage



const Wrap = styled.div`

  max-width: 1200px;
  width: 100%;


  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }


  background: #c8c3cc;

  margin: 50px auto 0;
  padding: 20px;

  border-radius: 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
`
