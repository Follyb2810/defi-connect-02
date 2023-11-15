import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function BorrowHeader() {
  
  return (
    <Navbar expand="md" className="bg fixed-top " style={{backdropFilter:'blur(5px)'}}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/"><img src={require('./../asset/images/deficonnect _lo.svg').default} className='logo' alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link
          as={NavLink}
          to='/'
          style={({ isActive }) =>
            isActive ? { color: "black" } : { color: "blue" }
          }
          >
          home
          </Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BorrowHeader;