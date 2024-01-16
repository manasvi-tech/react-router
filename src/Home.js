import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
import Header from './Header';


const Home = () => {
  return (
    <>
    <Header/>
    <Outlet/> {/* This will giv the data of whatever next */}
    </>
  )
}

export default Home
