import React from "react";
import Tray from "../img/tray.png";
import { Link } from "react-router-dom";

const Hero = () => {

  const handleClickScroll = () => {
    const element = document.getElementById("shop-section");
    if (element) {
    
    const offset = -120; 
    const targetPosition = element.getBoundingClientRect().top + window.scrollY + offset;

   
    setTimeout(function(){
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }, 50);
    
    }
  };

  return (
    <section className="relative my-14">
      <div className="relative bg-[#c0c7de] flex justify-end">
        <img
          src={Tray}
          alt="Tray"
          className="w-3/5 sm:w-2/5 min-h-[50vh] max-h-[80vh] object-cover object-right-top filter blur-[4px] sm:blur-[0px]"
        />

      

        <div className="absolute top-0 left-0 p-10 text-black flex flex-col justify-between h-full">
          <div className="">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
              New Arrivals
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl opacity-50 font-bold mb-1 md:mb-2">
              Breeze
            </h2>
            <p className="w-1/2 sm:w-full text-base opacity-95">
              Elevate Your Style, Embrace the Trends
            </p>
          </div>
          <div>
            <p className="text-xs md:text-base  mb-1 md:mb-2 lg:mb-4 text-black font-semibold">
              Starting at ₦5.00
            </p>
            <Link to="/">
              <button onClick={()=>handleClickScroll()} className="text-xs md:text-base text-white bg-black rounded px-4 md:px-6 py-2 hover:opacity-80">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
