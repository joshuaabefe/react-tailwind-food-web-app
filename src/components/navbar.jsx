import React, { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa"

export default function Navbar ({logo}) {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div style={{textShadow:'0px 1px 1px gray'}}  
      className="p-5 flex flex-row items-center justify-between h-24 dancing">
      <a href="/" className="pl-7 lg:ml-12">
        <img height="65%" width="65%" src={logo} alt="logo" />
      </a>

       {/* Desktop Nav */}

      <ul className="flex justify-around w-2/5 mr-12 lg:visible invisible">
        <li><a href="#home" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Home</a></li>
        <li><a href="#product" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Product</a></li>
        <li><a href="#faq" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Faq</a></li>
        <li><a href="#contact" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Contact</a></li>
      </ul>

      <div onClick={handleNav} className="absolute lg:invisible visible right-12 text-colorOne">
        {!nav ? <FaTimes size={22} /> : <FaBars size={22} /> }
      </div>

      {/* Mobile Nav */}

      <div className={
        !nav ? "absolute z-10 left-0 top-24 w-full transition-all duration-500 ease-in-out bg-white lg:invisible visible" 
        : "absolute left-[-100%]" 
        }>
        <ul className="p-5 flex flex-col items-center justify-around h-96">
          <li><a href="#home" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Home</a></li>
          <li><a href="#product" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Product</a></li>
          <li><a href="#faq" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Faq</a></li>
          <li><a href="#contact" className="text-2xl font-semibold text-colorOne transition-all duration-500 hover:text-colorTwo">Contact</a></li>
        </ul>
      </div>
      

    </div>

    
  );
}