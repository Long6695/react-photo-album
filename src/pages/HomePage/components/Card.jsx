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
      <img src="http://placeimg.com/640/480/cats" alt="" />
      <Content>
        <Name>{album.firstName ? album.firstName : 'Anonymous'}</Name>
        <Time>{convertDate(album.createdAt)}</Time>
      </Content>
      <Options>
        <Button type="button"><Link to={`/detail/${album.id}`}>View</Link></Button>
        <Button type="button"><Link to={`/edit/${album.id}`}>Edit</Link></Button>
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
    font-size: 16px;
    background-color: #6812E1;

    margin: 5px;

    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;

    box-shadow: 0 5px 5px rgba(0 ,0 ,0 ,0.6);
    transition: all 0.3s ease-in;

    &:hover {
      transform: translateY(2px);
    }

    &:active {
      animation : button 0.3s ease-in;
    }

    @media (max-width: 850px) {
    padding: 5px 10px;
    font-size: 14px;
  }

  }
  
    a { 
      text-decoration: none;
      color: #fff;
      letter-spacing: 1.2px;

    }
  }

  @keyframes button {
    from {
      transform: translateY(-2px)
    }
    to {
      transform: translateY(0px)
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

  @media (max-width: 850px) {
    font-size: 15px;
  }
`