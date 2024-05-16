import React, { useState } from "react";
import Hoodie from "../img/hoodie.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prefooter = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handleSubscribe = () => {
    if (!isValidEmail(email)) {
      setErrorMessage("Wrong email, please retry");
      setEmail("");
    } else {
      // Handle subscription logic here
      toast.success("Email sent successfully!", { autoClose: 3000 }); 
      setEmail("");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto flex flex-col-reverse md:flex-row ">
      <div className="bg-[#dbdbdb] h-[280px]  w-full md:w-1/2 overflow-hidden ">
        <img
          className="bg-center bg-cover  m-auto "
          src={Hoodie}
          alt="Cloth Tray"
        />
      </div>
      <div className="h-[280px] p-10  lg:p-14 w-full md:w-1/2 flex flex-col justify-center bg-[#f4f6f8]">
        <h4 className="text-2xl lg:text-3xl font-bold mb-3">
          Get 10% off your first order
        </h4>{" "}
        <p className="mb-3">
          Subscribe our newsletter and receive a discount when you make your
          first purchase.
        </p>
        <div className="flex items-center flex-wrap gap-2  sm:w-auto">
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            className="border p-2 rounded-md flex-shrink"
            placeholder="Your email address"
          />
          <button
            onClick={handleSubscribe}
            className="bg-black text-white px-4 py-2 rounded-md flex-shrink-0 hover:opacity-80 "
          >
            Subscribe
          </button>
        </div>
        {errorMessage && <p className="text-red-500 mt-1">{errorMessage}</p>}
        <ToastContainer position="bottom-center" />
      </div>
    </section>
  );
};

export default Prefooter;
