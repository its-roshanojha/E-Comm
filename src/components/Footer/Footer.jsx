import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      {/* TOP SECTION */}
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>

        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus a quidem voluptatum libero magnam nostrum ea itaque, omnis dolorem magni porro fuga perspiciatis debitis esse nulla incidunt quibusdam? Quod.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus a quidem voluptatum libero magnam nostrum ea itaque, omnis dolorem magni porro fuga perspiciatis debitis esse nulla incidunt quibusdam? Quod.</span>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bottom">
        <div className="left">
          <span className="logo">SHOPPING DOSE</span>
          <span className="copyright"> © Copyright 2022. All Rights reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
