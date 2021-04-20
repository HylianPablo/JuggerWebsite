import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import winter from "./assets/winter.png";
import summer from "./assets/summer.png";
import spring from "./assets/spring.png";

const Tournaments = () => {
  return (
    <div className="registrationForm"> {/* CSS of this div should be changed in a future */}
        <br></br>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="logoList">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" > <img src={winter} className="logoT"></img></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"> <img src={summer} className="logoT"></img></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third"> <img src={spring} className="logoT"></img></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <h3>Torneo celebrado en invierno.</h3>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>
                  <h3>Torneo celebrado en verano.</h3>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>
                  <h3>Torneo celebrado en primavera.</h3>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
export default Tournaments;
