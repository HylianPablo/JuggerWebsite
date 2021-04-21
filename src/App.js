 //import logo from "./logo.svg";
import "./App.css";
import NavbarJ from "./NavbarJ";
import Home from "./Home";
import Comunidad from "./Comunidad.js";
import AboutUs from "./AboutUs.js";
import Ranking from "./Ranking.js";
import Registration from "./Registration.js";
import Footer from "./Footer.js";
import Content from "./Content.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from "./SignIn";
import Tournaments from "./Tournaments.js";
import KitsShop from "./KitsShop";
import WeaponShop from "./WeaponShop";
import MerchandisingShop from "./MerchandisingShop";



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
        <Route path="/torneos">
          <Tournaments/>
        </Route>
        <Route path="/ranking">
          <Ranking/>
        </Route>
        <Route path="/Yulia">
          <Content/>
        </Route>
        <Route path="/signUp">
          <Registration/>
        </Route>
        <Route path="/signIn">
          <SignIn/>
        </Route>
        <Route path="/equipaciones">
            <KitsShop/>
        </Route>
        <Route path="/armas">
            <WeaponShop/>
        </Route>
        <Route path="/merchandising">
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
