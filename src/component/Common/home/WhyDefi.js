import React from 'react';
import Template from './../../Shared/Template';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { templatetHead, whyDefiContent } from '../../data';

const WhyDefi = () => {
  const whyDefiData = templatetHead[1];
  const { whyDefiData:{title, para, img, img1, img2 }} = whyDefiData;

  return (
    <Template title={title} para={para} className='text-primary container-fluid' >
      <Card className='shadow-lg whyDefi rounded-4'>
        <Row className='align-items-center'>
          <Col sm={12} md={4} className=' '>
            <section className='d-flex flex-row justify-content-center flex-md-column '>
              <img src={img1} className='whyDefiImage' alt='' />
              <img src={img2} className='whyDefiImage' alt='' />
            </section>
          </Col>
          <Col sm={12} md={8}>
            <Stack>
              {whyDefiContent.map((content, index) => (
                <Stack direction='horizontal' className='text-start  border-bottom border-5 p-2' key={index}>
                  <div className='w-50 text-wrap fs-title p-2'>{content.itemFirst}</div>
                  <div className='w-25 text-center fs-subtitle p-2' style={{color:content.itemSecond==='Instant Crypto Credit Lines'?'blue':'green'}}>
                    {content.itemSecond}
                  </div>
                  <div className='w-25 text-center p-2 fs-subtitle' style={{color:content.itemLast==='Conventional Loans'?'blue':''}}>{content.itemLast}</div>
                </Stack>
              ))}
            </Stack>
          </Col>
        </Row>
      </Card>
    </Template>
  );
};

export default WhyDefi
