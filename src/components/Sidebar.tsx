import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { CartProductType } from "../types/types";

import { IoMdCloseCircle } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, clearCart } = useContext(CartContext);

  const handleBackgroundClick = () => {
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10" onClick={handleBackgroundClick}></div>
      )}

      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-8`}
      >
        <div className="flex items-center justify-between py-5 border-b">
          <div className="text-sm font-semibold">Shopping Bag</div>
          <div
            onClick={handleClose}
            className="cursor-pointer flex justify-center"
          >
            <IoMdCloseCircle className="text-2xl" />
          </div>
        </div>

        {cart.length >= 1 && (
          <div>
            <div className="flex flex-col gap-y-2 h-[450px] lg:h-[400px] overflow-y-auto overflow-x-hidden">
              {cart.map((item: CartProductType) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </div>

            <div className="flex flex-col gap-y-3 py-4">
              <div className="flex w-full justify-between items-center">
                <div className="uppercase font-semibold">
                  <span className="mr-2">Total :</span> ₦
                  {Number(total.toFixed(2))}
                </div>

                <div
                  onClick={() => clearCart()}
                  className="cursor-pointer py-3 bg-rose-500 text-white w-10 h-10 flex justify-center items-center text-xl"
                >
                  <FiTrash2 />
                </div>
              </div>
            </div>
            <Link onClick={handleClose} to={"/checkout"}>
              <div className="text-white bg-black px-6 py-3 mb-6 font-semibold text-center mt-3 w-full">
                Proceed to Checkout
              </div>
            </Link>
          </div>
        )}

        {cart.length <= 0 && (
          <div className="flex flex-col items-center justify-center h-full my-48">
            <p className="text-black font-medium">There's only emptiness</p>

            <Link to="/">
              <div
                onClick={handleClose}
                className="text-white bg-black px-4 py-2 font-semibold text-center my-2 rounded-md cursor-pointer"
              >
                Shop Now
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
