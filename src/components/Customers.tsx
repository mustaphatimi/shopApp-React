import React from "react";
import Company1Logo from "../img/beko.png";
import Company2Logo from "../img/rakuten.png";
import Company3Logo from "../img/bestbuy.png";
import Company4Logo from "../img/amazon.png";

const Customers = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto my-14 sm:my-18 md:my-28">
      <div className="text-center mb-4">
        <h2 className="text-base opacity-60">
          We're in over 100 stores around the world
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 ">
        <div className="flex items-center justify-center border border-[#eaeaea] py5 md:py-8 px-2">
          <img src={Company1Logo} alt="Company 1" className="w-20 my-4 md:my-0" />
        </div>
        <div className="flex items-center justify-center border border-[#eaeaea] py5 md:py-8 px-2">
          <img src={Company2Logo} alt="Company 2" className="w-20 my-4 md:my-0" />
        </div>
        <div className="flex items-center justify-center border border-[#eaeaea] py5 md:py-8 px-2">
          <img src={Company3Logo} alt="Company 3" className="w-20 my-4 md:my-0" />
        </div>
        <div className="flex items-center justify-center border border-[#eaeaea] py5 md:py-8 px-2">
          <img src={Company4Logo} alt="Company 4" className="w-20 my-4 md:my-0" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
