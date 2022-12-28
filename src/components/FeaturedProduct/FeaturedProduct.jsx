import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";
import axios from "axios";


const FeaturedProduct = ({ type }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(data))
  }, [])

  // console.log(data);

  return (
    <div className="featured-product">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          dignissimos voluptatum blanditiis laborum quisquam suscipit qui
          numquam odit est, id laudantium sapiente atque, eaque architecto
          pariatur adipisci iste reiciendis dolore!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
