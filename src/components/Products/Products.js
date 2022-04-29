import React from "react";
import Card from "../Card/Card";
import "./products.css";
import { cardData } from "../../data";

function Products() {
  return (
    <div id="products">
      <div className="ProductsHeader">Products</div>
      <div className="productsList">
        {cardData.map((cardData) => (
          <Card
            img={cardData.image}
            title={cardData.title}
            detail={cardData.details}
            alt={cardData.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
