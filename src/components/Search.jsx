import React from "react";
import optionImg1 from "../assets/options (1).svg";
import optionImg2 from "../assets/options (2).svg";
import optionImg3 from "../assets/options (3).svg";
import optionImg4 from "../assets/options (4).svg";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <div className="container mx-auto mt-16 md:mt-28">
      <div className="flex flex-col md:flex-row md:mx-16 gap-y-14 md:gap-8">
        <div className="grid w-11/12 grid-cols-2 md:w-1/2 gap-x-6 gap-y-5 mx-3 text-center relative">
          <motion.div
            whileHover={{
              scale: 0.9,
              transition: { duration: 1 },
            }}
            className=""
          >
            <img
              className="w-10/12 ml-auto brightness-75"
              src={optionImg3}
              alt=""
            />
            <p className="text-sm md:text-md text-white font-semibold relative z-10 ml-8 -mt-40 md:ml-20 md:-mt-60 md:w-1/2">
              Flexible Leases
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 0.9,
              transition: { duration: 1 },
            }}
            className="text-center"
          >
            <img
              className="mt-9 md:mt-12 w-11/12 brightness-75"
              src={optionImg2}
              alt=""
            />
            <p className="text-sm md:text-md text-white font-semibold absolute z-10 ml-1 -mt-32 md:ml-2 md:-mt-48 w-2/5">
              7-Day Happiness Guaranteed
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 0.9,
              transition: { duration: 1 },
            }}
            className=""
          >
            <img
              className="w-8/12 mx-auto brightness-75"
              src={optionImg4}
              alt=""
            />
            <p className="text-sm md:text-md font-semibold text-white relative z-10 -mt-32 ml-7 w-2/3 md:-mt-48 md:ml-16 md:w-1/2">
              Monthly House Cleaning
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 0.9,
              transition: { duration: 1 },
            }}
            className="-ml-8 md:-ml-10"
          >
            <img className=" brightness-75" src={optionImg1} alt="" />
            <p className="text-sm md:text-md font-semibold text-white relative z-10 -mt-44 ml-12 md:-mt-64 md:ml-16 w-1/2">
              {" "}
              Choose Your Own Roommate
            </p>
          </motion.div>
        </div>
        <div
          className="w-11/12 md:w-1/2 flex flex-col justify-center items-center md:justify-start md:items-start mt-32 mx-auto"
        >
          <h2 className="text-xl md:text-3xl text-center md:text-left font-bold w-10/12 md:w-8/12 mb-6">
            Flexibility and options to suit your lifestyle.
          </h2>
          <p className="w-11/12 text-center md:text-left md:w-8/12 text-sm leading-normal mb-6">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            className="bg-orange-600 rounded-md text-white text-xs px-4 py-3"
          >
            Search Rooms
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Search;
