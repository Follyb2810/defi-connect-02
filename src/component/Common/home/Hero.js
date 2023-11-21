import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import {FaGreaterThan} from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='container-fluid'>
        
        <Row className='justify-content-between align-items-center mt-5 pt-5 overflow-hidden'>
        <Col sm={12} md={7} className=''>
        
        <h2 className='fs-head'>Fastest & Secure
        Platform to <b className='colorBlue me-2'>BORROW</b>
        your crypto.</h2>
        <p className='fs-subhead fw-light'>Borrow without selling your crypto with rates 
        as low as 0% and no extra fees. Just top up 
        and your credit line is immediately available.</p>
        <Button>
        <Link to='/borrow'>
        <span className='fw-bold text-white'>BORROW NOW <FaGreaterThan/></span>
        </Link>
        </Button>
        
        
    </Col>
    <Col sm={12} md={5}>
    
        <img src={require('./../../asset/images/hero.svg').default} className='hero'  alt=''/>
        
      </Col>
           
            
        </Row>
        </section>
    )
}

export default Hero
