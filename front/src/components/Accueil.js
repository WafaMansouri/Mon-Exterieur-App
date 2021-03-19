import React from "react";
import Footer from "./Footer";

const Accueil = () => {
  return (
    <div id="accueil">
      <header className="header-home">
        <img
          className="header-home-main-image"
          src="/images/home-header.png"
          alt="terrase"
        />
        <div className="header-home-images">
          <a href="#">
            <span>Lame composite</span>
            <img src="/images/lame-composite.png" alt="lame composite" />
          </a>
          <a href="#">
            <span>Lame en bois</span>
            <img src="/images/lame-bois.png" alt="lame en bois" />
          </a>
          <a href="#">
            <span>Panneau bois</span>
            <img src="/images/panneau-bois.png" alt="panneau bois" />
          </a>
          <a href="#">
            <span>Grille rigide</span>
            <img src="/images/grille-rigide.png" alt="grille rigide" />
          </a>
          <a href="#">
            <span>Gabion</span>
            <img src="/images/gabion.png" alt="gabion" />
          </a>
        </div>
      </header>
      <main>
        <div className="config-espace">
          <span>E</span>
          <img
            className="config-icon"
            src="/icons/configurateur.svg"
            alt="config icon"
          />
          <div>
            <h1>Configurez votre espace</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
              aspernatur voluptate eos tempore odio aliquid vero
            </p>
          </div>
          <img src="/icons/arrow-left-line.svg" alt="arrow left icon" />
        </div>
        <section className="nos-realisations-section">
          <div className="nos-realisation-text">
            <h1>Nos réalisations</h1>
            <div className="nos-realisations-box">
              <div className="nos-realisations-description">
                <h2>Panneau bois</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasdundefined
                </p>
              </div>

              <div className="arrows">
                <img
                  src="icons/arrow-left-line-black.svg"
                  alt="arrow left icon"
                />
                <div className="carousel">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
                <img
                  src="icons/arrow-right-line-black.svg"
                  alt="arrow right icon"
                />
              </div>
            </div>
          </div>
          <div className="nos-realisations-image">
            <div style={{ width: "100%" }}>
              <img src="/images/nos-realisation.png" alt="Panneau en bois" />
              <div className="nos-realisations-icon">
                <img src="/icons/E.svg" alt="E icon" />
              </div>
            </div>
          </div>
        </section>
        <section className="notice-installation">
          <div>
            <h1>Notice & Installation</h1>
            <p>
              Avant de commencer, calculez la quantité de bois, de béton et de
              quincaillerie dont vous aurez besoin.
            </p>
            <div className="notice-installation-savoir-plus">
              <span>En savoir plus</span>
              <img src="/icons/arrow-left-line.svg" alt="arrow let icon" />
            </div>
          </div>
          <div>
            <img src="/images/notice1.png" alt="" />
          </div>
          <div>
            <img src="/images/notice2.png" alt="" />
          </div>
          <div>
            <img src="/images/notice3.png" alt="" />
          </div>
          <div>
            <img src="/images/notice4.png" alt="" />
          </div>
          <div>
            <img src="/images/notice5.png" alt="" />
          </div>
        </section>

        <section className="notre-magasin">
          <div className="notre-magasin-image">
            <img src="/images/notre-magasin1.png" alt="notre magasin" />
          </div>
          <div>
            <h1>Notre magasin</h1>
            <div className="notre-magasin-description">
              <img src="/images/notre-magasin2.png" alt="notre magasin" />
              <div className="notre-magasin-p">
                <p>
                  Dolores et ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
              <div className="notre-magasin-savoir-plus">
                <span>En savoir plus</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.937"
                  height="23.937"
                  viewBox="0 0 23.937 23.937"
                >
                  <path className="a" d="M23.937,0H0V23.937H23.937Z" />
                  <path
                    className="b"
                    d="M16.14,10.982H4v1.995H16.14l-5.35,5.35,1.41,1.41,7.758-7.758L12.2,4.222l-1.41,1.41Z"
                    transform="translate(-0.011 -0.011)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Accueil;
