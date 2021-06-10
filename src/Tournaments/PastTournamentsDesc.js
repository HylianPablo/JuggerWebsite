import { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import TournamentDataService from "../services/tournament.service";

export default class PastTournamentsDesc extends Component {
  constructor(props) {
    super(props);
    this.retrieveTournaments = this.retrieveTournaments.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTournament = this.setActiveTournament.bind(this);
    this.retrieveTournamentsByYear = this.retrieveTournamentsByYear.bind(this);

    this.state = {
      tournaments: [],
      tournamentsEven: [], // Impar
      tournamentsOdd: [],  // Par
      currentTournament: null,
      currentIndex: -1,
      yearTop: "",
      yearBot: ""
    };
  }

  componentDidMount() {
    this.retrieveTournamentsByYear();
  }

  retrieveTournaments() {
    TournamentDataService.getAll()
      .then((response) => {
        this.setState({
          tournaments: response.data,
          tournamentsEven: response.data.filter(t => t.id%2!==0),
          tournamentsOdd: response.data.filter(t => t.id%2===0),
          currentTournament: response.data[0],
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  retrieveTournamentsByYear() {
    this.state.yearTop = this.props.yearTop;
    this.state.yearBot = this.props.yearBot;
    TournamentDataService.getAllByYear(this.state.yearTop, this.state.yearBot)
      .then((response) => {
        this.setState({
          tournaments: response.data,
          tournamentsEven: response.data.filter(t => t.id%2!==0),
          tournamentsOdd: response.data.filter(t => t.id%2===0),
          currentTournament: response.data[0],
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("ERROR");
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

    const { tournamentsEven, tournamentsOdd, currentIndex } = this.state;
    return (
      <div className="registrationForm">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
        ></Tab.Container>
        <Row className="gridPastTournaments">
          <Col sm={3} className="logoGrid">
          {tournamentsEven &&
                tournamentsEven.map((tournament, index) => (
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
                      <Nav.Link eventKey={tournament.id} href="torneosAnteriores/descripcion">
                      <img src={tournament.image} className="logoT imageLogoPast"></img>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                ))}
          </Col>
          <Col sm={3} className="logoGrid">
          {tournamentsOdd &&
                tournamentsOdd.map((tournament, index) => (
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
                      <Nav.Link eventKey={tournament.id} href="torneosAnteriores/descripcion">
                      <img src={tournament.image} className="logoT imageLogoPast" alt="Logo del evento"></img>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                ))}
                  </Col>
        </Row>
        <Tab.Container />
      </div>
    );
  }
}
