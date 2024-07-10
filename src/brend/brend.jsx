
import "./brend.scss"
import images  from "../assets/index"

import  React,  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Brend = () => {
  return (




    <div className="sliderBrend-container">
      <h1>Бренды </h1>
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
        
         
          <div className="brend-img">
            <img src={images.brendCanon} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
        
          
          <div className="brend-img">
            <img src={images.brendMi} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
        
        
          <div className="brend-img">
            <img src={images.brendSamsung} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
        
          
          <div className="brend-img">
            <img src={images.brendlg} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
        
         
          <div className="brend-img">
            <img src={images.brendArtel} alt="" />
          </div>
         
        </SwiperSlide>

        <SwiperSlide >
        
         
        <div className="brend-img">
          <img src={images.brendCanon} alt="" />
        </div>
       
      </SwiperSlide>

      <SwiperSlide>
        
          
        <div className="brend-img">
          <img src={images.brendMi} alt="" />
        </div>
       
      </SwiperSlide>

      <SwiperSlide>
        
        
        <div className="brend-img">
          <img src={images.brendSamsung} alt="" />
        </div>
       
      </SwiperSlide>
       
        
      </Swiper>
    </div>





  )
}

export default Brend