import { React } from "react";
import {productData} from "../../variables/variables";
import ProductCards from "./ProductCards";

const Services = () => {
  return(
    <div className="main-services">
      <div className="services-title">
        <h2>Наши услуги</h2>
      </div>
        <div className="services-container">
        {Object.keys(productData).map((items, num) => 
        <ProductCards key={num} item={items}/>
        )}
      </div>
    </div>
  );
};

export default Services;
