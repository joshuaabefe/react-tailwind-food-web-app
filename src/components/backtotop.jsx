import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";
import { FaChevronUp } from "react-icons/fa"
 
class ButtonTop extends Component {
  render() {
    return (
        <BackToTop
        showOnScrollDown
        showAt={50}
        speed={3000}
        easing="easeInOutSine"
       >
         <div
             className="rounded-xl p-2 lg:p-3 ring-2 ring-colorOne lg:ring-colorTwo ring-offset-4 ring-offset-white-100 
             capitalize text-2xl dancing text-white hover:text-colorOne bg-colorOne hover:bg-transparent transition-all duration-500
             lg:hover:text-colorTwo Two lg:bg-colorTwo drop-shadow-xl"
         >
             <FaChevronUp />
         </div>
       </BackToTop>
    );
  }
}

export default ButtonTop;