import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useState } from "react";

const Registration = () => {
  const [fileName, setFileName] = useState("Selecciona un archivo.");

  return (
    <Form className="registrationForm">
      <br></br>
      <Form.Group controlId="formName">
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Nombre" />
          </Col>
          <Col>
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
        <OverlayTrigger
          overlay={
            <Tooltip>
              Su correo electrónico será de carácter privado y sólo se utilizará
              para coordinar torneos.
            </Tooltip>
          }
          delay={{ show: 250, hide: 350 }}
        >
          <Form.Control
            type="email"
            placeholder="Dirección de correo electrónico"
          />
        </OverlayTrigger>
      </Form.Group>
      <Form.Group controlId="formDNI">
        <OverlayTrigger
          overlay={
            <Tooltip>
              Su DNI/NIF será de carácter privado y sólo se utilizará para
              coordinar torneos.
            </Tooltip>
          }
          delay={{ show: 250, hide: 350 }}
        >
          <Form.Control type="text" placeholder="DNI/NIF" />
        </OverlayTrigger>
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
            <Form.File
              type="file"
              className="custom-file-label"
              id="photoInput"
              label={fileName}
              onChange={(e) => setFileName(e.target.files[0].name)}
              custom
            />
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
