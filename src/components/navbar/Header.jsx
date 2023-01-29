import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import logo from "../.././assets/logo.svg";
import Select from "../Select";
import HeaderImg from "../.././assets/header-img.svg"

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-3 text-white">
    <img className="header-img absolute -mt-10 object-cover bg-cover bg-no-repeat" src={HeaderImg} alt="" />
      <div className="mx-auto container">
        <div className="px-8 md:px-0 md:w-10/12 relative z-10 flex items-center justify-between md:justify-around">
          <img className="md:-ml-8" src={logo} alt="" />

          <Navbar />

          {/* mobile nav functionality */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl cursor-pointer"
          />

          <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
            <MobileNav setNavMobile={setNavMobile} />
          </div>

          {/* mobile nav ends */}
        </div>
        <hr className="mx-auto relative z-10 mt-3 border-gray-300 w-10/12" />
      </div>
      <div className="mx-auto container md:mt-10 mt-20">
      <div className="md:w-11/12 flex flex-col items-center justify-center md:flex-row md:space-x-24">
        <div className="w-11/12 md:mt-20 md:w-7/12">
          <h1
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            className="text-3xl text-white md:text-5xl font-bold text-center leading-tight tracking-wide md:w-11/12 md:ml-24 md:text-left capitalize"
          >
            The most affortable place to stay in the san franciso bay area
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            data-aos="zoom-in-up"
            data-aos-offset="220"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            className="mapouter"
          >
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
    </header>
  );
};

export default Header;
