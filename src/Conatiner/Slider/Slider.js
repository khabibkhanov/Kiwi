import SliderBtn from "../../Components/sliderBtn/sliderbtn";
import slider1 from "../../Assets/img/slider.jpg";
import slider2 from "../../Assets/img/slider3.jpg";
import slider3 from "../../Assets/img/slider2.jpg";
import slider4 from "../../Assets/img/bitm.jpg";
import slider5 from "../../Assets/img/bitm1.jpg";
import  "./main.css";
import { useState,useEffect } from "react";
const Slider = () => {
  const [index] = useState(0)

  useEffect(() => {
    document.documentElement.style.setProperty("--index", index)
   
  }, [index])



  return (
   <>

    <div className="slider-wrapper1 container">
      <SliderBtn img={slider1} />
      <SliderBtn img={slider2} />
      <SliderBtn img={slider5} />
      <SliderBtn img={slider1} />
      <SliderBtn img={slider3} />
      <SliderBtn img={slider4} />
      <SliderBtn img={slider5} />
      <SliderBtn img={slider1} />
    </div>
   </>
  )
}
export default Slider;