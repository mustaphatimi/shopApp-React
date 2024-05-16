import React, { createContext, useState, useEffect } from "react";
import { CartProductType, ProductType } from "../types/types";

export const CartContext = createContext<any>(null);

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem ) => {
      return accumulator + (currentItem.price * currentItem.amount);
    }, 0);

    setTotal(total);
  },[cart])


  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product: ProductType, id: number) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item?.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  const decrementAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id) as CartProductType;

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem?.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        clearCart,
        incrementAmount,
        decrementAmount,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
