import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.picture} alt={`${product.product_name} image`} />
      <div className="product-description">
        <div className="product-text">
          <h2>{product.product_name}</h2>
          <span className="price">{`${product.price} ML`}</span>
        </div>
        <div className="product-voir-detail">
          <span>Voir détails</span>
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
  );
};

export default Product;
