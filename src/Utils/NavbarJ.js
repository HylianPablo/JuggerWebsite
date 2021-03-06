import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NavbarJ = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/" className="">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Comunidad" id="collasible-van-dropdown">
            <NavDropdown.Item href="/mapa">Mapa</NavDropdown.Item>
            <NavDropdown.Item href="/equipos">Equipos</NavDropdown.Item>
            <NavDropdown.Item href="/nucleos">Nucleos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Torneos" id="collasible-van-dropdown">
            <NavDropdown.Item href="/torneos">Calendario de torneos</NavDropdown.Item>
            <NavDropdown.Item href="/torneosAnteriores">Torneos anteriores</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/ranking">Ranking</Nav.Link>
          <NavDropdown title="Tienda" id="collasible-nav-dropdown">
            <NavDropdown.Item href={"/tiendaKits/1"}>Armas</NavDropdown.Item>
            <NavDropdown.Item href={"/tiendaKits/2"}>Equipaciones</NavDropdown.Item>
            <NavDropdown.Item href={"/tiendaKits/3"}>Merchandising</NavDropdown.Item>
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
          <Nav.Link href="/miPerfil">
            <Button variant="secondary">Perfil</Button>
          </Nav.Link>
          <Nav.Link href="/miEquipo">
            <Button variant="secondary">Equipo</Button>
          </Nav.Link>
          <Nav.Link href="/add">
            <Button variant="secondary">Backend Add</Button>
          </Nav.Link>
          <Nav.Link href="/userFront">
            <Button variant="secondary">Backend List</Button>
          </Nav.Link>
          <Nav.Link href="/iniciarSesion">
            <Button variant="default" style={{background: "#BCB6FF", color: "black"}}>Inicia Sesión</Button>{' '}
            </Nav.Link>
          <Nav.Link eventKey={2} href="/registro">
          <Button variant="default" style={{background: "#94FBAB", color: "black"}}>Regístrate</Button>{' '}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarJ;
