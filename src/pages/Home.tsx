import React, { useContext, useState, useEffect, useRef } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductType } from "../types/types";
import Filter from "../img/svg/filter.svg";
import Nodata from '../img/nodata.png'
import Hero from "../components/Hero";
import Product from "../components/Product";
import Features from "../components/Features";
import Customers from "../components/Customers";
import Prefooter from "../components/Prefooter";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [priceFilters, setPriceFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  const filterProducts = () => {
    let filtered = [...products];

    if (categoryFilters.length > 0) {
      filtered = filtered.filter((product) =>
        categoryFilters.includes(product.category)
      );
    }

    if (priceFilters.length > 0) {
      filtered = filtered.filter((product) =>
        priceFilters.some((priceRange) => {
          const [min, max] = priceRange.split("-");
          return product.price >= Number(min) && product.price <= Number(max);
        })
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterToggle = () => {
    setShowFilters(!showFilters);

    if (filterRef.current) {
      filterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!filteredProducts) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  return (
    <section>
      <div className="px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto py-16">
        <Hero />

        <h2 id="shop-section" className="my-4 w-full text-center  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
          the <span className="opacity-60">SHUP</span>
        </h2>

        <div className="container mx-auto">
          {/* Filter Button */}
          <button
            onClick={handleFilterToggle}
            className=" text-black py-2 pr-4 font-medium  mb-4 flex flex-row gap-2 items-center"
          >
            <img src={Filter} alt="Filter Icon" />
            <p>{showFilters ? "Hide Filters" : "Show Filter"}</p>
          </button>

          {/* Filters */}
          <div
            ref={filterRef}
            className={`${
              showFilters ? "block" : "hidden"
            } flex flex-wrap gap-5 items-center mb-6`}
          >
            {/* Rest of the filters code */}
            <div>
              <label className="font-medium pb-1 border-b ">Categories :</label>
              {[
                "electronics",
                "jewelery",
                "men's clothing",
                "women's clothing",
              ].map((category) => (
                <label key={category} className="block mt-2 capitalize ">
                  <input
                    type="checkbox"
                    value={category}
                    className="mr-2 accent-[#000000]"
                    checked={categoryFilters.includes(category)}
                    onChange={(e) =>
                      e.target.checked
                        ? setCategoryFilters([
                            ...categoryFilters,
                            e.target.value,
                          ])
                        : setCategoryFilters(
                            categoryFilters.filter(
                              (item) => item !== e.target.value
                            )
                          )
                    }
                  />
                  {category}
                </label>
              ))}
            </div>
            <div>
              <label className="font-medium pb-1 border-b ">Price Range:</label>
              {[
                { label: "₦0 - ₦100", value: "0-100" },
                { label: "₦101 - ₦200", value: "101-200" },
                { label: "₦201 - ₦300", value: "201-300" },
                { label: "₦300 - Above", value: "300-100000" },
              ].map((priceRange) => (
                <label
                  key={priceRange.value}
                  className="block mt-2 capitalize "
                >
                  <input
                    type="checkbox"
                    className="mr-2 accent-[#000000]"
                    value={priceRange.value}
                    checked={priceFilters.includes(priceRange.value)}
                    onChange={(e) =>
                      e.target.checked
                        ? setPriceFilters([...priceFilters, e.target.value])
                        : setPriceFilters(
                            priceFilters.filter(
                              (item) => item !== e.target.value
                            )
                          )
                    }
                  />
                  {priceRange.label}
                </label>
              ))}
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={() => {
              filterProducts();
              setShowFilters(false);
            }}
            className={`${
              showFilters ? "block" : "hidden"
            } bg-black hover:opacity-90 text-white py-1 px-4 rounded mb-4`}
          >
            Apply Filters
          </button>

          {/* Product List */}
          {filteredProducts && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          )}

          {filteredProducts.length < 1 && (
            <div className="my-8 text-center font-medium flex flex-col gap-2 items-center justify-center">
              
              <img src={Nodata} alt="No data" className="w-[100px] sm:w-[150px] md:w-[200px]"/>
              <p>No data to display</p>{" "}
            </div>
          )}
        </div>
      </div>
      <Customers />
      <Features />
      <Prefooter />
    </section>
  );
};

export default Home;
