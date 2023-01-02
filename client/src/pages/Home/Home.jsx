import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const home = () => {
  return (
    <div className='home'>
        <Slider/>
        <FeaturedProduct type="featured"/>
        <Categories/>
        <FeaturedProduct type="trending"/>
        <Contact/>

    </div>
  )
}

export default home
