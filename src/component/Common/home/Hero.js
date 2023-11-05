import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ButtonComponent from './../../Shared/ButtonComponent'
import {FaGreaterThan} from 'react-icons/fa'

const Hero = () => {
    return (
        <Row className='justify-content-between align-items-center'>
            <Col xs={12} sm={7}>
                <h2 className='fs-head'>Fastest & Secure
                Platform to <b className='colorBlue me-2'>BORROW</b>
                your crypto.</h2>
                <p className='fs-subhead fw-light'>Borrow without selling your crypto with rates 
                as low as 0% and no extra fees. Just top up 
                and your credit line is immediately available.</p>
                <ButtonComponent content={<span className='fw-bold'>BORROW NOW <FaGreaterThan/></span>}/>
            </Col>
            <Col xs={12} sm={5}>
              <img src={require('./../../asset/images/hero.svg').default} className='hero'  alt=''/>
            </Col>
        </Row>
    )
}

export default Hero
