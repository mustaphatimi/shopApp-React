import React, { useContext } from "react";
import { CartProductType } from "../types/types";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

type CartItemProps = {
  item: CartProductType;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { id, image, title, price, amount } = item;
  const { removeFromCart, incrementAmount,  decrementAmount } = useContext(CartContext);

  return (
    <section className="flex gap-x-1 py-2 lg:px-4 border-b border-gray-200 w-full ">
      <div className="w-full min-h-[130px] flex items-center gap-x-4 ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[65px]" src={image} alt="Item" />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm opacity-60 font-medium max-w-[240px]  capitalize hover:opacity-100"
            >
              {title}
            </Link>

            <div onClick={()=> removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-grey-500 hover:text-red-500 transition" />
            </div>
          </div>

          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px]  items-center h-full border rounded text-primary font-medium">
              <div onClick={()=> decrementAmount(id) } className="h-full flex-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-1">
                {amount}
              </div>
              <div onClick={()=>incrementAmount(id) } className="h-full flex-1 flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              {" "}
              <p className="text-gray-500 ">₦{price}</p>
            </div>
            <div className="flex-1 flex justify-end items-center">
              {" "}
              <p className="text-[#131315] font-medium ">
                ₦{Number((price * amount).toFixed(2))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
