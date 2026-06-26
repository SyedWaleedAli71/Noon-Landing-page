import React from "react";
import "./slider.css";
import banner1 from "../../assets/images/slider-1-p.avif";
import banner2 from "../../assets/images/slider-2-p.avif";
import banner3 from "../../assets/images/slider-3-p.avif";
import banner4 from "../../assets/images/slider-4-p.avif";



// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Navigation Module
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img src={banner1} alt="Banner 1" /></SwiperSlide>
      <SwiperSlide><img src={banner2} alt="Banner 2" /></SwiperSlide>
      <SwiperSlide><img src={banner3} alt="Banner 3" /></SwiperSlide>
      <SwiperSlide><img src={banner4} alt="Banner 4" /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;