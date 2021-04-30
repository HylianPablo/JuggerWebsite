import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const TeamRegistration = () => {
  return (
    <Form className="registrationForm">
      <br></br>
      <Form.Group controlId="teamName">
        <Form.Control type="text" placeholder="Nombre del equipo" />
      </Form.Group>
      <Form.Group controlId="formName">
        <Row>
          <Col>
          <Form.Control type="text" placeholder="Núcleo del equipo" />
          </Col>
          <Col>
          <Form.Control type="text" placeholder="Ciudad del equipo" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Check
          required
          label="Acepto ser el capitán de este equipo y asumir la responsabilidad que ello conlleva."
          feedback="Debes aceptar este campo antes de enviar la solicitud."
        />
      </Form.Group>
      <br></br>
          <Button type="submit" variant="primary" size="lg" block>
            Inscríbe a tu equipo
          </Button>
    </Form>
  );
};
export default TeamRegistration;
