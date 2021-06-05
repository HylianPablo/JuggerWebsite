import Card from "react-bootstrap/Card";
import { SocialIcon } from "react-social-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav"
const Footer = () => {
  return (
    <div className="main-footer">
    <Card className="text-center" bg={"dark"} text={"light"}>
      <Card.Body>
        <Card.Title><Nav.Link href="/about" className="fourthColor">Sobre nosotros</Nav.Link></Card.Title>
        <Card.Text>¡Síguenos en nuestras redes sociales!</Card.Text>
        <Row className="justify-content-md-center">
          <Col md={{ span: 1, offset: 0 }}>
            <SocialIcon url="https://twitter.com/juggerpucela" />
          </Col >
          <Col md={{ span: 1, offset: 0 }}>
            <SocialIcon url="https://www.instagram.com/juggerpucela/?hl=es" />
          </Col>
          <Col md={{ span: 1, offset: 0 }}>
            <SocialIcon url="https://www.fejugger.es/" />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-muted">
        2021 - Jugger Community &copy;
      </Card.Footer>
    </Card>
    </div>
  );
};
export default Footer;
