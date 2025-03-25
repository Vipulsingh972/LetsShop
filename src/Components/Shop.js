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
    title: "White T-Shirt",
    description: "549/- ",
    image: logo,
    link: "/product-details",
  },
  {
    id: 2,
    title: "White Shirt",
    description: "799/-",
    image: logo1,
    link: "#",
  },
  {
    id: 3,
    title: "Raymand shirt",
    description: "999/-",
    image: logo2,
    link: "#",
  },
  {
    id: 4,
    title: "Winter Jacket",
    description: "2999/-",
    image: logo3,
    link: "#",
  },
  {
    id: 5,
    title: "Primium Combo",
    description: "999/-",
    image: logo4,
    link: "#",
  },
  {
    id: 6,
    title: "SONATA",
    description: "4999/-",
    image: logo5,
    link: "#",
  },
  {
    id: 7,
    title: "Suit",
    description: "1199/-",
    image: logo6,
    link: "#",
  },
  {
    id: 8,
    title: "T-Shirt",
    description: "499/-",
    image: logo7,
    link: "#",
  },
  {
    id: 9,
    title: "Sneker's",
    description: "2099/-",
    image: logo8,
    link: "#",
  },
  {
    id: 10,
    title: "Black Top",
    description: "699/-",
    image: logo9,
    link: "#",
  },
  {
    id: 11,
    title: "Blue primium Shirt",
    description: "2000/-",
    image: logo10,
    link: "#",
  },
  {
    id: 12,
    title: "Pur Lathner Belt",
    description: "399/-",
    image: logo11,
    link: "#",
  },
  {
    id: 13,
    title: "Combo",
    description: "1299/-",
    image: logo12,
    link: "#",
  },
  {
    id: 14,
    title: "Black Top",
    description: "949/-",
    image: logo13,
    link: "#",
  },
  {
    id: 15,
    title: "TITAN",
    description: "7999/-",
    image: logo14,
    link: "#",
  },
  {
    id: 16,
    title: "Sleep Wear Combo",
    description: "2099/-",
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
