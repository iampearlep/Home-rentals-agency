import React, { useState } from "react";
import Data from "../Data.json";
import ReactPaginate from "react-paginate";
import bed from "../assets/Bed.svg";
import shower from "../assets/Shower.svg";
import size from "../assets/Size.svg";

const Properties = () => {
  const [properties, setProperties] = useState(Data.slice(0, 18));
  const [pageNumber, setPageNumber] = useState(0);
  const propertiesPerPage = 6;
  const pagesVisited = pageNumber * propertiesPerPage;

  const displayProperties = properties
    .slice(pagesVisited, pagesVisited + propertiesPerPage)
    .map((property) => {
      return (
        <div
          key={property.id}
          className="rounded-3xl bg-white border border-secondary hover:shadow-2xl hover:border-none hover:delay-150 hover:duration-200 hover:ease-in-out hover:transition-all"
        >
          <img src={property.image} className="w-full" alt="property-img" />
          <div className="flex-flex-col px-6 py-2">
            <h4 className="text-lg capitalize font-semibold w-10/12 leading-snug mb-3">
              {property.location}
            </h4>
            <p className="text-sm text-tertiary">{property.type}</p>
            <h3 className="text-lg text-orange-600 font-semibold mb-2">
              {property.price}
            </h3>
          </div>
          <div className="flex justify-center rounded-md">
            <p className="flex flex-row justify-center w-1/3 border-t border-veryLightGray py-3">
              <img src={bed} alt="" className="w-4 h-4 mt-1" />
              {property.bedrooms}
            </p>
            <p className="flex flex-row justify-center w-1/3 border-t border-l border-r border-veryLightGray py-3">
              <img src={shower} alt="" className="w-4 h-4 mt-1" />
              {property.bathrooms}
            </p>
            <p className="flex flex-row justify-center w-1/3 border-t  border-veryLightGray py-3">
              <img src={size} alt="" className="w-4 h-4 mt-1" />
              {property.showers}
            </p>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(properties.length / propertiesPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="bg-primary mt-6">
      <div className="container mx-auto">
        <div className="flex flex-col mx-8 md:mx-16 ">
          <div className="flex flex-row justify-between mt-12 mb-14">
            <h2 data-aos="fade-down" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in-out" className="capitalize text-xl md:text-2xl font-bold">
              list of properties
              <hr className="border-orange-600 w-14 border-t-0 border-b-2" />
            </h2>
            <button data-aos="zoom-in" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in-out" className="bg-orange-600 text-white text-xs md:text-sm capitalize py-3 px-1 md:px-4 rounded-md">
              view all properties
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-7 gap-y-12 ">
            {displayProperties}
          </div>
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination-container"}
            previousLinkClassName={"pagination-previous"}
            nextLinkClassName={"pagination-next"}
            disabledClassName={"disabled"}
            activeClassName={"pagination-active"}
            pageClassName={"page-name"}
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;
