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
  display: flex;
  justify-content: flex-end;
  align-item: center;

  ul {
    display: flex;
    align-item: center;
    list-style: none;
    
    li {
      margin-left: 40px;

    }
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 22px;

  &:hover {
    border-bottom: 2px solid rgba(249, 249, 249, 0.6)
  }
`