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
  const itemsPerPage = 3;
  // Рассчитываем начальный и конечный индексы для отображения элементов
  const startIndex = slideNumber * itemsPerPage;
  const endIndex = slideNumber+3;
  console.log('=', slidesCount,'',items.slice(startIndex, endIndex));
  return (
    <div className="slide-list">
      {items.slice(startIndex, endIndex).map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}