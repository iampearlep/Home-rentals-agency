import React from "react";
import {motion} from "framer-motion";

const CTA = () => {
  return (
    <div className="container mx-auto mt-32 md:mt-72">
      <div className="flex justify-center w-10/12 mx-auto my-4">
        <h3 className="font-semibold text-center capitalize">
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto shadow-2xl rounded-lg w-11/12 md:w-9/12">
        <h2 className="text-xl text-orange-600 font-bold mt-8 mb-14">Add A New Property</h2>
        <form className="grid grid-cols-1 w-10/12 md:grid-cols-3 md:w-10/12 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-1">Name <span className="text-orange-600">*</span></label>
            <input className="bg-lightGray text-xs px-4 py-4 rounded-md text-darkGray border border-gray" type="text" placeholder="Enter Name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-semibold mb-1">Address<span className="text-orange-600">*</span></label>
            <input className="bg-lightGray text-xs px-4 py-4 rounded-md text-darkGray border border-gray" type="text" placeholder="Enter Address" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="unitNumber" className="text-sm font-semibold mb-1">Unit Number<span className="text-orange-600">*</span></label>
            <input className="bg-lightGray text-xs px-4 py-4 rounded-md text-darkGray border border-gray" type="text" placeholder="Enter Unit" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm font-semibold mb-1">City<span className="text-orange-600">*</span></label>
            <select className="bg-lightGray text-xs text-darkGray px-4 py-4 rounded-md border border-gray">
              <option>Select City</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-sm font-semibold mb-1">State<span className="text-orange-600">*</span></label>
            <select className="bg-lightGray text-xs text-darkGray px-4 py-4 rounded-md border border-gray">
              <option>Select State</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomType" className="text-sm font-semibold mb-1">Room Type<span className="text-orange-600">*</span></label>
            <select className="bg-lightGray text-xs text-darkGray px-4 py-4 rounded-md border border-gray">
              <option>Select Room Type</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-semibold mb-1">Price<span className="text-orange-600">*</span></label>
            <input className="bg-lightGray text-xs px-4 py-4 rounded-md text-darkGray border border-gray" type="text" placeholder="Enter Price"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="roomType" className="text-sm font-semibold mb-1">Room Type<span className="text-orange-600">*</span></label>
            <select className="bg-lightGray text-xs text-darkGray px-4 py-4 rounded-md  border border-gray">
              <option>Select Room Type</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="md:col-start-1 md:col-end-4">
            <div className="flex flex-col">
              <label htmlFor="description" className="text-sm font-semibold mb-1">Description<span className="text-orange-600">*</span></label>
              <textarea
              className="bg-lightGray text-xs px-4 py-4 rounded-md text-darkGray border border-gray"
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Enter Description"
              ></textarea>
            </div>
          </div>
          <div className="md:col-start-1 md:col-end-4">
            <span className="text-sm font-semibold mb-1">Upload Photos</span>
            <div className="flex flex-col justify-center items-center border border-orange-600 border-dashed py-6 rounded-md">
              <h1 className=" text-xs md:text-base  font-semibold mb-1">
                Drag your images here, or <span className="text-orange-600">browse</span>
              </h1>
              <p className="text-xs text-darkGray">Supported: JPG, JPEG, PNG</p>
            </div>
          </div>
          <div className="md:col-start-1 md:col-end-4 text-center mt-8 mb-10">
            <motion.button whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }} className="bg-orange-600 text-white text-sm rounded-md px-20 md:px-28 py-4">Add New Property</motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CTA;
