import React, { useState } from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1266983/pexels-photo-1266983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  ]

  const prevSlide= () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  }
  const nextSlide= () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  }


  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}><WestOutlinedIcon/></div>
        <div className="icon" onClick={nextSlide}><EastOutlinedIcon/></div>
      </div>
    </div>
  )
}

export default Slider
