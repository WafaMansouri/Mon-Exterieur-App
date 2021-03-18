import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-description">
          <div>
            <h3>Liens Utiles</h3>
            <ul>
              <li>
                <a href="#">Configurateur</a>
              </li>
              <li>
                <a href="#">Notre magasin</a>
              </li>
              <li>
                <a href="#">Notice et installation</a>
              </li>
              <li>
                <a href="#"></a>Livraison transport
              </li>
            </ul>
          </div>
          <div>
            <h3>Nous contacter</h3>
            <h4>Address</h4>
            <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p>
            <h4>Telephone</h4>
            <p>+33 2 43 57 00 87</p>
          </div>
          <div>
            <h3>Horaires</h3>
            <p>Lundi a Vendredi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
