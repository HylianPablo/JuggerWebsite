import React, { Component } from "react";
import TutorialDataService from "../services/user.service";

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

//const [fileName, setFileName] = useState("Selecciona un archivo.");

export default class Registration extends Component {
  constructor(props) {
    
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
 
    this.state = {
      name: "",
      surname: "", 
      nick: "taka",
    };
  }



  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeSurname(e) {
    this.setState({
      surname: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      name: this.state.name,
      surname: this.state.surname,
      nick: "taka"
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          surname: response.data.surname,
          nick: "taka",

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      name: "",
      surname: "",
      nick: "taka",
    });
  }



  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>          
        ) : (
          //<br></br>
          <div className ="registrationForm">
            <Form.Group>
              <Row>
                <Col>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={this.state.name}
                      onChange={this.onChangeName}
                      name="name"
                    />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label htmlFor="surname">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      id="surname"
                      required
                      value={this.state.surname}
                      onChange={this.onChangeSurname}
                      name="surname"
                    />
                  </div>
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
                    //label={fileName}
                    //onChange={(e) => setFileName(e.target.files[0].name)}
                    custom
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Text className="text-muted">
              Todos sus datos serán encriptados y tratados con confidencialidad.
            </Form.Text>
            <br></br>
            <Button onClick={this.saveTutorial} className="btn btn-success">
              ¡Regístrame!
            </Button>
          </div>
        )}
      </div>
    );
  }
}





