import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import {AiOutlineArrowRight} from 'react-icons/ai'
const FooterEmail = () => {
    return (
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" className='bg-primary' id="button-addon2">
            <AiOutlineArrowRight style={{color:'white'}}/>
          </Button>
        </InputGroup>
    )
}

export default FooterEmail
