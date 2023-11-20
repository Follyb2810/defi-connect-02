import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BorrowHeaderContent } from '../data';



function BorrowHeader() {
  
  return (
    <Navbar expand="md" className="bg fixed-top " style={{backdropFilter:'blur(5px)'}}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/"><img src={require('./../asset/images/deficonnect _lo.svg').default} className='logo' alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          {
            BorrowHeaderContent.map((data,index)=>(
              <Nav.Link key={index}
          as={NavLink}
          to={data.path}
          style={({ isActive }) =>
            isActive ? { color: "black" } : { color: "blue" }
          }
          >
          {data.name}
          </Nav.Link>
            ))
          }
          <Button className='ms-2'>Connect Button</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BorrowHeader;