import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import PastTournamentsDesc from "./PastTournamentsDesc.js";


const PastTournaments = () => {
  return (
    <div className="registrationForm">
      {" "}
      <h1>Torneos anteriores</h1>
      {/* CSS of this div should be changed in a future */}
      <br></br>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="gridPastTournaments">
        <Row>
          <Col sm={3} className="logoList">
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action eventKey="first">
                2020
              </ListGroup.Item>
              <ListGroup.Item action eventKey="second">
                2019
              </ListGroup.Item>
              <ListGroup.Item action eventKey="third">
                2018
              </ListGroup.Item>
              <ListGroup.Item action eventKey="fourth">
                2017
              </ListGroup.Item>
              <ListGroup.Item action eventKey="fifth">
                2016
              </ListGroup.Item>
              <ListGroup.Item action eventKey="sixth">
                2015
              </ListGroup.Item>
            </ListGroup>
            ,
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <PastTournamentsDesc/>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>
                  <PastTournamentsDesc/>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>
                  <PastTournamentsDesc/>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default PastTournaments;
