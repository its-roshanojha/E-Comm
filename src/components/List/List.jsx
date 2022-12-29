import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from '../Card/Card'
import "./List.scss"


const List = ({ subCats, maxPrice, sort, catId }) => {
  
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][categories][id]=${catId}`)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(data))
  }, []);
  console.log(data)

  return (
    <div className='list'>
      { data?.map((item) => <Card item={item} key={item.id} />)}
      
    </div>
  )
}

export default List
