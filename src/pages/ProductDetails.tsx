import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { ProductType } from "../types/types";

import Prefooter from "../components/Prefooter";
import Features from "../components/Features";

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Get the particular product
  const product = products.find((item: ProductType) => {
    return item.id === Number(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { id: productId, title, price, description, image } = product;

  return (
    <div>
      <section className="mt-[110px] pt-[20px] md:pt-[50px]  flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm"
                src={image}
                alt="Product"
              />
            </div>
            <div className=" flex-1 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 leading-tight tracking-wide">
                {title}
              </h2>
              <div className="uppercase text-[#788e9b] font-bold text-base md:text-xl mb-6">
                ₦{price}
              </div>
              <p className="mb-8">{description}</p>
              <div className="flex flex-row gap-2">
                <button
                  onClick={() => addToCart(product, productId)}
                  className="text-white bg-black px-4 py-2 font-semibold text-center my-3 text-sm hover:opacity-90"
                >
                  Add to Cart
                </button>
                <div className="text-black bg-white border border-black px-4 py-2 font-semibold text-center my-3 text-sm hover:opacity-90">
                <Link
                  to="/"
                >
                  Go Back
                </Link>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Prefooter />

     
    </div>
  );
};

export default ProductDetails;
