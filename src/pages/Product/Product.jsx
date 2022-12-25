import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.bewakoof.com/t1080/fragile-boyfriend-t-shirt-516553-1657179813-1.jpg",
    "https://images.bewakoof.com/t1080/fragile-boyfriend-t-shirt-516553-1657179819-3.jpg",
    "https://images.bewakoof.com/t1080/fragile-boyfriend-t-shirt-516553-1657180354-4.jpg",
  ];

  return (
    <div className="product">
      
        <>
          <div className="left">
            <div className="images">
              <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
              <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
            </div>
            <div className="mainImg">
              <img src={images[selectedImg]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>title</h1>
            <span className="price">$999</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at est sed tenetur enim eos doloremque recusandae nostrum mollitia necessitatibus! Ex corporis quasi reiciendis. Nesciunt cumque sit magnam eligendi harum.</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
    </div>
  );
};

export default Product;
