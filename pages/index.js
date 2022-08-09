import React, { useState } from "react";
import Image from "next/image";
import {
  IoSearchOutline,
  IoCartOutline,
  IoMenuSharp,
  IoAppsOutline,
} from "react-icons/io5";

// Slideshow
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

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

          <div className="nav-header__profile-wrapper flex rounded-full bg-gray-200 cursor-pointer duration-200 hidden sm:flex sm:ml-2">
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
          // autoplay={{
          //   delay: 7000,
          //   disableOnInteraction: false,
          // }}
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

      {/* Linebreak Category */}
      <div className="w-full min-h-full mt-5 md:mt-12">
        <div className="w-full flex justify-center items-center text-slate-500">
          <div className="pr-1 h-px w-full bg-slate-400 rounded-lg"></div>
          <p className="text-lg mx-5 sm:mx-10">KATEGORI</p>
          <div className="pl-1 h-px w-full bg-slate-400 rounded-lg"></div>
        </div>
      </div>

      {/* Slider Subcategory */}
      <div className="relative mt-5 overflow-hidden">
        <Swiper
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          freeMode={true}
          navigation={true}
          modules={[Navigation, FreeMode]}
          className="mySwiper2 h-20 pr-4"
        >
          <SwiperSlide className="rounded cursor-pointer">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[35px] w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5"></div>
              <p className="text-xs sm:text-sm md:text-md text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Stick
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded cursor-pointer">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[35px] w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5"></div>
              <p className="text-xs sm:text-sm md:text-md text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Package
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded cursor-pointer">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[35px] w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5"></div>
              <p className="text-xs sm:text-sm md:text-md text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Stick
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded cursor-pointer">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[35px] w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5"></div>
              <p className="text-xs sm:text-sm md:text-md text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Package
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded cursor-pointer">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[35px] w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5"></div>
              <p className="text-xs sm:text-sm md:text-md text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Stick
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded cursor-pointer">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[35px] w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5"></div>
              <p className="text-xs sm:text-sm md:text-md text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Package
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
