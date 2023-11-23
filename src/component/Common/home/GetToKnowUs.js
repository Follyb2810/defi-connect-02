import React from 'react'
import Template from './../../Shared/Template'
import { geToKnowData, templatetHead } from '../../data'
import {  Col, Row } from 'react-bootstrap'

const GetToKnowUs = () => {
    const getToknow = templatetHead[7]
    const {title} =getToknow.getToKnowUs
    
    return (
        <Template title={title}>
        <Row className='justify-content-between align-items-center gap-2 gap-md-0 container-fluid'>
            {
                geToKnowData.map((data,index)=>(
                    <Col sm={12} md={4} key={index}>
                    <div className='p-3 py-3 text-start border border-1 shadow-lg  rounded-4 getTokowCard'>
                    <div className='d-flex justify-content-between align-content-center getTokowCardHead'>
                    <h6 className='fw-bolder fs-title'>{data.title}</h6>
                    <img src={data.img} alt='' style={{width:'30px'}}/>
                        
                    </div>
                    <div className='mt-3'>
                      <p className='fs-body m-0'>{data.para}</p>
                    </div>
                  </div>
                    </Col>
                ))
            }
        </Row>
            
        </Template>
    )
}

export default GetToKnowUs
