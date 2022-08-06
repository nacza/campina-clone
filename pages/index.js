import React, { useState } from "react";
import Image from "next/image";
import { IoSearchOutline, IoCartOutline, IoMenuSharp } from "react-icons/io5";

// Slideshow
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
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

        <div className="nav-header__search w-full ml-3 sm:ml-0 md:w-auto">
          <div className="mr-2 cursor-pointer p-2 hover:bg-gray-200 rounded duration-100 block md:hidden">
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
            <div className="p-2 cursor-pointer bg-gray-200 absolute top-0 right-0 rounded-r">
              <IoSearchOutline size={20} />
            </div>
          </div>
          <div className="nav-header__search-cart-wrapper p-2 rounded mx-2 hover:bg-gray-200 duration-200">
            <IoCartOutline className="nav-header__search-cart" size={25} />
          </div>

          <div className="nav-header__profile-wrapper flex rounded-full bg-gray-200 cursor-pointer duration-200 hidden sm:flex">
            <div className="w-[40px] h-[40px] flex justify-center items-center">
              <img
                className="rounded-full"
                src="https://lh5.googleusercontent.com/-u8Q4QSO84XQ/AAAAAAAAAAI/AAAAAAAAAAc/OOSySPGRvj8/photo.jpg"
                alt="NA"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div className="w-full relative bg-gray-200 rounded-lg mt-10 overflow-hidden">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <img
                className="object-fill"
                src="/test-slide-6.jpg"
                alt="test-slide-6.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <img
                className="object-fill"
                src="/test-slide-7.jpg"
                alt="test-slide-7.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <img
                className="object-fill"
                src="/test-slide-5.jpg"
                alt="test-slide-5.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <p>Slide 4</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <p>Slide 5</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <p>Slide 6</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <p>Slide 7</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <p>Slide 8</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center">
              <p>Slide 9</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
