import React from 'react'

import styled from 'styled-components'

const Form = ({children, onSubmit}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.form`
  display : flex;
  flex-direction: column;
  align-items:center;
  margin-top: 50px;
`