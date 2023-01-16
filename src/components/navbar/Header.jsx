import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import logo from "../.././assets/logo.svg";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <header className="py-3  text-white">
      <div className="mx-auto container">
        <div className="px-8 md:px-0 md:w-10/12 flex items-center justify-between md:justify-around">
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
        <hr className="mx-auto mt-3 border-gray-300 w-10/12" />
      </div>
    </header>
  );
};

export default Header;
