import React from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";
import "../Style/shop.css";
import logo from "../Assets/LetsShop_Images/images/product-01.jpg";

const categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];
const products = [
  { id: 1, title: "Product 1", description: "Product description.", image: logo, link: "#" },
  { id: 2, title: "Product 2", description: "Product description.", image: logo, link: "#" },
  { id: 3, title: "Product 3", description: "Product description.", image: logo, link: "#" },
  { id: 4, title: "Product 4", description: "Product description.", image: logo, link: "#" },
  { id: 5, title: "Product 5", description: "Product description.", image: logo, link: "#" },
  { id: 6, title: "Product 6", description: "Product description.", image: logo, link: "#" },
  { id: 7, title: "Product 7", description: "Product description.", image: logo, link: "#" },
  { id: 8, title: "Product 8", description: "Product description.", image: logo, link: "#" },
  { id: 9, title: "Product 4", description: "Product description.", image: logo, link: "#" },
  { id: 10, title: "Product 5", description: "Product description.", image: logo, link: "#" },
  { id: 11, title: "Product 6", description: "Product description.", image: logo, link: "#" },
  { id: 12, title: "Product 7", description: "Product description.", image: logo, link: "#" },
  { id: 13, title: "Product 8", description: "Product description.", image: logo, link: "#" },
];

const Shop = () => {
  return (
    <div className="container">
      {/* Category Navigation */}
      <div className="shop-container nav-container">
        <div className="category-container">
          <div className="link-category">
            {categories.map((category, index) => (
              <Link key={index} className="c-links">
                {category}
              </Link>
            ))}
          </div>
          <div className="btn-category">
            <Link>Filter</Link>
            <Link>Search</Link>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="card-container universal">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img className="card-img-top" src={product.image} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <a href={product.link} className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
