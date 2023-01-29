import React from "react";
import { HiPhone, HiLocationMarker } from "react-icons/hi";
import { AiFillPrinter, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaRss,
} from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-easing="ease-in-out"
      className="container mx-auto mt-32 mb-16"
    >
      <hr className="mx-auto mt-3 border-t border-b border-orange-600 border-gray-300 w-11/12" />
      <div className="flex flex-col md:flex-row mx-auto justify-between w-9/12 my-12 gap-y-8">
        <h1 className="text-3xl font-bold">Logo</h1>
        <div className="text-xs">
          <p className="flex flex-row gap-4">
            <HiLocationMarker className="text-orange-600" />
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </p>
          <div className="flex flex-row justify-between mt-3 mb-5 ">
            <p className="flex flex-row gap-4">
              <HiPhone className="text-orange-600" />
              (123) 456-7890
            </p>
            <p className="flex flex-row gap-4">
              <AiFillPrinter className="text-orange-600" />
              (123) 456-7890
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-tertiary">Social Media</p>
            <AiFillFacebook className="text-orange-600" />
            <FaTwitter className="text-orange-600" />
            <AiFillLinkedin className="text-orange-600" />
            <FaYoutube className="text-orange-600" />
            <FaInstagram className="text-orange-600" />
            <FaGooglePlusG className="text-orange-600" />
            <BsPinterest className="text-orange-600" />
            <FaRss className="text-orange-600" />
          </div>
        </div>
      </div>
      <hr className="mx-auto mt-3 border-b border-t border-primary w-10/12" />
      <div className="flex flex-col md:flex-row justify-between mx-auto w-10/12 my-4 text-xs gap-y-6">
        <div className="flex flex-col md:flex-row gap-5">
          <p className="uppercase">About us</p>
          <p className="uppercase">Contact us</p>
          <p className="uppercase">Help</p>
          <p className="uppercase">Privacy Policy</p>
          <p className="uppercase">Disclaimer</p>
        </div>
        <div>
          <p className="capitalize">
            Copyright © 2023 Minimumlivingcost @alwayspearlxx. All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
