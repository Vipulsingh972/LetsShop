import React from "react";
import "../Style/login.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ApiService from "../service/ApiService";
import { useState } from "react";

const Login = () => {
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ApiService.login(userdata); // Use signup method instead of register
      alert("LogIn successful!"); // Alert on success
      setUserData({
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.message || "An error occurred during LogIn."); // Show error message
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>
            Login to your <span>account</span>
          </h2>
          <p>
            Please input your username and password and login to your account to
            get access to your dashboard.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email *"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={userdata.password}
              onChange={handleChange}
              required
            />

            <div className="options">
              <label>
                {" "}
                Remember_Me
                <input type="checkbox" />
              </label>
              <a href="#">Forgot your password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="signup-text">
            Haven't any account? <Link to="/Signup">SignUp?</Link>
            {/* <a href="#">Sign Up</a> */}
          </p>

          <div className="social-login">
            <span>Or Login with</span>
            <div className="social-icons">
              <button className="google-btn">G</button>
              <button className="facebook-btn">f</button>
              <button className="linkedin-btn">in</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
