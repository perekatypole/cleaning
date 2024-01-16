import React from "react";


export default function ProductsPrices({  product, price }) {
  // console.log(product);
  return (
    <div className="card-main-line">
      <p>{product}</p>
      <p>{price}</p>
    </div>
  );
}
