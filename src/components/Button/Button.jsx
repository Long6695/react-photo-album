import React from 'react'
import styled from 'styled-components'

const Button = ({children, type, onClick}) => <StyledButton type={type} onClick={onClick} >{children}</StyledButton>

export default Button

const StyledButton = styled.button`
  border:none;
  outline: none;

  padding: 15px 20px;
  
  border-radius: 5px;
  background: linear-gradient(to right, #a86ef4, #5505E0);
  color: #fff;
  font-size: 18px;
  transition: all 0.3s ease-in;

  letter-spacing: 1.2px;

  box-shadow: 0 5px 5px rgba(0 ,0 ,0 ,0.6);

  cursor: pointer;

    &:hover {
      transform: translateY(2px);
    }

    &:active {
      animation : button 0.3s ease-in;
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