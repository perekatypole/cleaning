import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import more from "../../images/main/more.svg";



const DropdownBtn = () => {
//   const [flag, setFlag] = useState(false);
//   function useHeandleClick() {
//     if (!flag) {
//       document.getElementById("office").style.opacity = "1";
//       document.getElementById("office").style.zIndex = "10";
//       document.getElementById("office-dropdown").style.transform = "scaleY(1)";
//       setFlag(!flag);
//     } else {
//       document.getElementById("office-dropdown").style.transform = "scaleY(0)";
//       document.getElementById("office").style.zIndex = "1";
//       document.getElementById("office").style.opacity = "0.8";
//       setFlag(!flag);
//     }
//   }
  return <Image /*onClick={useHeandleClick}*/ className="more" src={more} />;
};

export default DropdownBtn;
