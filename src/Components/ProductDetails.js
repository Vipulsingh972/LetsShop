
import React, { useState } from "react";
import "../Style/productdetails.css"; // Importing external CSS
import logo1 from "../Assets/LetsShop_Images/images/product-min-01.jpg"
import logo2 from "../Assets/LetsShop_Images/images/product-min-02.jpg"
import logo3 from "../Assets/LetsShop_Images/images/product-min-03.jpg"
import logo4 from "../Assets/LetsShop_Images/images/product-detail-01.jpg"

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
  <>
    <div className="product-container">
      <div className="product-box">
        <div className="image-section">
        <div className="thumbnail-images">
          <img src={logo1} alt="Thumbnail 1" />
          <img src={logo2} alt="Thumbnail 2" />
          <img src={logo3} alt="Thumbnail 3" />
        </div>
        <div className="main-image">
          <img src={logo4}  alt="Product" />
        </div>
      </div>
      <div className="details-section">
        <h2>Lightweight Jacket</h2>
        <p className="price">$58.79</p>
        <p className="description">Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
        <label>Size</label>
        <select>
          <option>Choose an option</option>
        </select>
        <label>Color</label>
        <select>
          <option>Choose an option</option>
        </select>
        <div className="quantity-container">  
          <div className="q-c-div" onClick={handleDecrease}>-</div>
          <span>{quantity}</span>
          <div className="q-c-div" onClick={handleIncrease}>+</div>
        </div>
        <div className="add-buy">
        <button className="add-to-cart">ADD TO CART</button>
        <button className="buy-now">BUY NOW</button>
        </div>
        <div className="social-icons">
          <span>❤️</span>
          <span>🔗</span>
        </div>
      </div>
     </div>
    </div>
    </>
  );
};

export default ProductPage;
