import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import axios from "axios";
import "./Products.scss";

const Products = () => {

  const catId = parseInt(useParams().id);
  console.log(catId);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [sort, setSort] = useState("asc");
  const [data, setData] = useState([]);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/sub-categories?[filters][categories][id][$eq]=${catId}`)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(data))
  }, [catId]);
console.log(data)


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats)


  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          
          {data?.map((item) => (<div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
               <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
            
          
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={4000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-Common-1669986431.jpg"
          alt=""
        />
       
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>

        <img
          className="ambassador"
          src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Purple_Green_Founder_Quote_Email_Header_2000_x_1000px_2000_x_80px_1600x.jpg?v=1664543529"
          alt=""
        />
        
      </div>
    </div>
  )
}

export default Products
