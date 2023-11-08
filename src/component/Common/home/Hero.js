import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ButtonComponent from './../../Shared/ButtonComponent'
import {FaGreaterThan} from 'react-icons/fa'

const Hero = () => {
    return (
        <section className='container-fluid'>
        
        <Row className='justify-content-between align-items-center mt-5 pt-5'>
            <Col sm={12} md={7} className=''>
                <h2 className='fs-head'>Fastest & Secure
                Platform to <b className='colorBlue me-2'>BORROW</b>
                your crypto.</h2>
                <p className='fs-subhead fw-light'>Borrow without selling your crypto with rates 
                as low as 0% and no extra fees. Just top up 
                and your credit line is immediately available.</p>
                <ButtonComponent content={<span className='fw-bold'>BORROW NOW <FaGreaterThan/></span>}/>
            </Col>
            <Col sm={12} md={5}>
              <img src={require('./../../asset/images/hero.svg').default} className='hero'  alt=''/>
            </Col>
        </Row>
        </section>
    )
}

export default Hero
