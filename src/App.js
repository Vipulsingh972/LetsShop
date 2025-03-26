import React from "react";
import Navbarr from "./Components/Navbarr";
import "../src/Style/navbar.css";
import "../src/Style/login.css";
import "../src/Style/about.css";
import "../src/Style/contact.css";
import "../src/Style/home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <Router>
      <>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;