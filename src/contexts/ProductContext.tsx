import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios"; 
import { ProductType } from "../types/types";

export const ProductContext = createContext<any>(null);


const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        
        
        setProducts(response.data);
       
        
      } catch (error) {
        // console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);

  const memoizedValue = useMemo(() => ({ products }), [products]);

  return (
    <ProductContext.Provider value={memoizedValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;