import React from 'react'
import { Outlet } from 'react-router-dom'
import Hadder from './components/Hadder/Hadder';
import Footer from './components/Footer/Footer';
function Layout() {
  return (
    <div>
      <Hadder />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
