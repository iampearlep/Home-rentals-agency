import React from "react";
import Select from "./Select";

const Hero = () => {
  return (
    <div className="mx-auto container md:mt-10 mt-20">
      <div className="md:w-11/12 flex flex-col items-center justify-center md:flex-row md:space-x-40">
        <div className="w-11/12 md:mt-20 md:w-6/12">
          <h1 className="text-3xl md:text-4xl font-bold text-center leading-tight tracking-wide md:w-9/12 md:ml-24 md:text-left capitalize">
            The most affortable place to stay in the san franciso bay area
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className=" w-full md:w-80 rounded-lg"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=albany,%20san%20francisco&t=&z=11&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <a
                className="relative text-right"
                href="https://123movies-to.org"
              ></a>
              <br />
              <a
                className="overflow-hidden bg-none "
                href="https://www.embedgooglemap.net"
              ></a>
            </div>
          </div>
          <Select />
        </div>
      </div>
    </div>
  );
};

export default Hero;
