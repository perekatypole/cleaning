import React from "react";
import ProductsPrices from "./ProductsPrices";


export default function Slide({ data: { product, price } }) {
  return (
    <div className="slide">
      <ProductsPrices product={product} price={price} />
    </div>
  );
}