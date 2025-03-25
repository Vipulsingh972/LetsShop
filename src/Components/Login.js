import React from "react";
import "../Style/login.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
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

          <form>
            <input type="text" placeholder="Username or Email *" required />
            <input type="password" placeholder="Password *" required />

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
            Haven't any account? <Link to="/signup">SignUp?</Link>
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
