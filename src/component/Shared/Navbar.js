import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavData } from '../data';


function NavBar() {
  
  return (
    <Navbar expand="md" className="bg">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/"><img src={require('./../asset/images/deficonnect _lo.svg').default} className='logo' alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          {
            NavData.map((nav,index)=>(
              <Nav.Link
              key={index}
          as={NavLink}
          to={nav.path}
          style={({ isActive }) =>
            isActive ? { color: "black" } : { color: "blue" }
          }
        >
          {nav.name}
        </Nav.Link>
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
//   checkConnect ?
//   <WalletButton content='connect wallet' className='connect' click={DisconnectAccount} />
//   :
//   <WalletButton click={ConnectAccount} content=<span>{address.slice(0,10)} <FaWallet/></span> className='connect' />
// }