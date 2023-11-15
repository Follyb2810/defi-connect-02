import React from 'react'
import { Outlet,Navigate, useLocation } from 'react-router-dom'
import NavBar from './Navbar'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import BorrowHeader from './BorrowHeader'

const Layout = () => {

    const location = useLocation();
    const pathName = location.pathname;
    return (
        <>
           {
            pathName === '/borrow'?<BorrowHeader/>:<NavBar/>
           }
                
                <Outlet/>
                <Footer/>
        </>
    )
}

export default Layout

