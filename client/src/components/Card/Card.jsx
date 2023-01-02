import React from 'react'
import {Link} from "react-router-dom"
import "./Card.scss"

const Card = ({item}) => {
  return (
    <div>
      <Link className='link' to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                {item?.attributes.isNew && <span>New Season</span>}
                <img src={ 'http://localhost:1337' + item.attributes.img.data.attributes.url} alt="" className="mainImg" />
                <img src={ 'http://localhost:1337' + item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className="price">
            <strike><h3>Rs. {item?.attributes.oldPrice || item?.attributes.price + 100}</h3></strike>
            <h3>Rs. {item?.attributes.price}</h3>

            </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
