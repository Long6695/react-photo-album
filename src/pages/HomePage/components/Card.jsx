import React from 'react'

import styled from 'styled-components'

import Button from '../../../components/Button/Button'

import { convertDate } from '../../../helper/convertDate'

const Card = ({album}) => {

  console.log(album)
  return (
    <Wrap>
      <img src="http://placeimg.com/640/480/cats" alt="" />
      <Content>
        <Name>{album.firstName}</Name>
        <Time>{convertDate(album.createdAt)}</Time>
      </Content>
      <Options>
        <Button type="button">View</Button>
        <Button type="button">Edit</Button>
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

  &:hover{
    opacity: 0.9;
  }

  &:hover > div  {
    opacity: 1;
    visibility: visible;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    opacity: 0;
    visibility: hidden;
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
    color: #fff;
    letter-spacing: 1.2px;

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
  font-size: 25px;
  text-shadow: 2px 2px 4px #000000;
`
const Time = styled.span`
  font-size: 20px;
  text-shadow: 2px 2px 4px #000000;
`