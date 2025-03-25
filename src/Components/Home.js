import React from "react";
import logo from "../Assets/LetsShop_Images/images/slide-01.jpg";
import logo1 from "../Assets/LetsShop_Images/images/slide-02.jpg";
import logo2 from "../Assets/LetsShop_Images/images/slide-03.jpg";
import Footer from "./Footer";
import Shop from "./Shop";
const Home = () => {
  return (
    <>
      <div className="container">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src={logo} alt="Slide 1" />
            </div>
            <div class="slide">
              <img src={logo1} alt="Slide 2" />
            </div>
            <div class="slide">
              <img src={logo2} alt="Slide 3" />
            </div>
          </div>
        </div>
      </div>
      <div className="product-overview">
        <h1>Product Overview</h1>
      </div>
      <Shop />
    </>
  );
};

export default Home;
