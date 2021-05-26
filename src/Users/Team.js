import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import blank from "../assets/blankProfile.png";

import ImageUpload from "../Utils/ImageUpload.js";
import TeamMembers from "./TeamMembers";

const Team = () => {
  return (
    <Form className="registrationForm">
      <br></br>
      <Form.Group controlId="formName">
        <Row className="profileModForm">
          <Col className="leftRegistration">
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Nombre del equipo" />
              </Col>
            </Row>
            <br></br>
            <Form.Group controlId="formNickUsername">
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="Ciudad" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Núcleo" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Nombre completo del capitán"
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Apodo del capitán" />
                </Col>
              </Row>
            </Form.Group>
            <TeamMembers/>
            <Form.Group>
              <Row>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Añadir nuevo/s miembros</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl as="textarea" aria-label="" />
                </InputGroup>
              </Row>
            </Form.Group>
          </Col>
          <Col className="profileModForm">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={blank} />
              <Card.Body>
                <Card.Title>Nombre del equipo</Card.Title>
                <Card.Text>Ciudad</Card.Text>
                <ImageUpload />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form.Group>

      <Form.Text className="text-muted">
        Todos sus datos serán encriptados y tratados con confidencialidad.
      </Form.Text>
      <br></br>
      <Button variant="primary" type="submit">
        Modificar datos del equipo
      </Button>
    </Form>
  );
};

export default Team;
