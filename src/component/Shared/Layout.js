import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

const Layout = () => {
    return (
        <>
                <NavBar/>
                <Outlet/>
                <Footer/>
        </>
    )
}

export default Layout

