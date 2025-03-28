import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbarr from "./Components/Navbarr";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import UseEffect from "./hooks/UseEffect";
import CounterUseState from "./hooks/CounterUseState";
import CounterUseReducer from "./hooks/CounterUseReducer";
import ThemeComponent from "./hooks/contextTheme/ThemeComponent";
import { ThemeProvider } from "./hooks/contextTheme/ThemeContext";
import WhatsApp from "./props/WhatsApp";
import Message from "./props/Message";
import A from "./props/A";
import B from "./props/B";
import C from "./props/C";
import D from "./props/D";

const App = () => {
  return (
    <CartProvider>
      <ThemeProvider>
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
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/usestate" element={<CounterUseState />} />
              <Route path="/count" element={<CounterUseReducer />} />
              <Route path="/post" element={<UseEffect />} />
              <Route path="/theme" element={<ThemeComponent />} />
              <Route path="/whatsapp" element={<WhatsApp />} />
              <Route path="/message" element={<Message />} />
              <Route path="/c" element={<C />} />
              <Route path="/a" element={<A />} />
              <Route path="/b" element={<B />} />
              <Route path="/d" element={<D />} />
            </Routes>
          </>
        </Router>
      </ThemeProvider>
    </CartProvider>
  );
};

export default App;
