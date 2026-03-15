import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <div className='my-5'>
      {/* This is where the content of the current route will be rendered */}
      <Outlet />
    </div>
    </>
  )
}

export default Layout