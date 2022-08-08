import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

export const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Danny Soto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">          
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/dannyst89">
              <AiFillLinkedin />
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://github.com/DannyST89">
              <AiFillGithub/>
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://www.facebook.com/profile.php?id=100079033674689">
              <BsFacebook/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
