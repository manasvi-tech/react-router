import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Header from './Header'

const About = () => {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/contact");
    }
  return (

    <div>
      <h1>About us</h1>
      <button onClick={() => goToContact()}>Go to contact page</button>
    </div>
  )
}

export default About
