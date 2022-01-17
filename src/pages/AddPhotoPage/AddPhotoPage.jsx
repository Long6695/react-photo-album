import React from 'react'

import styled from 'styled-components'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
const AddPhotoPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('a')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text">Name</Input>
      <Input type="text">Image</Input>
      <Input type="text">Description</Input>
      <Button type="submit">Post Your Photo</Button>
    </Form>
  )
}

export default AddPhotoPage

const Form = styled.form`
  display : flex;
  flex-direction: column;
  align-items:center;

`