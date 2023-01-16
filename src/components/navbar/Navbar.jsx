import React from "react";
import "./Header.css";

const Navbar = () => {
  return (
    <nav className="capitalize hidden lg:flex">
      <ul className="flex items-center space-x-12 -ml-14 mt-6">
        <li className="nav-link">Home</li>
        <li className="nav-link">Landlord</li>
        <li className="nav-link">Tenants</li>
        <li className="nav-link">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
