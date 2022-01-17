import React from 'react'

import styled from 'styled-components'
import Card from './components/Card';

// context
import {useAlbumContext} from '../../context/albumContext'

const HomePage = () => {

  const {albums} = useAlbumContext()
  console.log(albums)

  if(albums.length === 0) {
    return (
      <h1>Loading...</h1>
    )
  }


  return (
    <Wrap>
      {albums.map(album => <Card key={album.id} album= {album}/>)}
    </Wrap>
  )
}

export default HomePage

const Wrap = styled.div`

  max-width: 1200px;
  width: 100%;
  min-height: 80vh;


  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;


  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }


  background: #fff;

  margin: 0 auto;
  padding: 20px;

  border-radius: 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
`
