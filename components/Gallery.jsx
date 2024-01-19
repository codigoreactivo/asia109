'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
616

// import required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export default function App() {
  const imagePaths = [
    "/img/dunasasia/1.jpg",
    "/img/dunasasia/7.jpg",
    "/img/dunasasia/9.jpg",
    "/img/dunasasia/10.jpg",
    "/img/dunasasia/11.jpg",
    "/img/dunasasia/12.jpg",
    "/img/dunasasia/13.jpg",
    "/img/dunasasia/14.jpg",
    "/img/dunasasia/16.jpg",
    "/img/dunasasia/17.jpg",
    "/img/dunasasia/18.jpg",
    "/img/dunasasia/19.jpg",
    "/img/dunasasia/20.jpg",
    "/img/dunasasia/21.jpg",
    "/img/dunasasia/24.jpg",
    ];
  return (
    <>
      <Swiper
      
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,

        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper h-[42vh] cursor-grab"
      >
        {imagePaths.map((imagePath, index) => (
        <SwiperSlide  key={index}>
          <Image className=" rounded-xl" src={imagePath} width={616} height={410} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
