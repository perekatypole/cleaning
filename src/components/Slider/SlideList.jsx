import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "./Slider";

export default function SlidesList() {
  const { slideNumber, items} = useContext(SliderContext);
  const startIndex = slideNumber * 3;
  const endIndex = Math.min(startIndex + 3, items.length);
  return (
    <div className="slide-list">
        <Slide data={items.slice(startIndex, endIndex)} />
    </div>
  );
}
