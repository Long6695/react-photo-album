import React, {useState, useEffect} from 'react'

//router
import { Link, useLocation } from 'react-router-dom'

// styled
import styled from 'styled-components'



const Nav = () => {
  const location = useLocation()
  
  const NAV_LINK = [
    {
      id: 1,
      name: 'Home',
      link: '/',
      isActive: true,
    },
    {
      id: 2,
      name: 'Post Your Image',
      link: '/add',
      isActive: false,
    },
  ]
  
  const [toggleActive, setToggleActive] = useState(NAV_LINK)
  

  useEffect(() => {
    setToggleActive(toggleActive.map(item => {
      return item.link === location.pathname ? {...item, isActive: true} : {...item, isActive: false}
    }))
    // eslint-disable-next-line
  },[location.pathname])

  return (
    <Wrap>
      <ul>

        {toggleActive.map(item => (
          <li key= {item.id}>
            <CustomLink 
              style={item.isActive ? {borderBottom: "3px solid #fff"} : null} 
              to={item.link}>
              {item.name}
            </CustomLink>
          </li>
        ))}

      </ul>
    </Wrap>
  )
}

export default Nav

const Wrap = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 30px;
  right: 0;
  left: -100px;

  display:flex;
  justify-content: flex-end;
  z-index: 100;

  @media ( max-width: 500px ) {
  top: 20px;
  left: 0;
  justify-content: center;

  }

  ul {
    display: flex;
    align-item: center;
    list-style: none;
    
    li:not(last-child) {
      margin-left: 40px;

    

    @media ( max-width: 500px ) {
      margin: 0 20px;
  }
    }
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  text-shadow: -2px 2px 7px #CE5937;

  &:hover {
    border-bottom: 2px solid rgba(249, 249, 249, 0.6)
  }
`