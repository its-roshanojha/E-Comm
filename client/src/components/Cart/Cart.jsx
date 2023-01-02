import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from "../../redux/cartReducer"
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";


const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
 
  const total = () =>{
    let total = 0
    products.forEach(item => {total = total +  item.quantity * item.price; });
    return total.toFixed(2)
  }

  const stripePromise = loadStripe(
    "pk_test_51MLSDnSIT0r8EU0QTWhz3nxkZszF7Gx9F0T9rWsGZcj8PjYhaNCUAPrcdSl7QkjF1LcMAVjS0wCUXRdGzgzA9D9I00f8imS5Ut"
  );
  const handlePayment = async () => {
    console.log(products)
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      
      
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={'http://localhost:1337' + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" onClick={()=> dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs. {total()}</span>
      </div>
      <button  onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

export default Cart;
