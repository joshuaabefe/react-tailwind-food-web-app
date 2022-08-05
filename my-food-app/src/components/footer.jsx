import React from "react";
import { FaFacebookSquare,FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa"

const Footer = ({logo}) => {
  return (
    <div id="contact"
      style={{textShadow:'0px 1px 1px gray'}}
      className="p-5 lg:py-28 py-44 flex flex-col lg:flex-row items-center justify-around h-28 dancing">
      <a href="/" className="mb-8 lg:mb-0">
        <img height="65%" width="75%" src={logo} alt="logo" />
      </a>
      <div className="pt-5 lg:pt-0 flex items-center justify-around w-3/5 lg:w-1/5 ">
        {/* eslint-disable-next-line */}
        <a href="#">
          <FaFacebookSquare className="lg:text-3xl text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo" />
        </a>
        {/* eslint-disable-next-line */}
        <a href="#">
          <FaTwitter className="lg:text-3xl text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo" />
        </a>
        {/* eslint-disable-next-line */}
        <a href="#">
          <FaInstagram className="lg:text-3xl text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo" />
        </a>
        {/* eslint-disable-next-line */}
        <a href="#">
          <FaYoutube className="lg:text-3xl text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo" />
        </a>
      </div>
      <div className="pt-8 lg:text-xl text-lg text-colorTwo text-center lg:pt-0">
        Copyright &copy; 2022. All Rights are Reserved. Abefe’s developed by
        {/* eslint-disable-next-line */}
        <a href="https://joshuaabefe.github.io" className="text-colorOne transition-all duration-500 hover:text-colorTwo"
         target="_blank"> joshuaabefe.github.io</a>
      </div>
    </div>
  );
};

export default Footer;