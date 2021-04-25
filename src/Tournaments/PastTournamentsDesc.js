import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import winter from "../assets/winter.png";
import summer from "../assets/summer.png";
import spring from "../assets/spring.png";
import tie from "../assets/tie.jpg";

const PastTournamentsDesc = () => {
  return (
    <div className="registrationForm">
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
      ></Tab.Container>
      <Row className="gridPastTournaments">
        <Col sm={3} className="logoGrid">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                {" "}
                <img src={winter} className="logoT"></img>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={3} className="logoGrid">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                {" "}
                <img src={summer} className="logoT"></img>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="gridPastTournaments">
        <Col sm={3} className="logoGrid">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                {" "}
                <img src={spring} className="logoT"></img>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={3} className="logoGird">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                {" "}
                <img src={tie} className="logoT"></img>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Tab.Container />
    </div>
  );
};
export default PastTournamentsDesc;
