import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.bewakoof.com/t1080/black-hoodie-sweatshirt-363701-1669641515-1.jpg",
      img2: "https://images.bewakoof.com/t1080/black-hoodie-sweatshirt-363701-1669641526-3.jpg",
      title: "Men's Black Hoodie",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem excepturi quae distinctio voluptas impedit vero! Maxime voluptatem, et laborum repellendus vel corporis deserunt iste minus doloremque sapiente consectetur nemo.",
      oldPrice: 2399,
      price: 1199,
    },
    {
      id: 2,
      img: "https://images.bewakoof.com/t1080/women-party-fav-tee-oversized-printed-t-shirt-554322-1671088258-1.jpg",
      img2: "https://images.bewakoof.com/t1080/women-party-fav-tee-oversized-printed-t-shirt-554322-1671088263-2.jpg",
      title: "Women's Bold Red Party Fav Typography Oversized T-shirt",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem excepturi quae distinctio voluptas impedit vero! Maxime voluptatem, et laborum repellendus vel corporis deserunt iste minus doloremque sapiente consectetur nemo.",
      oldPrice: 2599,
      price: 1699,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
