import React from 'react'
import Template from './../../Shared/Template'
import { templatetHead } from '../../data'
import { Button, Col, Row } from 'react-bootstrap'
import {PartnerContent} from './../../data'

const Partner = () => {
    const partner = templatetHead[8]
    const {title} = partner.partnerData
    console.log(title)
    return (
        <Template title={title}>
         <Row>
          <Col sm={12} md={6} className='text-start'>
            <h6 className='fs-subtitle' >{PartnerContent.subtitle}</h6>
            <p className='h-25 fs-subbody'>{PartnerContent.subtitle}</p>
            <Button>Partnership</Button>
          </Col>
          <Col sm={12} md={6} className='mt-4 mt-md-0'>
            <Row>
             <Col xs={3} sm={3} md={6}>
              <img src={PartnerContent.img1} alt='' style={{width:'100px'}}/>
             </Col>
             <Col xs={3} sm={3} md={6}>
              <img src={PartnerContent.img2} alt='' style={{width:'100px'}}/>
             </Col>
             <Col xs={3} sm={3} md={6}>
              <img src={PartnerContent.img3} alt='' style={{width:'100px'}}/>
             </Col>
             <Col xs={3} sm={3} md={6}>
              <img src={PartnerContent.img4} alt='' style={{width:'100px'}}/>
             </Col>
            </Row>
          </Col>
         </Row>
            
        </Template>
    )
}

export default Partner
