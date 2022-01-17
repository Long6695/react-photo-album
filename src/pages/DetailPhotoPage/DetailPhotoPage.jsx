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
  },[])

  const {email, firstName, lastName} = state.album

  if(Object.keys(state.album).length === 0){
    return (<Loading/>)
  }

  return (
    <Wrap>
      <Image>
          <img src="http://placeimg.com/640/480/cats" alt="" />
      </Image>
      <Content>
        <Name>Name: {lastName ? lastName : 'Unknown'} {firstName ? firstName : null}</Name>
        <Email>Email: {email ? email : 'Unknown'}</Email>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium modi commodi quam odit facere delectus officiis explicabo officia quibusdam?</p>
      </Content>
      <Footer>

      </Footer>
    </Wrap>
  )
}

export default DetailPhotoPage

const Wrap = styled.div`
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;

  display:flex;
  align-items: center;
  justify-content: center;

  color: #6913E1;

  padding: 20px;

  box-shadow: 0 5px 5px rgba(0 ,0 ,0 ,0.6);


  @media (max-width: 800px) {
   flex-direction: column;
  }

`
const Image = styled.div`
  width: 300px;
  height: 150px;
  margin: 0 50px;
  border-radius: 100%;
  overflow:hidden;
  box-shadow: 0px 0px 5px rgba(0 ,0 ,0 ,0.6);
  
  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
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

const Name = styled.h3`
  font-size: 30px;
`
const Email = styled.h4`
  margin: 20px 0;
  font-size: 25px;
`
const Footer = styled.div`
  font-size: 16px;
`