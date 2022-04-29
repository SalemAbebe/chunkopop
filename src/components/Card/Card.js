import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="productDescription">
        <div className="title">{props.title}</div>
        <div className="detail">{props.detail}</div>
      </div>
    </div>
  );
}

export default Card;
