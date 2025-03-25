import React from "react";
import logo from "../Assets/letsshop.png";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-container">
            <div className="nav-logo">
              <img src={logo} alt="error" />
            </div>
            <div className="nav-options">
              <div className="option">
                <Link to="/">Home</Link>
              </div>
              <div className="option">
                <Link to="/shop">Shop</Link>
              </div>
              <div className="option">
                <Link to="/about">About</Link>
              </div>
              <div className="option">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="nav-functions">
              <div className="nav-search function">Search</div>
              <div className="nav-cart function">
              <Link to="/cart">Cart</Link>
              </div>

              <div className="nav-login function">
                <Link to="/login">LogIn</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbarr;
