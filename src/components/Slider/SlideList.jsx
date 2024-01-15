// import React, { useContext } from "react";
// import Slide from "./Slide";
// import { SliderContext } from "./Slider";

// export default function SlidesList() {
//   const { slideNumber, items } = useContext(SliderContext);
//   const listItems = items.map((slide, index) => (
//     <Slide key={index} data={slide} />
//   ));
//   console.log('what blin', listItems);
//   return (
//     <div
//       className="slide-list"
//       style={{ transform: `translateX(-${slideNumber * 100}%)` }}
//     >
//       {listItems}
//     </div>
//   );
// }
import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "./Slider";

export default function SlidesList() {
  const { slideNumber, items, slidesCount } = useContext(SliderContext);
  // Рассчитываем начальный и конечный индексы для отображения элементов
  const startIndex = slideNumber * 3;
  const endIndex = (items.length-startIndex+1)>=3? slideNumber+3:items.length;
  console.log(slidesCount,'=', slideNumber,items.slice(startIndex, endIndex));
  return (
    <div className="slide-list">
      {items.slice(startIndex, endIndex).map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}