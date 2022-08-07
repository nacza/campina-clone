/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import Image from "next/image";
import { IoSearchOutline, IoCartOutline, IoMenuSharp } from "react-icons/io5";

// Slideshow
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// CSS Module
import "../styles/Home.module.css";

export default function Home() {
  const [focusSearch, setFocusSearch] = useState(false);

  function onFocusSearch() {
    setFocusSearch(!focusSearch);
  }

  function onBlurSearch() {
    setFocusSearch(!focusSearch);
  }

  return (
    <>
      {/* Navbar */}
      <nav className="nav-header">
        <ul className="nav-header__wrapper hidden md:flex">
          <li className="nav-header__item">HOME</li>
          <li className="nav-header__item">PRODUK</li>
          <li className="nav-header__item">PROMOSI</li>
          <li className="nav-header__item">NEWS</li>
          <li className="nav-header__item">BLOG</li>
        </ul>

        <div className="nav-header__logo">
          <Image
            className="nav-header__logo-inside"
            src="https://icecreamstore.co.id/assets/images/logo.png"
            width={100}
            height={74}
            alt="logo"
          />
        </div>

        <div className="nav-header__search w-full md:w-auto">
          <div className="mr-2 cursor-pointer p-2 hover:bg-gray-200 rounded duration-100 block no-select md:hidden">
            <IoMenuSharp size={25} />
          </div>
          <div
            className={
              focusSearch
                ? "relative w-full flex justify-center items-center rounded-md overflow-hidden pr-5 border-2 duration-100 border-blue-300"
                : "relative w-full flex justify-center items-center rounded-md overflow-hidden pr-5 border-2 duration-100"
            }
          >
            <input
              className="nav-header__search-input outline-none p-2"
              placeholder="CARI PRODUK"
              type="text"
              name="search"
              onFocus={onFocusSearch}
              onBlur={onBlurSearch}
            />
            <div className="p-2 cursor-pointer bg-gray-200 absolute top-0 right-0 rounded-r no-select">
              <IoSearchOutline size={20} />
            </div>
          </div>
          <div className="nav-header__search-cart-wrapper p-2 rounded ml-2 hover:bg-gray-200 duration-200 no-select">
            <IoCartOutline className="nav-header__search-cart" size={25} />
          </div>

          <div className="nav-header__profile-wrapper flex rounded-full bg-gray-200 cursor-pointer duration-200 hidden sm:flex">
            <div className="w-[40px] h-[40px] flex justify-center items-center">
              <img className="rounded-full" src="" alt="NA" />
            </div>
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div className="w-full h-full relative bg-gray-200 rounded-lg mt-2 md:mt-10 overflow-hidden">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-auto flex justify-center items-center">
              <img src="/slide-1.png" alt="slide-1.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-auto flex justify-center items-center relative">
              <img src="/slide-2.png" alt="slide-2.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
