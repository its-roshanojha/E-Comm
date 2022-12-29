import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from '../Card/Card'
import "./List.scss"


const List = ({ subCats, maxPrice, sort, catId }) => {
  
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  var api = (`http://localhost:1337/api/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`).replace(/,/g,"");

  useEffect(() => {
    axios
      .get(api)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(data))
  },[subCats, maxPrice, sort, catId]);
 
  

  return (
    <div className='list'>
      { data?.map((item) => <Card item={item} key={item.id} />)}
      
    </div>
  )
}

export default List
