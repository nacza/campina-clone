import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { IoIosFlash } from "react-icons/io";
import {
  IoSearchSharp,
  IoCartOutline,
  IoMenuSharp,
  IoArrowForward,
  IoHeartOutline,
  IoHeart,
  IoLogoGithub,
  IoClose,
} from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper";
import hygraphClient, { gql } from "../lib/hygraph-client";

async function getDataHome() {
  const { listProductsBestSeller, listProductsFlashSale } =
    await hygraphClient.request(
      gql`
        query home {
          listProductsFlashSale: products(first: 4) {
            id
            images {
              height
              width
              url
            }
            name
            price
          }
          listProductsBestSeller: products {
            id
            images {
              height
              width
              url
            }
            name
            price
          }
        }
      `
    );

  return {
    listProductsFlashSale,
    listProductsBestSeller,
  };
}

export async function getStaticProps() {
  const { listProductsFlashSale, listProductsBestSeller } = await getDataHome();

  return {
    props: {
      listProductsFlashSale,
      listProductsBestSeller,
    },
  };
}

export default function Home({
  listProductsFlashSale,
  listProductsBestSeller,
}) {
  const [focusSearch, setFocusSearch] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [swiperBanner, setSwiperBanner] = useState(false);
  const [swiperCategory, setSwiperCategory] = useState(false);

  function onFocusSearch() {
    setFocusSearch(!focusSearch);
  }

  function onBlurSearch() {
    setFocusSearch(!focusSearch);
  }

  function onOpenSidebar() {
    setOpenSidebar(!openSidebar);
  }

  function onCloseSidebar() {
    setOpenSidebar(!openSidebar);
  }

  function onInitializedSwiperBanner() {
    setSwiperBanner(true);
  }

  function onInitializedSwiperCategory() {
    setSwiperCategory(true);
  }

  return (
    <>
      {/* Navbar */}
      <div className="bg-white sticky top-0 py-1.5 z-20">
        <div className="max-w-7xl m-auto px-3.5 sm:px-5">
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
              <div
                className="mr-2 cursor-pointer p-2 hover:bg-gray-200 rounded duration-100 block no-select md:hidden"
                onClick={onOpenSidebar}
              >
                <IoMenuSharp className="w-8 h-8" />
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
                  <IoSearchSharp className="w-5 h-5" />
                </div>
              </div>
              <div className="nav-header__search-cart-wrapper p-2 rounded ml-2 hover:bg-gray-200 duration-200 no-select">
                <IoCartOutline className="nav-header__search-cart w-8 h-8" />
              </div>

              <div className="flex hidden sm:inline-flex">
                <button className="px-4 py-2 font-bold bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-md mx-1 no-select">
                  Masuk
                </button>
                <button className="px-4 py-2 font-bold bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 rounded-md ml-1 no-select">
                  Daftar
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`flex w-screen h-screen bg-transparent fixed md:hidden top-0 text-slate-400 ease-in-out duration-150 z-30 ${
          openSidebar ? "left-0" : "left-[-600px]"
        }`}
      >
        <div className="w-3/6 bg-gray-100 z-10">
          <div className="pl-4 mt-4">
            <IoClose
              className="h-9 w-9 ml-[-.5rem] cursor-pointer hover:text-slate-600 hover:font-bold focus:font-bold focus:text-slate-600 no-select"
              onClick={onCloseSidebar}
            />
          </div>
          <div className="px-4">
            <p className="py-2 cursor-pointer hover:text-slate-600 hover:font-bold focus:font-bold focus:text-slate-600 no-select">
              PRODUK
            </p>
            <p className="py-2 cursor-pointer hover:text-slate-600 hover:font-bold focus:font-bold focus:text-slate-600 no-select">
              PROMOSI
            </p>
            <p className="py-2 cursor-pointer hover:text-slate-600 hover:font-bold focus:font-bold focus:text-slate-600 no-select">
              NEWS
            </p>
            <p className="py-2 cursor-pointer hover:text-slate-600 hover:font-bold focus:font-bold focus:text-slate-600 no-select">
              BLOG
            </p>
            <p className="py-2 cursor-pointer hover:text-slate-600 hover:font-bold focus:font-bold focus:text-slate-600 no-select">
              LOGIN / REGISTER
            </p>
          </div>
        </div>
        <div className="h-screen flex-auto" onClick={onOpenSidebar}></div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl m-auto px-3.5 sm:px-5">
        {/* Slider Banner */}
        <div className="relative overflow-hidden">
          {/* Skeleton Slider Banner */}
          <div
            className={
              swiperBanner
                ? "absolute w-full min-h-[9.5rem] sm:min-h-[15rem] md:min-h-[18.8rem] md:mt-10 rounded-lg overflow-hidden"
                : "absolute w-full min-h-[9.5rem] sm:min-h-[15rem] md:min-h-[18.8rem] bg-gray-200 mt-2 md:mt-10 rounded-lg overflow-hidden z-10"
            }
          ></div>

          <Swiper
            navigation={true}
            loop={true}
            slidesPerView="auto"
            watchSlidesProgress={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            onImagesReady={onInitializedSwiperBanner}
            className={
              swiperBanner
                ? "mySwiper relative bg-gray-200 mt-2 md:mt-10 rounded-lg overflow-hidden"
                : "mySwiper relative bg-gray-200 mt-2 md:mt-10 rounded-lg overflow-hidden min-h-[9.5rem] sm:min-h-[15rem] md:min-h-[18.8rem]"
            }
          >
            <SwiperSlide>
              <div className="w-full min-h-[9.5rem] sm:min-h-full flex justify-center items-center relative no-select">
                <img
                  className="absolute sm:relative object-cover h-[100%]"
                  src="/slide-1.png"
                  alt="slide-1.png"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full min-h-[9.5rem] sm:min-h-full flex justify-center items-center relative no-select">
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
            <p className="md:text-lg mx-5 flex-none sm:mx-10 font-bold">
              KATEGORI
            </p>
            <div className="pl-1 h-px w-full bg-slate-400 rounded-lg"></div>
          </div>
        </div>

        {/* Slider Subcategory */}
        <div className="relative overflow-hidden">
          {/* Skeleton Slider Category */}
          <div
            className={
              swiperCategory
                ? "absolute w-full min-h-[80px] sm:min-h-[96px] rounded-lg overflow-hidden"
                : "absolute w-full min-h-[80px] sm:min-h-[96px] bg-gray-200 rounded-lg overflow-hidden z-10"
            }
          ></div>

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
            slidesPerView="auto"
            watchSlidesProgress={true}
            modules={[Navigation, FreeMode]}
            onImagesReady={onInitializedSwiperCategory}
            className="mySwiper2 h-20 sm:h-24 pr-4"
          >
            <SwiperSlide className="slide__category__wrapper rounded-lg cursor-pointer no-select hover:bg-gray-300">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-[35px] w-[35px] relative">
                  <img
                    className="absolute object-fill"
                    src="/ice-category-stick.png"
                    alt="ct"
                  />
                </div>
                <div className="h-2"></div>
                <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                  Ice Cream Stick
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide__category__wrapper rounded-lg cursor-pointer no-select hover:bg-gray-300">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-[35px] w-[35px] relative">
                  <img
                    className="absolute object-fill"
                    src="/ice-category-cup.png"
                    alt="ct"
                  />
                </div>
                <div className="h-2"></div>
                <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                  Ice Cream Package
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide__category__wrapper rounded-lg cursor-pointer no-select hover:bg-gray-300">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-[35px] w-[35px] relative">
                  <img
                    className="absolute object-fill"
                    src="/ice-category-cone.png"
                    alt="ct"
                  />
                </div>
                <div className="h-2"></div>
                <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                  Ice Cream Stick
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide__category__wrapper rounded-lg cursor-pointer no-select hover:bg-gray-300">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-[35px] w-[35px] relative">
                  <img
                    className="absolute object-fill"
                    src="/ice-category-family-pack.png"
                    alt="ct"
                  />
                </div>
                <div className="h-2"></div>
                <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                  Ice Cream Package
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide__category__wrapper rounded-lg cursor-pointer no-select hover:bg-gray-300">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-[35px] w-[35px] relative">
                  <img
                    className="absolute object-fill"
                    src="/ice-category-5l.png"
                    alt="ct"
                  />
                </div>
                <div className="h-2"></div>
                <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                  Ice Cream Stick
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide__category__wrapper rounded-lg cursor-pointer no-select hover:bg-gray-300">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-[35px] w-[35px] relative">
                  <img
                    className="absolute object-fill"
                    src="/ice-category-potong.png"
                    alt="ct"
                  />
                </div>
                <div className="h-2"></div>
                <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-600">
                  Ice Cream Package
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Linebreak Special Price */}
        <div className="w-full min-h-full my-5 sm:mt-8 lg:my-10 ">
          <div className="w-full flex justify-center items-center text-slate-500">
            <div className="pr-1 h-px w-full bg-slate-400 rounded-lg"></div>
            <p className="md:text-lg mx-5 flex-none sm:mx-10 font-bold">
              PRODUK SPESIAL
            </p>
            <div className="pl-1 h-px w-full bg-slate-400 rounded-lg"></div>
          </div>
        </div>

        {/* Special Price */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center text-blue-600 cursor-default">
            <p className="text-lg lg:text-xl font-normal">
              <span className="text-roboto-bold">FLASH</span> SALE
            </p>
            <div>
              <IoIosFlash className="w-10 h-10" />
            </div>
          </div>

          <div className="flex items-center text-blue-600">
            <p className="mr-[2px] hover:cursor-pointer hover:underline hover:underline-offset-4 text-sm md:text-md lg:text-base no-select">
              Lihat Semua
            </p>
            <div>
              <IoArrowForward className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Time Special Price */}
        <div className="flex mt-2 mb-4">
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
        <div className="special-price grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {listProductsFlashSale.map((item, i) => (
            <div key={item.id} className="group">
              <div className="bg-gray-200 relative aspect-square overflow-hidden rounded-t-lg cursor-pointer z-10 no-select">
                <img
                  className="absolute object-cover w-full transition-transform hover:scale-[1.05] no-select"
                  src={item.images[0].url}
                  alt={item.name}
                />
              </div>
              <div className="py-3 px-3 bg-white shadow-lg overflow-hidden rounded-b-lg">
                <div className="relative z-10 cursor-pointer text-slate-600 hover:text-blue-600">
                  <p className="text-sm md:text-md lg:text-base no-select">
                    {item.name}
                  </p>
                  <p className="text-sm md:text-md lg:text-base no-select">
                    Rp. {item.price}
                  </p>
                </div>
                <div className="h-10"></div>
                <div className="text-white flex justify-between items-center no-select relative z-10">
                  <div className="px-3 py-1 text-slate-600 overflow-hidden rounded cursor-pointer hover:bg-gray-200">
                    <IoHeartOutline className="text-red-600 h-7 w-7" />
                  </div>
                  <div className="px-5 sm:px-8 py-1 bg-blue-600 overflow-hidden rounded cursor-pointer">
                    <BsCartPlus className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Linebreak Produk Terlaris */}
        <div className="w-full min-h-full my-5 sm:mt-8 lg:my-10 ">
          <div className="w-full flex justify-center items-center text-slate-500">
            <div className="pr-1 h-px w-full bg-slate-400 rounded-lg"></div>
            <p className="md:text-lg mx-5 flex-none sm:mx-10 font-bold">
              PRODUK TERLARIS
            </p>
            <div className="pl-1 h-px w-full bg-slate-400 rounded-lg"></div>
          </div>
        </div>

        {/* Product Best Selling */}
        <div className="best-selling grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {listProductsBestSeller.map((item, i) => (
            <div key={item.id} className="group">
              <div className="bg-gray-200 relative aspect-square overflow-hidden rounded-t-lg cursor-pointer z-10 no-select">
                <img
                  className="absolute object-cover w-full transition-transform hover:scale-[1.05] no-select"
                  src={item.images[0].url}
                  alt={item.name}
                />
              </div>
              <div className="py-3 px-3 bg-white shadow-lg overflow-hidden rounded-b-lg">
                <div className="relative z-10 cursor-pointer text-slate-600 hover:text-blue-600">
                  <p className="text-sm md:text-md lg:text-base no-select">
                    {item.name}
                  </p>
                  <p className="text-sm md:text-md lg:text-base no-select">
                    Rp. {item.price}
                  </p>
                </div>
                <div className="h-10"></div>
                <div className="text-white flex justify-between items-center no-select relative z-10">
                  <div className="px-3 py-1 text-slate-600 overflow-hidden rounded cursor-pointer hover:bg-gray-200">
                    <IoHeartOutline className="text-red-600 h-7 w-7" />
                  </div>
                  <div className="px-5 sm:px-8 py-1 bg-blue-600 overflow-hidden rounded cursor-pointer">
                    <BsCartPlus className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className="mt-10">
        <div className="max-w-7xl m-auto px-3.5 sm:px-5">
          <div className="flex justify-center items-center text-slate-500">
            <p className="text-sm md:text-md lg:text-base">Created by natczh</p>
            <div className="mx-1"></div>
            <Link href="http://github.com/natczh">
              <a target="_blank">
                <IoLogoGithub className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 " />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* GAP */}
      <div className="h-10"></div>
    </>
  );
}
