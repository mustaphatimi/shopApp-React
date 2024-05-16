import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { ProductType } from "../types/types";

const Product = ({ product }: { product: ProductType }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);

  const handleInnerButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product, id);
  };

  return (
    <Link className="" to={`/product/${id}`}>
      <div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>

          <div className="absolute top-6 -right-11 group-hover:right-5 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
            <button>
              <div
                onClick={handleInnerButtonClick}
                className="flex justify-center items-center text-white w-10 h-10 bg-[#b4c5eb]"
              >
                <BsPlus className="text-2xl" />
              </div>
            </button>

            <div className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl">
              <BsEyeFill className="text-lg" />
            </div>

            {/* <Link
              to={`/product/${id}`}
              className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill className="text-lg" />
            </Link> */}
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <h2 className="opacity-60 font-medium text capitalize">{category}</h2>
        <p className="capitalize leading-4 text-[#131315] opacity-95 text-sm">
          {title}
        </p>
        <p className="text-[#131315]">₦{price}</p>
      </div>
    </Link>
  );
};

export default Product;
