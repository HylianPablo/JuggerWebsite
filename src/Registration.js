import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Registration = () => {
  return (
    <Form className="registrationForm">
      <br></br>
      <Form.Group controlId="formName">
        <Row>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Nombre" />
          </Col>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Apellidos" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formNickUsername">
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Apodo" />
          </Col>
          <Col>
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Dirección de correo electrónico"
        />
      </Form.Group>
      <Form.Group controlId="formDNI">
        <Form.Control type="text" placeholder="DNI/NIF" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Row>
          <Col>
            <Form.Control type="password" placeholder="Contraseña" />
          </Col>
          <Col>
            <Form.Control type="password" placeholder="Repita la contraseña" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                Introduce una foto de perfil para poder identificarte.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Form.File id="profilePictureSerious" label="" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Text className="text-muted">
        Todos sus datos serán encriptados y tratados con confidencialidad.
      </Form.Text>
      <br></br>
      <Button variant="primary" type="submit">
        ¡Regístrame!
      </Button>
    </Form>
  );
};

export default Registration;
