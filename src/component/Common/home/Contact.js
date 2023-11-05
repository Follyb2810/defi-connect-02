import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <section className='contactContainer'>
        <section className='contactContent p-5'>
         <Form className='bg-white  contactForm'>
         <h3 className='fw-bold text-center text-primary'>Contact Us</h3>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Enter Your Name</Form.Label>
           <Form.Control type="email" placeholder="name@example.com" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Valid Email address</Form.Label>
           <Form.Control type="email" placeholder="name@example.com" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Message</Form.Label>
           <Form.Control as="textarea" rows={3} />
         </Form.Group>
         <Button className='w-50 mx-auo'>Submit</Button>
       </Form>
         </section>
            
        </section>
    )
}

export default Contact
