import React from "react";
import "../Style/signup.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-box">
          <h2>
            Create an <span>account</span>
          </h2>
          <p>Please provide your valid information to register!</p>

          <form>
            <div className="input-group">
              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name *" required />
            </div>
            <input type="email" placeholder="E-Mail Address *" required />
            <div className="input-group">
              <input type="password" placeholder="Password *" required />
              <input
                type="password"
                placeholder="Confirm Password *"
                required
              />
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>
          </form>

          <p className="login-text">
            Have an account? <Link to="/login">LogIn?</Link>
            {/* <a href="#">Login</a> */}
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

export default SignUp;
