import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div id="hero">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Assets/Banner.jpg"}
          alt="chunkopop"
        />
      </div>
      <div className="heroTxt">
        <div className="heroTxt__1">Welcome to Chunko Pop</div>
        <div className="heroTxt__2">
          Your Friendly Neighborhood Pop Culture Shop
        </div>
      </div>
      <div className="shopNow">
        <a className="shop" href="#products">
          <button>Shop Now</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
