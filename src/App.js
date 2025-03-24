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
        </Routes>
      </>
    </Router>
  );
};

export default App;
