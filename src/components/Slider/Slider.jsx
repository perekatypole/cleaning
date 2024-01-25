import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import {productData} from "../../variables/variables";

import SlidesList from "./SlideList";
import DropdownBtn from "./DropdownBtn";

export const SliderContext = createContext();

const Slider = function ({ width, height, type }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setItems(productData[type].data);
  }, [type]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + 1 > (Math.ceil(items.length/3)-1)) {
      slideNumber = 0;
    }
     else {
      slideNumber = (slide + 1) % (Math.ceil(items.length/3));
    }

    setSlide(slideNumber);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

const checkButton = items.length > 3;

  return (
    <div
      style={{ width, height }}
      className="card-main slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          changeSlide,
          slidesCount: Math.ceil(items.length/3)-1,
          slideNumber: slide,
          items
        }}
      >
        <SlidesList />
        {checkButton? (<DropdownBtn/>):null}
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  width: "100%",
  height: "100%",
};

export default Slider;
