import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const NavBar = (props) => (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/" className="fs-3">Guillaume Elambert</Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto lead">
              {
                props.links ? props.links.map((link, id) => {
                    return(<Nav.Link key={id} as={AnchorLink} href={link.href}>{link.text}</Nav.Link>)
                }) : "" 
              }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
);

export default NavBar;