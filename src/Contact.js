import React from 'react'

import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    const goToHome = () =>{
        navigate("/")
        
    }
    const goBack = () => {
        navigate(-1) /* Goes Back to the previous page */
    }
  return (

    <div>
        
        <h1>Contact</h1>
        <button onClick={goToHome}>go to home page</button>
        <button onClick = {goBack}>go back</button>
    </div>
  )
}

export default Contact
