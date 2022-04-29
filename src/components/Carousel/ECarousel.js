import React, { useState } from "react";
import "./ECarousel.css";

import { EVENTS_IMG_URLS } from "../../data";
import Slide from "@mui/material/Slide";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon =
    direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />;

  return <div onClick={clickFunction}>{icon}</div>;
}

function App() {
  const [index, setIndex] = useState(0);
  const imageUrl = EVENTS_IMG_URLS[index].image;
  console.log(imageUrl);
  const numSlides = EVENTS_IMG_URLS.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 200);
  };

  return (
    <div id="events">
      <div className="eventsHeader ">Events</div>

      <div className="carousel">
        <Arrow
          direction={"left"}
          clickFunction={() => {
            onArrowClick("left");
          }}
        />
        <Slide in={slideIn} direction={slideDirection}>
          <div>
            <img src={imageUrl} alt="" />
          </div>
        </Slide>
        <Arrow
          direction={"right"}
          clickFunction={() => {
            onArrowClick("right");
          }}
        />
      </div>
    </div>
  );
}

export default App;
