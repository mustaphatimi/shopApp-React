import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/myshuplogo.png";

import { SidebarContext } from "../contexts/SidebarContext";
import { SignInContext } from "../contexts/SignInContext";
import { CartContext } from "../contexts/CartContext";
import Avatar from "./Avatar";

import { BsBag } from "react-icons/bs";

const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { isSignInOpen, setIsSignInOpen } =
    useContext(SignInContext);
  const { itemAmount } = useContext(CartContext);

  // Function to get the value of a cookie by its name
  const getCookie = (name: string) => {
    const cookieValue = document.cookie.match(
      `(^|;)\\s*${name}\\s*=\\s*([^;]+)`
    );
    return cookieValue ? cookieValue.pop() : "";
  };

  const getAuthTokenFromCookieOrLocalStorage = () => {
    // Check if the token exists in a cookie
    const tokenFromCookie = getCookie("authToken");

    if (tokenFromCookie) {
      return tokenFromCookie;
    }

    // If token doesn't exist in a cookie, check local storage
    const tokenFromLocalStorage = localStorage.getItem("authToken");

    if (tokenFromLocalStorage) {
      return tokenFromLocalStorage;
    }

    return null;
  };

  const isAuthenticated = () => {
    const token = getAuthTokenFromCookieOrLocalStorage();
    return !!token; // Return true if token exists
  };

  const handleClickScroll = () => {
    const element = document.getElementById("shop-section");
    if (element) {
      const offset = -120;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY + offset;

      setTimeout(function () {
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {" "}
      <header
        className={`bg-white px-4 md:px-6 lg:px-8 mb-4 max-w-[1600px] mx-auto transition-all fixed z-10 w-full top-0 `}
      >
        <div
          className={`  py-3 sm:py-4 flex flex-row justify-between items-center h-fit`}
        >
          <div className="flex flex-row gap-6 items-center">
            <div className="cursor-pointer">
              <Link to="/">
                <img
                  className="w-[108px] h-[27px]"
                  src={Logo}
                  alt="myshup Logo"
                />
              </Link>
            </div>
            <Link to="/">
              <div onClick={() => handleClickScroll()}>
                <p className="hover:opacity-80">Shop</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-row gap-6 items-center">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative"
            >
              <BsBag className="text-xl hover:opacity-80" />
              {itemAmount >= 1 ? (
                <div className="absolute flex h-2 w-2 -right-0.5 -bottom-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </div>
              ) : null}
            </div>

            {isAuthenticated() ? (
              <>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    // setIsSignInOpen(!isSignInOpen);
                  }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <Avatar name={"John Doe"} />
                </div>
                {showTooltip && (
                  <div  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)} className="text-sm sm:text-base absolute z-50 -bottom-5 right-5 transform  bg-white text-gray-700 px-4 py-3 rounded shadow">
                    <p className="mb-2 cursor-pointer hover:opacity-80" onClick={() => setIsOpen(!isOpen)}>Shopping Cart ({itemAmount})</p>
                    <p className="mb-2 cursor-pointer hover:opacity-80" onClick={()=>{
                       document.cookie = `authToken=${""}; path=/; secure`; 
                       setShowTooltip(false);
                    }}>Logout</p>
                  </div>
                )}
              </>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsSignInOpen(!isSignInOpen);
                  alert(
                    "Use this to Login - From Fakestore API \nUsername: johnd   \nPassword: m38rmF$"
                  );
                }}
              >
                <p>Sign in</p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-[#788e9b] ">
          <p className="text-white px-8 py-2.5 text-center text-[12px]  sm:text-sm  md:text-base">
            Free shipping | Ghana & Benin - over ₦50 | EU - over ₦100 |
            Worldwide - over ₦200
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
