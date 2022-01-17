import React from 'react'

import styled from 'styled-components'

const Input = ({type, value, onChange, children}) => {
  return (
    <InputField>
    <label>{children}</label>
    <input type={type} value={value} onChange={onChange}/>
    </InputField>
  )
}

export default Input

const InputField =styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 0 auto 30px;


  label {
    font-size: 26px;
    left: 20px;
    top: 0;

    color : #fff;

  }

  input {
    height: 40px;
    font-size: 22px;
    color: #5d0ae0;
    padding: 0 20px;
    border-radius: 5px;
    border: none;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px rgba(249, 249,249,0.6);
    }

  }
  
  `