import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialIcon } from "react-social-icons";

import pablo from "../assets/perfil_Pablo.jpg";
import kuma from "../assets/perfil_Kuma.PNG";
import bob from "../assets/perfil_Bob.jpg";
import dani from "../assets/perfil_Dani.jpg";
import rasero from "../assets/perfil_Rasero.jpg";

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
              <SocialIcon url="https://www.linkedin.com/in/pablomartinezbss/"/>
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
              <SocialIcon url="https://www.linkedin.com/in/hugo-prieto-t%C3%A1rrega/?originalSubdomain=es"/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 2, offset: 0 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={bob} className="card-img-top" />
            <Card.Body>
              <Card.Title>Pablo González Sánchez</Card.Title>
              <Card.Text className="card-txt-top">
                Diseñador gráfico, <br></br> Jugador de Gulden Draak.
              </Card.Text>
              <SocialIcon url="https://es.fiverr.com/pablogonzlezsnc?up_rollout=true"/>
              &nbsp; &nbsp;
              <SocialIcon url="https://www.instagram.com/bob.png/"/>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 2, offset: 0 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={dani} className="card-img-top" />
            <Card.Body>
              <Card.Title>Daniel Argüello Morán</Card.Title>
              <Card.Text className="card-txt-top">
                Desarrollador, <br></br> Impresión 3D, <br></br> Jugador de Bushido.
              </Card.Text>
              <SocialIcon url="https://www.linkedin.com/in/daniel-argüello-morán-7755991aa/" />
              &nbsp; &nbsp;
              <SocialIcon url="https://www.instagram.com/dani_projects_/"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className="justify-content-md-center">
        <Col md={{ span: 2, offset: 0 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={rasero} className="card-img-top" />
            <Card.Body>
              <Card.Title>Miguel Rasero Martín </Card.Title>
              <Card.Text className="card-txt-top">
                Desarrollador,<br></br> Jugador de Gulden Draak.
              </Card.Text>
              <SocialIcon url="https://www.linkedin.com/in/miguel-rasero-675894205"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
