import React, { Component } from "react";
import { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import ActiveTournamentDesc from "./ActiveTournamentDesc.js";

import winter from "../assets/winter.png";
import summer from "../assets/summer.png";
import spring from "../assets/spring.png";

const Tournaments = () => {
  const lipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const [info, setInfo] = useState([
    { title: "Winter Cup 2020", body: lipsum, location: "Huesca", date: "20 de enero", model: "Puntos" },
    { title: "Summer Cup 2020", body: lipsum, location: "Murcia", date: "20 de julio", model: "Piedras" },
    { title: "Spring Cup 2020", body: lipsum, location: "Islas Feroe", date: "30 de febrero", model: "Puntos" }
  ]);

  return (
    <div className="registrationForm">
      {" "}
      {/* CSS of this div should be changed in a future */}
      <br></br>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="tournamentsView">
        <Row className="logoList2">
          <Col sm={3} className="logoList">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  {" "}
                  <img src={winter} className="logoT"></img>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  {" "}
                  <img src={summer} className="logoT"></img>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  {" "}
                  <img src={spring} className="logoT"></img>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <ActiveTournamentDesc info={info[0]} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>
                  <ActiveTournamentDesc info={info[1]} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>
                  <ActiveTournamentDesc info={info[2]} />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        <h1></h1>
      </Tab.Container>
      <br></br>
      <h1></h1>
    </div>
  );
};
export default Tournaments;
