import React from "react";
import contentCard from "../assets/content-card-item-8 (1).svg";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <div className="mt-32 bg-lightOrange">
      <div className="flex flex-col md:flex-row gap-8 mx-auto">
        <Slider />
        <div className="md:w-1/2">
          <img src={contentCard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
