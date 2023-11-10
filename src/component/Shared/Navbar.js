import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavData } from '../data';


function NavBar() {
  
  return (
    <Navbar expand="md" className="bg fixed-top " style={{backdropFilter:'blur(5px)'}}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/"><img src={require('./../asset/images/deficonnect _lo.svg').default} className='logo' alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          
            {
              NavData.map((nav,index)=>(
                <a href={nav.path} key={index} className='px-auto mx-auto mx-md-0 py-2 py-md-0 px-md-2'>{nav.name}</a>
              ))
            }
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


// {
//   NavData.map((nav,index)=>(
//     <Nav.Link
//     key={index}
// as={NavLink}
// to={nav.path}
// style={({ isActive }) =>
//   isActive ? { color: "black" } : { color: "blue" }
// }
// >
// <a href={nav.path} >{nav.name}</a>
// </Nav.Link>
//   ))
// }