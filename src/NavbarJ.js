import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarJ = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
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
          <Nav.Link href="about">Sobre nosotros</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Redes sociales
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarJ;
