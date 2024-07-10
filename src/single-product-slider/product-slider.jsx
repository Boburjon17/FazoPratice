
import "./product-slider.scss"
import  images from "../assets/index"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductSlider = () => {
  return (
    <div className=" ProductSlider-container">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className="product">
                <div className="product-text">
                 
                        <h1>Apple iPhone X 64 ГБ</h1>
                        <p>Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма, который удобно лежит в руке и потрясающие выглядит, — это и есть iPhone X.</p>

                
                </div>
                <div className="product-img">
                    <img src={images.productSlider} alt="" />

                </div>
                <div className="product-price">
                   <div className="price-p">
                   <p>1 250 900 Сум</p>
                    <h2>2 220  900 Сум</h2> <br />
                    <button><h3>Показать еще</h3></button>
                   </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="product">
                <div className="product-text">
                 
                        <h1>Apple iPhone X 64 ГБ</h1>
                        <p>Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма, который удобно лежит в руке и потрясающие выглядит, — это и есть iPhone X.</p>

                
                </div>
                <div className="product-img">
                    <img src={images.productSlider} alt="" />

                </div>
                <div className="product-price">
                   <div className="price-p">
                   <p>1 250 900 Сум</p>
                    <h2>2 220  900 Сум</h2> <br />
                    <button><h3>Показать еще</h3></button>
                   </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="product">
                <div className="product-text">
                 
                        <h1>Apple iPhone X 64 ГБ</h1>
                        <p>Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма, который удобно лежит в руке и потрясающие выглядит, — это и есть iPhone X.</p>

                
                </div>
                <div className="product-img">
                    <img src={images.productSlider} alt="" />

                </div>
                <div className="product-price">
                   <div className="price-p">
                   <p>1 250 900 Сум</p>
                    <h2>2 220  900 Сум</h2> <br />
                    <button><h3>Показать еще</h3></button>
                   </div>
                </div>
            </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}



export default ProductSlider