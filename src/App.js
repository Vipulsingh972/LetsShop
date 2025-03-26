import React from "react";
// <<<<<<< HEAD
// import Navbarr from "./Components/Navbarr";
// import "../src/Style/navbar.css";
// import "../src/Style/login.css";
// import "../src/Style/about.css";
// import "../src/Style/contact.css";
// import "../src/Style/home.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// =======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from "./Components/Navbarr";
// >>>>>>> f0b5cda ( signup done)
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
// <<<<<<< HEAD
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

// const App = () => {
//   return (
//     <Router>
//       <>
//         <Navbarr />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/product-details" element={<ProductDetails />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </>
//     </Router>
// =======
// import Cart from "./Components/Cart";

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
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </>
      </Router>
   
// >>>>>>> f0b5cda ( signup done)
  );
};

export default App;
