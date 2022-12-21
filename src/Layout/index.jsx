import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/index';

const Index = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Index