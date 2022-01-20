import React from 'react'
import styled from 'styled-components'

import { useAlbumContext } from '../../../context/albumContext'


const Pagination = ({page, setPage}) => {

  const {totalPage} = useAlbumContext()

  const handlePrevPage = () => {
    setPage(prev => prev - 1)
  }

  const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

  const handleCallApiWithPage = (num) => () => {
    setPage(num)
  }

  const DISABLE_BTN_STYLES = {
    background: '#cccccc', 
    pointerEvents: 'none', 
    cursor: 'default',
    color: '#666666',
    borderRadius: '8px',
    textShadow: 'none',
  }

  const PAGE_NUM_STYLES = {
    background: '#fff',
    borderRadius: '8px',
    color: '#5807E0',
    textShadow: 'none',
  }
  
  const lastItem = Array.from(Array(totalPage).keys()).length

  return (
    <StyledPagination >
        <li style={page === 1 ? DISABLE_BTN_STYLES : null} onClick={handlePrevPage}>Prev</li>
      {Array.from(Array(totalPage).keys()).map(item => (
        <li style={page === item + 1  ? PAGE_NUM_STYLES : null} key={item} onClick={handleCallApiWithPage(item + 1)}>{item + 1}</li>
      ))}
        <li style={page === lastItem ? DISABLE_BTN_STYLES : null} onClick={handleNextPage}>Next</li>
    </StyledPagination>
  )
}

export default Pagination

const StyledPagination = styled.ul`
  display: flex;
  align-items: center;
  justify-content:flex-end;
  max-width: 800px;
  margin: 20px;
  list-style: none;

  li {
    color: #fff;
    padding: 8px 16px;
    margin: 0 4px;

    text-decoration: none;
    font-size: 20px;

    text-shadow: -2px 2px 7px #CE5937;
    cursor: pointer;

    @media ( max-width: 500px ) {
      padding: 8px 14px;
  }
    &:hover {
      background: rgba(249,249,249,.6);
      border-radius: 8px;
      color: #5807E0;
      text-shadow: none;

    }
  }
`