import React from "react";

import { AnimationOnScroll } from 'react-animation-on-scroll';

import food_app from '../assets/food-app.png'; 


const Main = ({appType, tagLine, description, mainActionText}) => {
  return (
    <div id="product">
      <div style={{textShadow:'0px 1px 1px gray'}} 
        className="p-5 lg:bg-main lg:bg-cover lg:bg-center lg:bg-scroll bg-gray-100 pb-14 text-white 
        text-center min-h-96 lg:pt-10 lg:pb-40 dancing">
        <div>
          <p className="text-lg p-3 pt-12 font-bold text-gray-500 lg:text-gray-200">{appType}</p>
        </div>
        <div>
          <p className="text-6xl p-2 font-bold text-colorOne lg:text-white lg:mx-auto lg:w-4/6 lg:text-8xl">
            {tagLine}
          </p>
          <hr className="border-t-4 border-colorOne lg:border-colorTwo mt-4 w-14 mx-auto" />
        </div>
        <div>
          <p className="text-lg lg:text-2xl p-4 pt-6 leading-7 lg:mx-auto lg:w-4/6 text-center text-gray-500 lg:text-gray-200">
            {description}
          </p>
        </div>
        <div className="pt-5 lg:pt-8">
        {/* eslint-disable-next-line */}
            <a href=""
                className="rounded-xl px-4 py-2 lg:px-8 lg:py-3 ring-2 ring-colorOne lg:ring-colorTwo ring-offset-4 ring-offset-white-100 
                capitalize text-2xl dancing text-white hover:text-colorOne bg-colorOne hover:bg-transparent transition-all duration-500
                lg:hover:text-colorTwo Two lg:bg-colorTwo drop-shadow-xl"
            >
                {mainActionText}
            </a>
        </div>
        
      </div>
      <AnimationOnScroll animateIn="animate__bounceInUp" animateOnce="false" 
      className="p-5 flex justify-center lg:mt-20">
          <img className="lg:h-126 h-124 drop-shadow-2xl lg:-mt-60" src={food_app} alt=""/>
      </AnimationOnScroll>
    </div>
  );
};

export default Main;