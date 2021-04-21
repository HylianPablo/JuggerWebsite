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
          <Nav.Link href="/torneos">Torneos</Nav.Link>
          <Nav.Link href="/ranking">Ranking</Nav.Link>
          <NavDropdown title="Tienda" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/tiendaArmas">Armas</NavDropdown.Item>
            <NavDropdown.Item href="/tiendaKits">Equipaciones</NavDropdown.Item>
            <NavDropdown.Item href="/tiendaMerchandising">Merchandising</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Contenidos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Técnicas de Jugger</NavDropdown.Item>
            <NavDropdown.Item href="/Yulia">Coaching de Yulia Barrera</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="FEJ" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Bitácora</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://fejugger.es/bitacora/tag/ranking/">
              Ranking de FEJugger
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/iniciarSesion">
            <Button variant="warning">Inicia Sesión</Button>{' '}
            </Nav.Link>
          <Nav.Link eventKey={2} href="/registro">
          <Button variant="primary">Regístrate</Button>{' '}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarJ;