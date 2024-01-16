// import React from "react";
// import ProductsPrices from "./ProductsPrices";

// export default function Slide({ data }) {
//   console.log(data);
//   return (
//     <div className="slide">
//       {data.map((item, index) => (
//         <ProductsPrices key={index}  product={item[0]} price={item[1]} />
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import ProductsPrices from "./ProductsPrices";


// export default function Slide({ data }) {
//   return (
//     <div className="slide">
//       {data.map((item, index) => <ProductsPrices key={index} product={item[0]} price={item[1]} />)}
//     </div>
//   );
// }

// Slide.jsx
import React from "react";
import ProductsPrices from "./ProductsPrices";

export default function Slide({ data }) {
  return (
    <div className="slide">
      {data.map((item, index) => (
        <ProductsPrices key={index} product={item[0]} price={item[1]} />
      ))}
    </div>
  );
}
