import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className='contactContainer'>
      <section className='contactContent rounded-5 py-5'>
        <Form className='bg-white contactForm '>
          <h3 className='fw-bold text-center text-primary fs-subhead'>Contact Us</h3>
           <input type='text' className='black-input mt-3' placeholder='Enter your Name'/>
           <input type='text' className='black-input mt-3' placeholder='Valid Email Address'/>
           <textarea className='black-input mt-3' placeholder='Message'
           rows="4" cols="50" maxlength="200"
           />
          <div className="d-flex justify-content-center mt-4">
            <Button className='w-50'>Submit</Button>
          </div>
        </Form>
      </section>
    </section>
  )
}

export default Contact
