import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import PastTournamentsDesc from "./PastTournamentsDesc.js";


const PastTournaments = () => {
  return (
    <div className="registrationForm">
      {" "}
      <h1 className="subtitle">Torneos anteriores</h1>
      {/* CSS of this div should be changed in a future */}
      <br></br>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="gridPastTournaments">
        <Row>
          <Col sm={3} className="logoList">
            <ListGroup >
              <ListGroup.Item action eventKey="first" variant="success">
                2020
              </ListGroup.Item>
              <ListGroup.Item action eventKey="second" variant="success">
                2019
              </ListGroup.Item>
              <ListGroup.Item action eventKey="third" variant="success">
                2018
              </ListGroup.Item>
              <ListGroup.Item action eventKey="fourth" variant="success">
                2017
              </ListGroup.Item>
              <ListGroup.Item action eventKey="fifth" variant="success">
                2016
              </ListGroup.Item>
              <ListGroup.Item action eventKey="sixth" variant="success">
                2015
              </ListGroup.Item>
            </ListGroup>
            ,
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <PastTournamentsDesc yearTop="2020-01-01 12:00:00" yearBot="2020-12-31 22:00:00"/>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>
                  <PastTournamentsDesc yearTop="2019-01-01 12:00:00" yearBot="2019-12-31 22:00:00"/>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>
                  <PastTournamentsDesc yearTop="2018-01-01 12:00:00" yearBot="2018-12-31 22:00:00"/>
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
