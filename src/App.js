 //import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavbarJ from "./Utils/NavbarJ";
import Home from "./Home";
import Comunidad from "./Community/Comunidad.js";
import AboutUs from "./Utils/AboutUs.js";
import Ranking from "./Ranking/Ranking.js";
import Registration from "./Users/Registration.js";
import Footer from "./Utils/Footer.js";
import Content from "./Content/Content.js";
import SignIn from "./Users/SignIn";
import Tournaments from "./Tournaments/Tournaments.js";
import KitsShop from "./Shop/KitsShop";
import WeaponShop from "./Shop/WeaponShop";
import MerchandisingShop from "./Shop/MerchandisingShop";
import TeamRegistration from "./Tournaments/TeamRegistration.js";
import PastTournaments from "./Tournaments/PastTournaments";
import PastTournamentsInfo from "./Tournaments/PastTournamentInfo";



function App() {
  const pageName = "Jugger Community";

  return (
    <Router>
    <div className="App page-container">
      <div className="content">
        <h1>{pageName}</h1>
        <NavbarJ/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/comunidad">
          <Comunidad/>
        </Route>
        <Route path="/about">
          <AboutUs/>
        </Route>
        <Route path="/torneos/inscripcion">
          <TeamRegistration/>
        </Route>
        <Route path="/torneosAnteriores/descripcion">
          <PastTournamentsInfo/>
        </Route>
        <Route path="/torneosAnteriores">
          <PastTournaments/>
        </Route>
        <Route path="/torneos">
          <Tournaments/>
        </Route>
        <Route path="/ranking">
          <Ranking/>
        </Route>
        <Route path="/Yulia">
          <Content/>
        </Route>
        <Route path="/registro">
          <Registration/>
        </Route>
        <Route path="/iniciarSesion">
          <SignIn/>
        </Route>
        <Route path="/tiendaKits">
            <KitsShop/>
        </Route>
        <Route path="/tiendaArmas">
            <WeaponShop/>
        </Route>
        <Route path="/tiendaMerchandising">
          <MerchandisingShop/>
        </Route>
        
        </Switch>
      </div>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
    </Router>
  );
}

export default App;
