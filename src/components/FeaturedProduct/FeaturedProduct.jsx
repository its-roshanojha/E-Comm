import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProduct.scss"

const FeaturedProduct = ({type}) => {

const data =  [
    {
        id: 1,
        img: "https://images.bewakoof.com/t1080/black-hoodie-sweatshirt-363701-1669641515-1.jpg",
        img2: "https://images.bewakoof.com/t1080/black-hoodie-sweatshirt-363701-1669641526-3.jpg",
        title: "Men's Black Hoodie",
        isNew: true,
        oldPrice: 2399,
        price: 1199
    },
    {
      id: 2,
      img: "https://images.bewakoof.com/t1080/women-party-fav-tee-oversized-printed-t-shirt-554322-1671088258-1.jpg",
      img2: "https://images.bewakoof.com/t1080/women-party-fav-tee-oversized-printed-t-shirt-554322-1671088263-2.jpg",
      title: "Women's Bold Red Party Fav Typography Oversized T-shirt",
      isNew: true,
      oldPrice: 2599,
      price: 1699
  },
  {
    id: 3,
    img: "https://images.bewakoof.com/t1080/men-s-black-uchiha-s-unsung-hero-graphic-printed-t-shirt-495314-1656160537-1.jpg",
    img2: "https://images.bewakoof.com/t1080/men-s-black-uchiha-s-unsung-hero-graphic-printed-t-shirt-495314-1656160543-2.jpg",
    title: "Men's Black Uchiha's Unsung Hero Graphic Printed T-shirt",
    isNew: false,
    oldPrice: 1599,
    price: 999
},
{
  id: 4,
  img: "https://images.bewakoof.com/t1080/men-s-black-gojo-domain-graphic-printed-oversized-t-shirt-520746-1667495708-2.jpg",
  img2: "https://images.bewakoof.com/t1080/men-s-black-gojo-domain-graphic-printed-oversized-t-shirt-520746-1667495714-3.jpg",
  title: "Men's Black Gojo Domain Graphic Printed Oversized T-shirt",
  isNew: false,
  oldPrice: 1699,
  price: 1299
},
]

  return (
    <div className='featured-product'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dignissimos voluptatum blanditiis laborum quisquam suscipit qui numquam odit est, id laudantium sapiente atque, eaque architecto pariatur adipisci iste reiciendis dolore!
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProduct
