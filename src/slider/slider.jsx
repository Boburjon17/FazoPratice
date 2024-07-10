import React from 'react'
import './slider.scss'
import images from '../assets/index'


// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
  return (
  


    <div className="slider-container">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images.slider1} alt="slider1" />
        </SwiperSlide>

        <SwiperSlide> 
          <img src={images.slider2} alt="slider2" />
          </SwiperSlide>

        <SwiperSlide>
        <img src={images.slider3} alt="slider3" />
          </SwiperSlide>
     
      </Swiper>
    </div>
  )}


  
export default Slider