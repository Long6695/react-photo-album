import React, { useEffect, useState } from 'react'
//styled
import styled from 'styled-components'
//components
import Card from './components/Card';
import Loading from '../../components/Loading/Loading';
import Pagination from './components/Pagination';
// context
import {useAlbumContext} from '../../context/albumContext'
//router
import { useHistory, useLocation } from 'react-router-dom';

const useQueryString = () => {
  return new URLSearchParams(useLocation().search)
}


const HomePage = () => {
  
  const history = useHistory()
  
  const {state, fetchAlbums, LIMIT} = useAlbumContext()
  
  const {albums} = state
  
  const queryString = useQueryString();
  const queryPage = queryString.get('_page');

  const [page, setPage] = useState(queryPage || 1)

  useEffect(() => {
    try {
      history.replace({ pathname: '/', search: `_page=${page}&_limit=${LIMIT}`})

      fetchAlbums(page)
    } catch (error) {
      throw new Error(error)
    }
    // eslint-disable-next-line
  },[history, page])

  if(albums.length === 0) {
    return (
      <Loading/>
    )
  }

  return (
    <Container>
      <Wrap>
        {albums.length > 0 && albums.map(album => <Card key={album.id} album= {album}/>)}
      </Wrap>
      <Pagination page={page} setPage={setPage} />
    </Container>
  )
}

export default HomePage


const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 90vh; 

  align-items: center;
  margin-top: 20px;
`
const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;

  flex:1;
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
