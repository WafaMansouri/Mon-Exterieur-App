import React, { useEffect } from "react";
import Footer from "./Footer";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import get_products_action from "../actions/get_products_action";

const Boutique = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(get_products_action());
  }, []);
  return (
    <div id="boutique">
      <div className="boutique-header">
        <h1>Nos produits</h1>
        <img src="/images/header-boutique.png" alt="header image" />
      </div>
      <main className="boutique-main">
        <aside className="boutique-aside">
          <div className="boutique-aside-1">
            <h2>Categories</h2>
            <ul>
              <li>
                <a href="#">Lame Bois</a>{" "}
              </li>
              <li>
                <a href="#">Lame Composite</a>{" "}
              </li>
              <li>
                <a href="#">Panneau Bois</a>{" "}
              </li>
              <li>
                <a href="#">Grille Rigide</a>{" "}
              </li>
              <li>
                <a href="#">Gabion</a>{" "}
              </li>
            </ul>
          </div>
          <div className="boutique-aside-2">
            <img src="/icons/side-bar-icon.svg" alt="" />
            <h3>Configurez votre espace</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidu.
            </p>
            <span>E</span>
            <img className="arrow" src="/icons/arrow-left-line2.svg" alt="" />
          </div>
        </aside>
        <div className="products">
          {products.listProducts &&
            products.listProducts.length &&
            products.listProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Boutique;
