import React from "react";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const BottomLead = ({actionText, description, mainActionText, extraActionText}) => {
  return (
    <div style={{textShadow:'0px 1px 1px gray'}} 
     className="p-5 lg:bg-bottom lg:bg-cover lg:bg-center lg:bg-fixed bg-gray-100 text-white 
        text-center min-h-96 lg:py-10 dancing">
      <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce="false" 
       className="text-3xl lg:text-4xl pt-2 lg:font-bold font-semibold text-colorOne lg:text-colorTwo lg:text-white">{actionText}
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce="false"
       className="text-lg lg:text-2xl pt-4 text-gray-500 lg:text-gray-200">{description}
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce="false" 
      className="py-5 lg:py-8 flex flex-col lg:flex-row items-center justify-center min-h-48">
         {/* eslint-disable-next-line */}
        <a href=""
          className="rounded-xl px-4 py-2 lg:px-8 lg:py-3 ring-2 ring-colorOne lg:ring-colorTwo ring-offset-4 ring-offset-white-100 
          capitalize text-2xl dancing text-white hover:text-colorOne bg-colorOne hover:bg-transparent transition-all duration-500
          lg:hover:text-colorTwo Two lg:bg-colorTwo drop-shadow-xl"
        >
          {mainActionText}
        </a>
        {/* eslint-disable-next-line */}
        <a href=""
          className="rounded-xl px-4 py-2 lg:px-8 lg:py-3 mt-8 lg:mt-0 ring-2 ring-colorOne lg:ring-colorTwo ring-offset-4 ring-offset-white-100 
          capitalize text-2xl dancing text-colorOne hover:text-white bg-transparent hover:bg-colorOne transition-all duration-500 lg:ml-5   
          lg:text-colorTwo lg;hover:text-white lg:bg-transparent lg:hover:bg-colorTwo drop-shadow-xl"
        >
          {extraActionText}
        </a>
      </AnimationOnScroll>
    </div>
  );
};

export default BottomLead;