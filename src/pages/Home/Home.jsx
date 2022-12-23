import React from 'react'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const home = () => {
  return (
    <div className='home'>
        <Slider/>
        <FeaturedProduct type="featured"/>
        <FeaturedProduct type="trending"/>

    </div>
  )
}

export default home
