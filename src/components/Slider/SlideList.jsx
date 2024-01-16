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
// import React, { useContext } from "react";
// import Slide from "./Slide";
// import { SliderContext } from "./Slider";

// export default function SlidesList() {
//   const { slideNumber, items} = useContext(SliderContext);
//   const startIndex = slideNumber * 3;
//   const endIndex = Math.min(startIndex + 3, items.length);
//   const listItems = items.slice(startIndex, endIndex).map((slideData, index) => (
//     <Slide key={index} data={slideData} />));
//   // console.log(slidesCount,'=', slideNumber,items.slice(startIndex, endIndex));
//   return (
//     <div
//       className="slide-list"
//       style={{ transform: `translateX(-${slideNumber * 100}%)` }}
//     >
//       {listItems}
//     </div>
//   );
// }

// SlideList.jsx
import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "./Slider";

export default function SlidesList() {
  const { slideNumber, items} = useContext(SliderContext);
  const itemsPerPage = 3;

  // Рассчитываем начальный и конечный индексы для отображения элементов
  const startIndex = slideNumber * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  return (
    <div className="slide-list">
      {[items.slice(startIndex, endIndex)].map((slideData, index) => (
        <Slide key={index} data={slideData} />
      ))}
    </div>
  );
}
