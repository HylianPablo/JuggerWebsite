//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarJ from "./Utils/NavbarJ";
import Home from "./Home";
import Map from "./Community/Map.js";
import Teams from "./Community/Teams.js"
import Nucleos from "./Community/Nucleos.js"
import AboutUs from "./Utils/AboutUs.js";
import Ranking from "./Ranking/Ranking.js";
import Registration from "./Users/RegistDemo.js";
import Footer from "./Utils/Footer.js";
import Content from "./Content/Content.js";
import SignIn from "./Users/SignIn";
import Profile from "./Users/Profile.js";
import Tournaments from "./Tournaments/Tournaments.js";
import KitsShop from "./Shop/Shop";
import TeamRegistration from "./Tournaments/TeamRegistration.js";
import PastTournaments from "./Tournaments/PastTournaments.js";
import PastTournamentsInfo from "./Tournaments/PastTournamentInfo.js";
import Team from "./Users/Team.js";

import TutorialsList from "./exampleBackend/tutorials-list.component";
import AddTutorial from "./exampleBackend/add-tutorial.component";
import Tutorial from "./exampleBackend/tutorial.component";


import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res}))
    .catch(err => err);
  }


  componentDidMount() {
    this.callAPI();
  }
  
  render() {
    const pageName = "Jugger Community";
    return (
      <Router>
        <div className="App page-container">
          <div className="content">
            <h1>{pageName}</h1>
            <NavbarJ />
            {/* EJEMPLO DE UNION A BACKEND*/}
            <p>{this.state.apiResponse}</p>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path={"/tutorials"} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
              <Route path="/mapa">
              <Map/>
            </Route>
            <Route path="/equipos">
              <Teams/>
            </Route>
            <Route path="/nucleos">
              <Nucleos/>
            </Route>  
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="/torneos/inscripcion">
                <TeamRegistration />
              </Route>
              <Route path="/torneosAnteriores/descripcion">
                <PastTournamentsInfo />
              </Route>
              <Route path="/torneosAnteriores">
                <PastTournaments />
              </Route>
              <Route path="/torneos">
                <Tournaments />
              </Route>
              <Route path="/ranking">
                <Ranking />
              </Route>
              <Route path="/Yulia">
                <Content />
              </Route>
              <Route path="/registro">
                <Registration />
              </Route>
              <Route path="/iniciarSesion">
                <SignIn />
              </Route>
              <Route path="/miPerfil">
                <Profile />
              </Route>
              <Route path="/miEquipo">
                <Team />
              </Route>
              <Route path="/tiendaKits/:id">
                <KitsShop />
              </Route>
            </Switch>
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
