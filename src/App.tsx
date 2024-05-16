import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CheckoutForm from "./pages/CheckoutForm";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="overflow-hidden">
      <ScrollToTopOnRouteChange />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
      <SignIn/>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
