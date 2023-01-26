import React from "react";
import Cost from "../assets/cost.svg";
import Vector1 from "../assets/Vector (4).svg";
import Vector2 from "../assets/Vector (5).svg";
import Vector3 from "../assets/Vector (6).svg";
import Vector4 from "../assets/Vector (7).svg";
import Vector5 from "../assets/Vector (8).svg";
import Vector6 from "../assets/Vector (9).svg";

const Services = () => {
  return (
    <div className="container mx-auto mt-20">
      <h2 className="w-11/12 md:w-full mx-auto text-lg md:text-2xl font-bold md:ml-10 capitalize text-center md:text-left mb-4 leading-relaxed md:mb-0">
        Minimum living cost takes care of everything{" "}
        <hr className="border-orange-600 hidden md:block -mt-8 ml-10 md:ml-0 md:-mt-0 w-52 border-t-0 border-b-2" />
      </h2>
      <div className="flex flex-col md:flex-row">
        <div>
          <img src={Cost} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:py-24 mb-20 md:mb-0">
          <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-xl mb-3">
              <img className="w-6 h-6" src={Vector1} alt="" />
            </div>
            <p className="text-md font-semibold w-1/2 md:w-2/5 capitalize tracking-wide">
              Pay as Little as possible!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-xl mb-3">
              <img className="w-6 h-6" src={Vector2} alt="" />
            </div>
            <p className="text-md font-semibold w-7/12 md:w-1/2 capitalize tracking-wide">
              Enjoy wisdom of community!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-xl mb-3">
              <img className="w-6 h-6" src={Vector3} alt="" />
            </div>
            <p className="text-md font-semibold w-5/6 md:w-3/4 capitalize tracking-wide">
              Let's somebody else take care of Landlord!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-xl mb-3">
              <img className="w-6 h-6" src={Vector4} alt="" />
            </div>
            <p className="text-md font-semibold w-1/2 md:2/3 capitalize tracking-wide">
              Enjoy peaceful Environment!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-xl mb-3">
              <img className="w-6 h-6" src={Vector5} alt="" />
            </div>
            <p className="text-md font-semibold w-2/3 md:w-2/5 capitalize tracking-wide">
              Stay Safe! Save Money!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-xl mb-3">
              <img className="w-6 h-6" src={Vector6} alt="" />
            </div>
            <p className="text-md font-semibold w-2/3 md:w-2/4 capitalize tracking-wide">
              Pay for what you use !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
