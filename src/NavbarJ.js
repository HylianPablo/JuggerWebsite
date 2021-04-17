import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NavbarJ = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/comunidad">Comunidad</Nav.Link>
          <Nav.Link href="#features">Torneos</Nav.Link>
          <Nav.Link href="/ranking">Ranking</Nav.Link>
          <NavDropdown title="Tienda" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Armas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Equipaciones
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Merchandising</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Some link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/signIn">
            <Button variant="warning">Inicia Sesión</Button>{' '}
            </Nav.Link>
          <Nav.Link eventKey={2} href="/signUp">
          <Button variant="primary">Regístrate</Button>{' '}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarJ;
