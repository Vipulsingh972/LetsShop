import React from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";
import "../Style/shop.css";
import logo from "../Assets/LetsShop_Images/images/product-01.jpg";
import logo1 from "../Assets/LetsShop_Images/images/product-02.jpg";
import logo2 from "../Assets/LetsShop_Images/images/product-03.jpg";
import logo3 from "../Assets/LetsShop_Images/images/product-04.jpg";
import logo4 from "../Assets/LetsShop_Images/images/product-05.jpg";
import logo5 from "../Assets/LetsShop_Images/images/product-06.jpg";
import logo6 from "../Assets/LetsShop_Images/images/product-07.jpg";
import logo7 from "../Assets/LetsShop_Images/images/product-08.jpg";
import logo8 from "../Assets/LetsShop_Images/images/product-09.jpg";
import logo9 from "../Assets/LetsShop_Images/images/product-10.jpg";
import logo10 from "../Assets/LetsShop_Images/images/product-11.jpg";
import logo11 from "../Assets/LetsShop_Images/images/product-12.jpg";
import logo12 from "../Assets/LetsShop_Images/images/product-13.jpg";
import logo13 from "../Assets/LetsShop_Images/images/product-14.jpg";
import logo14 from "../Assets/LetsShop_Images/images/product-15.jpg";
import logo15 from "../Assets/LetsShop_Images/images/product-16.jpg";
import Footer from "./Footer";

const categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Product description.",
    image: logo,
    link: "/product-details",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Product description.",
    image: logo1,
    link: "#",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Product description.",
    image: logo2,
    link: "#",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Product description.",
    image: logo3,
    link: "#",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Product description.",
    image: logo4,
    link: "#",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Product description.",
    image: logo5,
    link: "#",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Product description.",
    image: logo6,
    link: "#",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Product description.",
    image: logo7,
    link: "#",
  },
  {
    id: 9,
    title: "Product 9",
    description: "Product description.",
    image: logo8,
    link: "#",
  },
  {
    id: 10,
    title: "Product 10",
    description: "Product description.",
    image: logo9,
    link: "#",
  },
  {
    id: 11,
    title: "Product 11",
    description: "Product description.",
    image: logo10,
    link: "#",
  },
  {
    id: 12,
    title: "Product 12",
    description: "Product description.",
    image: logo11,
    link: "#",
  },
  {
    id: 13,
    title: "Product 13",
    description: "Product description.",
    image: logo12,
    link: "#",
  },
  {
    id: 14,
    title: "Product 14",
    description: "Product description.",
    image: logo13,
    link: "#",
  },
  {
    id: 15,
    title: "Product 15",
    description: "Product description.",
    image: logo14,
    link: "#",
  },
  {
    id: 16,
    title: "Product 16",
    description: "Product description.",
    image: logo15,
    link: "#",
  },
];

const Shop = () => {
  return (
    <>
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
              <img
                className="card-img-top"
                src={product.image}
                alt={product.title}
              />
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

      <Footer/>
    </>
  );
};

export default Shop;
