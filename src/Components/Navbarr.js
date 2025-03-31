// import React, { useContext } from "react";
// import logo from "../Assets/letsshop.png";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const Navbarr = () => {
//   const { cart } = useContext(CartContext);
//   // Calculate total cart quantity
//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <>
//       <header>
//         <nav>
//           <div className="nav-container">
//             <div className="nav-logo">
//               <img src={logo} alt="error" />
//             </div>
//             <div className="nav-options">
//               <div className="option">
//                 <Link to="/">Home</Link>
//               </div>
//               <div className="option">
//                 <Link to="/shop">Shop</Link>
//               </div>
//               <div className="option">
//                 <Link to="/about">About</Link>
//               </div>
//               <div className="option">
//                 <Link to="/contact">Contact</Link>
//               </div>
//             </div>
//             <div className="nav-functions">
//               <div className="nav-search function">Search</div>
//               <div className="nav-cart function">
//               <Link to="/cart" id="cart">🛒{cartCount > 0 && <span className="cart-count">{cartCount}</span>}</Link>
//               </div>

//               <div className="nav-login function">
//                 <Link to="/login">LogIn</Link>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbarr;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../Assets/letsshop.png";

const Navbarr = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Calculate total cart quantity
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <img src={logo} alt="Let's Shop" />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {/* Navigation Links */}
          <div className={`nav-options ${menuOpen ? "open" : ""}`}>
            <Link to="/" className="option">Home</Link>
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/about" className="option">About</Link>
            <Link to="/contact" className="option">Contact</Link>
          </div>

          {/* Functional Icons */}
          <div className="nav-functions">
            <div className="nav-search function">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-cart function">
              <Link to="/cart" id="cart">
                🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Link>
            </div>
            <div className="nav-login function">
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbarr;
