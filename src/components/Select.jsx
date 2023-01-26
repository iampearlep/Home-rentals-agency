import React from "react";
import {FiSearch} from "react-icons/fi";
import searchIcon from "../assets/search-icon.svg";

const Select = () => {
  return (
    <div className="w-11/12">
      <form className=" text-black bg-white flex justify-center rounded-md py-2 px-5 md:py-3 md:px-5">
        <select
          className=" py-2 px-2 md:px-4 md:py-3 bg-gray-200 border border-gray rounded-l-md text-sm md:text-md"
          name="cars"
          id="car"
        >
          <option value="All Type">All Type</option>
          <option value="saab">1</option>
          <option value="opel">2</option>
          <option value="audi">3</option>
        </select>
        <select
          className="py-2 px-2 md:px-4 md:py-3 bg-gray-200 border border-gray text-sm md:text-md"
          name="cars"
          id="cars"
        >
          <option value="Neighborhood">Neighborhood</option>
          <option value="saab">1</option>
          <option value="opel">2</option>
          <option value="audi">3</option>
        </select>
        <button className="bg-blue-400 px-5 md:px-4 rounded-r-md">
          <FiSearch className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Select;
