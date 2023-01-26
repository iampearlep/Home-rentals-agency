import React from "react";
import contentCard from "../assets/content-card-item-8 (1).svg";
import Slider from "./Slider";
import Curly from "../assets/_.svg";

const Testimonials = () => {
  return (
    <div className="mt-32 bg-lightOrange">
       <img className="absolute mt-10 ml-7 p-8" src={Curly} alt="" />
      <div className="flex flex-col md:flex-row gap-8 mx-auto relative">
        <Slider />
        <div className="md:w-1/2">
          <img src={contentCard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
