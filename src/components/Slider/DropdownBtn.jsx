import { useContext } from "react";
import Image from "react-bootstrap/Image";
import more from "../../images/main/more.svg";
import { SliderContext } from "./Slider";

export default function DropdownBtn() {
  const { changeSlide } = useContext(SliderContext);
  return <Image className="more" src={more} onClick={changeSlide} />;
}
