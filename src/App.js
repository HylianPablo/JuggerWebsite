//import logo from "./logo.svg";
import "./App.css";
import NavbarJ from "./NavbarJ";
import Home from "./Home";
import AboutUs from "./AboutUs.js";
import Ranking from "./Ranking.js";
import Registration from "./Registration.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from "./SignIn";


function App() {
  const pageName = "Jugger Community";

  return (
    <Router>
    <div className="App">
      <div className="content">
        <h1>{pageName}</h1>
        <NavbarJ/>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <AboutUs/>
        </Route>
        <Route path="/ranking">
          <Ranking/>
        </Route>
        <Route path="/signUp">
          <Registration/>
        </Route>
        <Route path="/signIn">
          <SignIn/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
