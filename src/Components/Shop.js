// import React from "react";
// import { Link } from "react-router-dom";
// import "../Style/navbar.css";
// import "../Style/shop.css";
// import logo from "../Assets/LetsShop_Images/images/product-01.jpg";

// const Shop = () => {
//   return (
//     <>
//       <div class="container">
//         <div className="shop-container nav-container">
//           <div className="category-container">
//             <div className="link-category">
//               <Link className="c-links">All Products</Link>
//               <Link className="c-links">Women</Link>
//               <Link className="c-links">Men</Link>
//               <Link className="c-links">Bag</Link>
//               <Link className="c-links">Shoes</Link>
//               <Link className="c-links">Watches</Link>
//             </div>
//             <div className="btn-category">
//               <Link>Filter</Link>
//               <Link>Search</Link>
//             </div>
//           </div>     
//         </div>


//         <div className="card-container universal">

//             <div class="card">
//               <img class="card-img-top" src={logo} alt="Card image cap" />
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//             <div class="card">
//               <img class="card-img-top" src={logo} alt="Card image cap" />
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//             <div class="card">
//               <img class="card-img-top" src={logo} alt="Card image cap" />
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//             <div class="card">
//               <img class="card-img-top" src={logo} alt="Card image cap" />
//               <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" class="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>

//           </div>
//       </div>
//     </>
//   );
// };

// export default Shop;




import React from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";
import "../Style/shop.css";
import logo from "../Assets/LetsShop_Images/images/product-01.jpg";

const categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];
const products = [
  {
    id: 1,
    title: "Product 1",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
  {
    
    id: 3,
    title: "Product 3",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
  {
    id: 4,
    title: "Product 4",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
  {
    id: 5,
    title: "Product 1",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
  {
    id: 6,
    title: "Product 2",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
  {
    id: 7,
    title: "Product 3",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
  {
    id: 8,
    title: "Product 4",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: logo,
    link: "#",
  },
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
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

