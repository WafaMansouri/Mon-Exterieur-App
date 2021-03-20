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
            placeholder="&#61442;   Recherche"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />
        </li>
        <li className="notre-magasin">
          <a href="">
            {" "}
            <img
              className="img1"
              src="/icons/location-map-marker.svg"
              alt="location-icon"
              width="26"
              height="26"
            />{" "}
            <span>Notre magasin</span>
            <img
              className="img2"
              src="/icons/location-map-marker.svg"
              alt="location-icon"
              width="26"
              height="26"
            />
          </a>
        </li>
        <li className="configurateur">
          <a href="">
            {" "}
            <img
              className="img1"
              src="/icons/configurateur.svg"
              alt="config-icon"
              width="20"
              height="28"
            />{" "}
            <span>Configurateur</span>
            <img
              className="img2"
              src="/icons/configurateur.svg"
              alt="config-icon"
              width="20"
              height="28"
            />
          </a>{" "}
        </li>
      </ul>
      <ul className="secondary-nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li className="secondary-nav-boutique">
          <Link to="/boutique">Boutique</Link>
          <div className="boutique-dropdown">
            <a hre="#">Lame composite</a>
            <a hre="#">Lame en bois</a>
            <a hre="#">Panneau du bois</a>
            <a hre="#">Grille rigide</a>
            <a hre="#">Gabion</a>
            <Link to="/boutique">Boutique</Link>
          </div>
        </li>
        <li>
          <Link to="#">Nos réalisations</Link>
        </li>
        <li className="secondary-nav-contact">
          <Link to="#">Contactez-nous</Link>
          <div className="contact-dropdown">
            <div className="contact-dropdown-img">
              <span>Coordonnées & Map</span>
              <img src="/images/img-accueil.png" alt="" />
            </div>
            <p>
              Hey! Pour toute informations ou suggestions, Merci de remplir le
              formulaire suivant
            </p>
            <form action="">
              <label for="">Nom & Prénom</label>
              <input type="text" />
              <label for="">Email</label>
              <input type="email" />
              <label for="">Message</label>
              <textarea name="" id=""></textarea>
              <a className="contact-dropdown-button">Envoyez</a>
            </form>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
