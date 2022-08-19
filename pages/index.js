import React, { useState } from "react";
import Image from "next/image";
import { IoIosFlash } from "react-icons/io";
import {
  IoSearchOutline,
  IoCartOutline,
  IoMenuSharp,
  IoArrowForward,
  IoHeartOutline,
  IoHeart,
} from "react-icons/io5";

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
      <nav className="nav-header sticky top-0 z-20">
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
                ? "relative w-full flex justify-center items-center rounded-lg overflow-hidden pr-5 border-2 duration-100 border-blue-300"
                : "relative w-full flex justify-center items-center rounded-lg overflow-hidden pr-5 border-2 duration-100"
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
            <div className="w-full min-h-[9.5rem] sm:min-h-full flex justify-center items-center relative">
              <img
                className="absolute sm:relative object-cover h-[100%]"
                src="/slide-1.png"
                alt="slide-1.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full min-h-[9.5rem] sm:min-h-full flex justify-center items-center relative">
              <img
                className="absolute sm:relative object-cover h-[100%]"
                src="/slide-2.png"
                alt="slide-2.png"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Linebreak Category */}
      <div className="w-full min-h-full my-5 sm:my-8 lg:my-10 ">
        <div className="w-full flex justify-center items-center text-slate-500">
          <div className="pr-1 h-px w-full bg-slate-400 rounded-lg"></div>
          <p className="md:text-lg mx-5 flex-none sm:mx-10">KATEGORI</p>
          <div className="pl-1 h-px w-full bg-slate-400 rounded-lg"></div>
        </div>
      </div>

      {/* Slider Subcategory */}
      <div className="relative overflow-hidden">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            340: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 14,
            },
          }}
          freeMode={true}
          navigation={true}
          modules={[Navigation, FreeMode]}
          className="mySwiper2 h-20 sm:h-24 pr-4"
        >
          <SwiperSlide className="rounded-lg cursor-pointer no-select hover:bg-gray-300">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category-stick.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5 sm:h-2"></div>
              <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Stick
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg cursor-pointer no-select hover:bg-gray-300">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category-cup.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5 sm:h-2"></div>
              <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Package
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg cursor-pointer no-select hover:bg-gray-300">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category-cone.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5 sm:h-2"></div>
              <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Stick
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg cursor-pointer no-select hover:bg-gray-300">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category-family-pack.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5 sm:h-2"></div>
              <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Package
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg cursor-pointer no-select hover:bg-gray-300">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category-5l.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5 sm:h-2"></div>
              <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Stick
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg cursor-pointer no-select hover:bg-gray-300">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] relative">
                <img
                  className="absolute object-fill"
                  src="/ice-category-potong.png"
                  alt="ct"
                />
              </div>
              <div className="h-1.5 sm:h-2"></div>
              <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                Ice Cream Package
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Linebreak Category */}
      <div className="w-full min-h-full my-5 sm:mt-8 lg:my-10 ">
        <div className="w-full flex justify-center items-center text-slate-500">
          <div className="pr-1 h-px w-full bg-slate-400 rounded-lg"></div>
          <p className="md:text-lg mx-5 flex-none sm:mx-10">PRODUK SPESIAL</p>
          <div className="pl-1 h-px w-full bg-slate-400 rounded-lg"></div>
        </div>
      </div>

      {/* Special Price */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center text-blue-600 cursor-default">
          <p className="text-lg lg:text-xl font-normal">
            <span className="text-roboto-bold">FLASH</span> SALE
          </p>
          <IoIosFlash size={28} />
        </div>

        <div className="flex items-center text-blue-600">
          <p className="mr-[2px] hover:cursor-pointer hover:underline hover:underline-offset-4 text-sm md:text-md lg:text-base no-select">
            Lihat Semua
          </p>
          <IoArrowForward size={16} />
        </div>
      </div>

      {/* Time Special Price */}
      <div className="flex mt-2">
        <div className="h-9 w-9 text-white bg-blue-600 mr-1 text-slate-600 flex justify-center items-center rounded no-select">
          <p className="font-normal text-roboto-bold">08</p>
        </div>
        <div className="h-9 w-9 text-white bg-blue-600 text-slate-600 flex justify-center items-center rounded no-select">
          <p className="font-normal text-roboto-bold">01</p>
        </div>
        <div className="flex justify-center items-center mx-2">
          <p className="font-normal text-roboto-bold">:</p>
        </div>
        <div className="h-9 w-9 text-white bg-blue-600 mr-1 text-slate-600 flex justify-center items-center rounded no-select">
          <p className="font-normal text-roboto-bold">33</p>
        </div>
        <div className="h-9 w-9 text-white bg-blue-600 text-slate-600 flex justify-center items-center rounded no-select">
          <p className="font-normal text-roboto-bold">17</p>
        </div>
      </div>

      {/* Product Special Price */}
      <div className="special-price my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="group">
          <div className="bg-gray-200 relative aspect-[4/3] overflow-hidden rounded-t-lg cursor-pointer">
            <img
              className="absolute object-cover w-full hover:scale-105 focus:scale-105 transition-all duration-400"
              src="/b.jpg"
              alt="b.jpg"
            />
          </div>
          <div className="py-3 px-3 bg-white drop-shadow overflow-hidden rounded-b-lg">
            <div className="relative z-10 cursor-pointer text-slate-600 hover:text-blue-600">
              <p className="text-sm md:text-md lg:text-base">Campina 8L</p>
              <p className="text-sm md:text-md lg:text-base">Rp. 90.000</p>
            </div>
            <div className="h-10"></div>
            <div className="text-white flex justify-between items-center no-select relative z-10">
              <div className="px-3 py-1 text-slate-600 overflow-hidden rounded cursor-pointer hover:bg-gray-200">
                {/* <IoHeartOutline size={28} /> */}
                <IoHeart className="text-red-600" size={28} />
              </div>
              <div className="px-5 sm:px-8 py-1 bg-blue-600 overflow-hidden rounded cursor-pointer">
                <IoCartOutline size={28} />
              </div>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-gray-200 relative aspect-[4/3] overflow-hidden rounded-t-lg cursor-pointer">
            <img
              className="absolute object-cover w-full hover:scale-105 focus:scale-105 transition-all duration-400"
              src="/b.jpg"
              alt="b.jpg"
            />
          </div>
          <div className="py-3 px-3 bg-white drop-shadow overflow-hidden rounded-b-lg">
            <div className="relative z-10 cursor-pointer text-slate-600 hover:text-blue-600">
              <p className="text-sm md:text-md lg:text-base">Campina 8L</p>
              <p className="text-sm md:text-md lg:text-base">Rp. 90.000</p>
            </div>
            <div className="h-10"></div>
            <div className="text-white flex justify-between items-center no-select relative z-10">
              <div className="px-3 py-1 text-slate-600 overflow-hidden rounded cursor-pointer hover:bg-gray-200">
                <IoHeartOutline size={28} />
              </div>
              <div className="px-5 sm:px-8 py-1 bg-blue-600 overflow-hidden rounded cursor-pointer">
                <IoCartOutline size={28} />
              </div>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-gray-200 relative aspect-[4/3] overflow-hidden rounded-t-lg cursor-pointer">
            <img
              className="absolute object-cover w-full hover:scale-105 focus:scale-105 transition-all duration-400"
              src="/b.jpg"
              alt="b.jpg"
            />
          </div>
          <div className="py-3 px-3 bg-white drop-shadow overflow-hidden rounded-b-lg">
            <div className="relative z-10 cursor-pointer text-slate-600 hover:text-blue-600">
              <p className="text-sm md:text-md lg:text-base">Campina 8L</p>
              <p className="text-sm md:text-md lg:text-base">Rp. 90.000</p>
            </div>
            <div className="h-10"></div>
            <div className="text-white flex justify-between items-center no-select relative z-10">
              <div className="px-3 py-1 text-slate-600 overflow-hidden rounded cursor-pointer hover:bg-gray-200">
                <IoHeartOutline size={28} />
              </div>
              <div className="px-5 sm:px-8 py-1 bg-blue-600 overflow-hidden rounded cursor-pointer">
                <IoCartOutline size={28} />
              </div>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-gray-200 relative aspect-[4/3] overflow-hidden rounded-t-lg cursor-pointer">
            <img
              className="absolute object-cover w-full hover:scale-105 focus:scale-105 transition-all duration-400"
              src="/b.jpg"
              alt="b.jpg"
            />
          </div>
          <div className="py-3 px-3 bg-white drop-shadow overflow-hidden rounded-b-lg">
            <div className="relative z-10 cursor-pointer text-slate-600 hover:text-blue-600">
              <p className="text-sm md:text-md lg:text-base">Campina 8L</p>
              <p className="text-sm md:text-md lg:text-base">Rp. 90.000</p>
            </div>
            <div className="h-10"></div>
            <div className="text-white flex justify-between items-center no-select relative z-10">
              <div className="px-3 py-1 text-slate-600 overflow-hidden rounded cursor-pointer hover:bg-gray-200">
                <IoHeartOutline size={28} />
              </div>
              <div className="px-5 sm:px-8 py-1 bg-blue-600 overflow-hidden rounded cursor-pointer">
                <IoCartOutline size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
}
