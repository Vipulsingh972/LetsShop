import React from "react";
import "../Style/cart.css";
import logo from "../Assets/LetsShop_Images/images/item-cart-01.jpg";
import "../Style/navbar.css";

const Cart = () => {
  return (
    <div className="cart-container nav-container">
      <div className="cart-items">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={logo} alt="Product image" />
                Fresh Strawberries
              </td>
              <td>$36.00</td>
              <td>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </td>
              <td>$36.00</td>
            </tr>

            <tr>
              <td>
                <img src={logo} alt="Product image" />
                Fresh Strawberries
              </td>
              <td>$36.00</td>
              <td>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </td>
              <td>$36.00</td>
            </tr>

            <tr>
              <td>
                <img src={logo} alt="Product image" />
                Fresh Strawberries
              </td>
              <td>$36.00</td>
              <td>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </td>
              <td>$36.00</td>
            </tr>

            <tr>
              <td>
                <img
                  src="https://via.placeholder.com/50"
                  alt="Lightweight Jacket"
                />
                Lightweight Jacket
              </td>
              <td>$16.00</td>
              <td>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </td>
              <td>$16.00</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="cart-buttons">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
          <button>Update Cart</button>
        </div> */}
      </div>
      <div className="cart-totals">
        <h3>Cart Totals</h3>  <span>$79.65</span>
        {/* <p>
          Subtotal: <span>$79.65</span>
        </p>
        <hr />
        <p>
          Total: <span>$79.65</span>
        </p> */}
        <button className="checkout-btn">BUY</button>
      </div>
    </div>
  );
};

export default Cart;
