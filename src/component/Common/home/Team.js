import React from 'react'
import { Card, Col, Row, Stack } from 'react-bootstrap'
import { templatetHead } from '../../data'
import Template from '../../Shared/Template'


const Team = () => {
    const partner = templatetHead[9]
    const {title,teamDetails} = partner.TeamData
    return (
        <Template title={title} className='fagBg px-0 px-md-3 py-4'>
        <Row className='px-1 px-md-5'>
          {
            teamDetails.map((data,index)=>(
                <Col xs={12} sm={6} md={4} key={index} className='g-3'>
                    <Card className='text-start  py-1 py-md-3 py-lg-4 pt-2 pt-md-3 px-1 px-md-1 px-lg-3 rounded-4'>
                        <div>
                        <img src={data.teamImg} alt={data.id} style={{width:'50px'}}  className='rounded-5'/>
                        <h5 className='mt-4'>{data.teamName}</h5>
                        <div className='mt-3'>
                            {
                               data.teamTitle.map((data,index)=>(
                                <p className='p-0 m-1'>{data}</p>
                               )) 
                            }
                        </div>
                        </div>
                    </Card>
                </Col>
            ))
          }
        </Row>
            
        </Template>
    )
}

export default Team
