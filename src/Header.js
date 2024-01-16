import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <a href="#">Logo</a>
        <ul>
            <li>
                <NavLink to ='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to ='/Contact'> Contact us</NavLink>
            </li>
            <li>
                <NavLink to='/About'> About us</NavLink>
            </li>
        </ul>
        
    </header>
  )
}

export default Header
