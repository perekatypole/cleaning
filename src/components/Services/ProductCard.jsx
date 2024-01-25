import React from "react";
import Image from "react-bootstrap/Image";
import question from "../../images/main/question.svg";
import { productData } from "../../variables/variables.js";
import Slider from "../Slider/Slider.jsx";

export default function ProductCards({item}){
    return (
    <div className="services-card">
      {productData[item].extraInfo? <Image className="question" src={question} />:null}
        <div className="card-title">
         <h3>{productData[item].name}</h3>
        </div>
          <Slider type={item} />
      </div>
      )
};
