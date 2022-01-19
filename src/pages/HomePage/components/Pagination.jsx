import React from 'react'
import styled from 'styled-components'
const Pagination = () => {
  return (
    <StyledPagination >
      <a href="#">Prev</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">Next</a>
    </StyledPagination>
  )
}

export default Pagination

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-end;
  max-width: 1200px;
  margin: 20px auto;
  a {
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 20px;
    text-shadow: -2px 2px 7px #CE5937;

    &:hover {
      background: #fff;
      border-radius: 8px;
      color: #5807E0;
      text-shadow: none;

    }
  }
`