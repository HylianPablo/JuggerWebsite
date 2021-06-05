import { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import TournamentDataService from "../services/tournament.service";

export default class ActiveTournamentDesc extends Component {
  constructor(props) {
    super(props);
    this.retrieveTournaments = this.retrieveTournaments.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTournament = this.setActiveTournament.bind(this);

    this.state = {
      tournaments: [],
      currentTournament: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveTournaments();
  }

  retrieveTournaments() {
    TournamentDataService.getAll()
      .then((response) => {
        this.setState({
          tournaments: response.data,
          currentTournament: response.data[0]
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTournaments();
    this.setState({
      currentTournament: null,
      currentIndex: -1,
    });
  }

  setActiveTournament(tournament, index) {
    this.setState({
      currentTournament: tournament,
      currentIndex: index,
    });
  }

  render() {
    const { tournaments, currentTournament, currentIndex } = this.state;

    return (
      <div className="registrationForm">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="tournamentsView"
        >
          <Row className="logoList2">
            <Col sm={3} className="logoList">
              {tournaments &&
                tournaments.map((tournament, index) => (
                  <Nav
                    variant="pills"
                    className={
                      "flex-column" +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveTournament(tournament, index)}
                    key={index}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey={tournament.id} className="notFocus">
                      <img src={tournament.image} className="logoT"></img>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                ))}
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {currentTournament ? (
                  <div>
                    <h1 className="subtitle">{currentTournament.name}</h1>
                    <div>
                      <Table className="tournamentsTable" striped bordered hover >
                        <tbody>
                          <tr>
                            <th>Ubicación</th>
                            <td>{currentTournament.location}</td>
                          </tr>
                          <tr>
                            <th>Fecha</th>
                            <td>{currentTournament.date}</td>
                          </tr>
                          <tr>
                            <th>Modelo</th>
                            <td>{currentTournament.model}</td>
                          </tr>
                        </tbody>
                      </Table>
                      <br></br>
                      <Button
                        variant="success"
                        size="lg"
                        block
                        className="primary1"
                        href="/torneos/inscripcion"
                      >
                        Inscríbe a tu equipo
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <br />
                    <p>No se han podido cargar los torneos correctamente.</p>
                  </div>
                )}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
