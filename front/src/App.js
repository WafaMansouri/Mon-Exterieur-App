import "./css/App.css";
import "./css/Logo.css";
import "./css/NavBar.css";
import "./css/Footer.css";
import "./css/Accueil.css";
import "./css/Boutique.css";
import "./css/Product.css";
import "./css/animations.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Accueil from "./components/Accueil";
import Boutique from "./components/Boutique";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/boutique" component={Boutique} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
