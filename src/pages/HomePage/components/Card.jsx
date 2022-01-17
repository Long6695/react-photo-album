import React from 'react'
//styled
import styled from 'styled-components'
//components
import Button from '../../../components/Button/Button'
//router
import { Link } from 'react-router-dom'
//helper
import { convertDate } from '../../../helper/convertDate'

const Card = ({album}) => {

  return (
    <Wrap>
      <img src={album.image} alt="" />
      <Content>
        <Name>{album.title}</Name>
        <Time>{convertDate(album.createdAt)}</Time>
      </Content>
      <Options>
        <Link to={`/detail/${album.id}`}><Button type="button">View</Button></Link>
        <Link to={`/edit/${album.id}`}><Button type="button">Edit</Button></Link>
      </Options>
      
    </Wrap>
  )
}

export default Card


const Wrap = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0 ,0 ,0 ,0.6);
  overflow: hidden;

  display:flex;
  align-items: center;
  justify-content: center;
  position: relative;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }



  @media (max-width: 850px) {
    div {
      opacity: 1;
      visibility: visible
    }
  }

  @media (min-width: 851px) {
    
    div {
    opacity: 0;
    visibility: hidden;
  }

    &:hover{
      opacity: 0.9;
    }

    &:hover > div  {
      opacity: 1;
      visibility: visible;
    }
  }


`

const Options = styled.div`
  width: 100%;
  height: 100%;
  
  position: absolute;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin-bottom: 40px;

  button {
    padding: 10px 20px;

    margin: 5px;

    text-decoration: none;

    @media (max-width: 500px) {
    padding: 5px 10px;
    font-size: 15px;
    }
  }
  
`

const Content = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  color: #fff;

  
`
const Name = styled.h3`
  
  text-shadow: 2px 2px 4px #000000;

  @media (max-width: 850px) {
    font-size: 15px;
  }
`
const Time = styled.span`
  font-size: 20px;
  text-shadow: 2px 2px 4px #000000;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`