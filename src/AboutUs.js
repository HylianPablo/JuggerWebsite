import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import pablo from "./assets/perfil_Pablo.jpg";
import kuma from "./assets/perfil_Kuma.PNG";

const AboutUs = () => {
  return (
    <div>
      <h1>¡Conoce al equipo!</h1>
      <br></br>
      <Row className="justify-content-md-center">
        <Col md={{ span: 2, offset: 0 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pablo} className="card-img-top" />
            <Card.Body>
              <Card.Title>Pablo Martínez López </Card.Title>
              <Card.Text className="card-txt-top">
                Desarrollador líder,<br></br> SCRUM Master.
              </Card.Text>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/pablomartinezbss/"
              >
                Ir a LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 2, offset: 0 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={kuma} className="card-img-top" />
            <Card.Body>
              <Card.Title>Hugo Prieto Tárrega </Card.Title>
              <Card.Text className="card-txt-top">
                Desarrollador, <br></br> Capitán de Bushido, <br></br>{" "}
                Presidente de AJSV.
              </Card.Text>
              <Button variant="primary">Ir a LinkedIn</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
