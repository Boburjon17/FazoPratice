import "./slider-small.scss";
import images  from "../assets/index"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderSmall = () => {
  return (
    <div className="sliderSmall-container">
      <h1>Популярные категории</h1>
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        slidesPerView={4}
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
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-fon">
          <div className="text-title">
            <h1>Компьютеры</h1>

          </div>
          <div className="Small-img">
            <img src={images.sliderSmall} alt="" />
          </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SliderSmall;
