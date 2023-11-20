import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const changeData = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const notify = () => toast("Wow so easy!");

  const SubmitData = (e) => {
    e.preventDefault();
    console.log(formdata);
    notify();
  };

  return (
    <section className='contactContainer' id='contact'>
      <section className='contactContent rounded-5 p-2 p-md-5 w-100 '>
        <Form className='bg-white contactForm' onSubmit={SubmitData}>
          <h3 className='fw-bold text-center text-primary fs-subhead'>Contact Us</h3>
          <Form.Control type='text' className='black-input mt-3' name="name" placeholder='Enter your Name' onChange={changeData} />
          <Form.Control type='text' className='black-input mt-3' name="email" placeholder='Valid Email Address' onChange={changeData} />
          <Form.Control as="textarea" className='black-input mt-3' name="message" placeholder='Message' rows="4" maxLength="200" onChange={changeData} />
          <div className="d-flex justify-content-center mt-4">
            <Button type="submit" className='w-50'>Submit</Button>
          </div>
        </Form>
        <ToastContainer />
      </section>
    </section>
  );
};

export default Contact;