"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.css";

// import required modules
import { Pagination } from "swiper/modules";
import NextImage from "@/components/NextImage";
import ProjectSliderData from "@/content/ProjectSlider";

function ProjectSlider() {
  return (
    <div className="sliderWrap h-[600px]">
      <Swiper
        direction={"vertical"}
        watchSlidesProgress={true}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ProjectSliderData.map((data) => (
          <SwiperSlide>
            <h1>text</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
