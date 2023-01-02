import React, { useState } from "react";
import "./Product.scss";
import { useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedimg, setSelectedimg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  

  useEffect( () => {
    axios 
      .get(`http://localhost:1337/api/products/${id}?populate=*`)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(data))
  },[id]);
console.log(data?.attributes?.img?.data?.attributes?.url, "product fail")
 

  return (
    <div className="product">
      
        <>
          <div className="left">
            <div className="images">
              <img src={'http://localhost:1337' + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedimg("img")} />
              <img src={'http://localhost:1337' + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedimg("img2")} />
            </div>
            <div className="mainImg">
              <img src={'http://localhost:1337' + data?.attributes?.[selectedimg]?.data?.attributes?.url} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="oldPrice"><strike> Rs. {data?.attributes?.oldPrice} </strike></span>
            <span className="price">Rs. {data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
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
            <button className="add" onClick={()=> dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity
            }))}>
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
