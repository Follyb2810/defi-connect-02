import React from 'react'
import Template from './../../Shared/Template'
import { templatetHead } from '../../data'
import { Button, Col, Row } from 'react-bootstrap'
import {PartnerContent} from './../../data'
import Img from './../../asset/images/business.jpg'
import Img1 from './../../asset/images/partner.jpg'

const Partner = () => {
    const partner = templatetHead[8]
    const {title} = partner.partnerData
    console.log(title)
    return (
        <Template title={title}>
         <Row className='justify-content-between'>
          <Col sm={12} md={5} className='text-start'>
            <h6 className='fs-head fw-bolder' >{PartnerContent.subtitle}</h6>
            <p className='h-25 fs-subbody'>{PartnerContent.body}</p>
            <Button className='mt-2 mt-md-0'> Partnership</Button>
          </Col>
          <Col sm={12} md={7} className='mt-4 mt-md-0'>
            <Row className='g-2'>
             <Col xs={3} sm={3} md={6}>
              <img src={Img1} alt='' className='partner'/>
             </Col>
             <Col xs={3} sm={3} md={6}>
              <img src={Img1} alt='' className='partner'/>
             </Col>
             <Col xs={3} sm={3} md={6}>
              <img src={Img} alt='' className='partner'/>
             </Col>
             <Col xs={3} sm={3} md={6}>
              <img src={Img} alt='' className='partner'/>
             </Col>
            </Row>
          </Col>
         </Row>
            
        </Template>
    )
}

export default Partner
