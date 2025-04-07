
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/styles.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-style">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://static.wixstatic.com/media/43e6bc_150e4ac637334ef7af6a98d99295829b~mv2_d_2955_1824_s_2.png/v1/fill/w_186,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GhhLogoReg.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#home">STAFF</Nav.Link>
            <Nav.Link href="#home">SCHEDULE</Nav.Link>
            <Nav.Link href="#home">RESOURCES</Nav.Link>
            <Nav.Link href="#home">CONTACT</Nav.Link>
            <Nav.Link href="#home">SUPPORT</Nav.Link>
            <Nav.Link href="#home">SHOP</Nav.Link>
            <NavDropdown title="MEDIA" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SHORTS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">PODCASTS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">VIDEOS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;