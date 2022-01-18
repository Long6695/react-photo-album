import React, { useEffect } from 'react'
// router
import { useParams } from 'react-router-dom';
//styled
import styled from 'styled-components'
//context
import { useAlbumContext } from '../../context/albumContext';
// reducer
import { GET_ALBUM } from '../../constants/reducerType';
//components
import Loading from '../../components/Loading/Loading';

const DetailPhotoPage = () => {
  const {state, fetchSingleAlbum, dispatch} = useAlbumContext()

  const {photoId} = useParams()

  useEffect(() => {
    fetchSingleAlbum(photoId)
  
    return () => {
      dispatch({type:GET_ALBUM, payload: {}})
    }
    // eslint-disable-next-line
  },[photoId])

  const {title, category, description} = state.album

  if(Object.keys(state.album).length === 0){
    return (<Loading/>)
  }

  return (
    <Wrap>
      <Image>
          <img src="http://placeimg.com/640/480/cats" alt="" />
      </Image>
      <Content>
        <Title>Title: {title}</Title>
        <Category>Category: {category}</Category>
        <p>Description: {description}</p>
      </Content>
      <Footer>

      </Footer>
    </Wrap>
  )
}

export default DetailPhotoPage

const Wrap = styled.div`
  margin: 100px auto 0;
  background: #fff;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;

  display:flex;
  align-items: center;
  justify-content: space-between;

  color: #6913E1;

  padding: 20px 100px;

  box-shadow: 0 5px 5px rgba(0 ,0 ,0 ,0.6);


  @media (max-width: 800px) {
   flex-direction: column;
   justify-content: center;
   padding: 20px;
  }

`
const Image = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  overflow:hidden;
  box-shadow: 0px 0px 5px rgba(0 ,0 ,0 ,0.6);
  
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }


  img{
    width: 100%;
    height: 100%;
    object-fit: center;
  }

`

const Content = styled.div`
  padding: 20px;
`

const Title = styled.h3`
  font-size: 30px;
`
const Category = styled.h4`
  margin: 20px 0;
  font-size: 25px;
`
const Footer = styled.div`
  font-size: 16px;
`