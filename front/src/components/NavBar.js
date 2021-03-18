import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="primary-nav">
        <li>
          <Logo />
        </li>
        <li>
          <input
            type="text"
            className="input-recherche"
            placeholder="Recherche"
          />
        </li>
        <li>
          <a href="">
            {" "}
            <img
              src="/icons/location-map-marker.svg"
              alt="location-icon"
              width="26"
              height="26"
            />{" "}
            Notre magasin
          </a>
        </li>
        <li className="configurateur">
          <a href="">
            {" "}
            <img
              src="/icons/configurateur.svg"
              alt="config-icon"
              width="20"
              height="28"
            />{" "}
            Configurateur
          </a>{" "}
        </li>
      </ul>
      <ul className="secondary-nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/boutique">Boutique</Link>
        </li>
        <li>
          <Link to="#">Nos réalisations</Link>
        </li>
        <li>
          <Link to="#">Contactez-nous</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
