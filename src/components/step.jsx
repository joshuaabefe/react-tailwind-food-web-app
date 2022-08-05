import React from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Step = ({title, heading, description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

    return (
        <div className='mb-20'>
          <div className={alternate?row : rowReverse}>
            
            <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce="false" style={{textShadow:'0px 1px 1px gray'}}
              className="p-5 text-gray dancing text-center lg:text-left">
              <p className="text-xl lg:font-bold font-semibold text-colorOne lg:text-colorTwo">{title}</p>
              <p className="text-3xl lg:text-4xl pt-2 lg:font-bold font-semibold text-gray-800 lg:w-4/6">{heading}</p>
              <p className="text-lg lg:text-2xl pt-4 text-gray-500">{description}</p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce="false" 
            className="p-5 flex justify-center lg:w-2/4">
              <img className="h-124 drop-shadow-2xl" src={img} alt=""/>
            </AnimationOnScroll>
          
          </div>
        </div>
    )
}

export default Step;