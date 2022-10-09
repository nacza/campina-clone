import { useState } from "react";

import { IoIosFlash } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper";

import { getDataHome } from "@/lib/data";

import Template from "@/components/template";
import CardProduct from "@/components/card-product";
import LineBreak from "@/components/line-break";

import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const {
    listProductsFlashSale,
    listProductsBestSeller,
    listCategories,
    listBanners,
  } = await getDataHome();

  return {
    props: {
      listProductsFlashSale,
      listProductsBestSeller,
      listCategories,
      listBanners,
    },
  };
}

export default function Home({
  listProductsFlashSale,
  listProductsBestSeller,
  listCategories,
  listBanners,
}) {
  const [swiperBanner, setSwiperBanner] = useState(false);
  const [swiperCategory, setSwiperCategory] = useState(false);

  function onInitializedSwiperBanner() {
    setSwiperBanner(true);
  }

  function onInitializedSwiperCategory() {
    setSwiperCategory(true);
  }

  return (
    <Template>
      <main>
        {/* Slider Banner */}
        <div className="relative w-full overflow-hidden">
          {/* Skeleton Slider Banner */}
          <div
            className={
              swiperBanner
                ? "absolute w-full rounded-lg overflow-hidden min-h-[9.5rem] sm:min-h-[170px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px]"
                : "absolute w-full bg-gray-200 mt-2 rounded-lg overflow-hidden z-10 min-h-[9.5rem] sm:min-h-[170px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px]"
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
                ? "mySwiper relative bg-gray-200 mt-2 rounded-lg overflow-hidden min-h-[9.5rem] sm:min-h-[170px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px]"
                : "mySwiper relative bg-gray-200 mt-2 rounded-lg overflow-hidden min-h-[9.5rem] sm:min-h-[170px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px]"
            }
          >
            {listBanners.map((item, i) => (
              <SwiperSlide
                key={item.id}
                className="w-full min-h-[9.5rem] sm:min-h-[170px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] no-select cursor-pointer"
              >
                <Link href={`/${item.linkRedirect}`}>
                  <Image
                    alt={item.image.fileName}
                    src={item.image.url}
                    objectFit="cover"
                    layout="fill"
                    width={1240}
                    height={300}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Linebreak Category */}
        <LineBreak>KATEGORI</LineBreak>

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
            {listCategories.map((item, i) => (
              <SwiperSlide
                key={item.id}
                className="slide__category__wrapper rounded-lg cursor-pointer no-select hover:bg-gray-300"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="h-[40px] w-[40px] relative">
                    <img
                      className="absolute object-fill"
                      src={item.images[0].url}
                      alt={item.images[0].fileName}
                    />
                  </div>
                  <div className="h-2"></div>
                  <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap px-2 text-center text-slate-500">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Linebreak Special Price */}
        <LineBreak>PRODUK SPESIAL</LineBreak>

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
          <div className="h-9 w-9 text-white bg-blue-600 mr-1 flex justify-center items-center rounded no-select">
            <p className="font-normal text-roboto-bold">08</p>
          </div>
          <div className="h-9 w-9 text-white bg-blue-600 flex justify-center items-center rounded no-select">
            <p className="font-normal text-roboto-bold">01</p>
          </div>
          <div className="flex justify-center items-center mx-2">
            <p className="font-normal text-roboto-bold">:</p>
          </div>
          <div className="h-9 w-9 text-white bg-blue-600 mr-1 flex justify-center items-center rounded no-select">
            <p className="font-normal text-roboto-bold">33</p>
          </div>
          <div className="h-9 w-9 text-white bg-blue-600 flex justify-center items-center rounded no-select">
            <p className="font-normal text-roboto-bold">17</p>
          </div>
        </div>

        {/* Product Special Price */}
        <div className="special-price grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {listProductsFlashSale.map((item, i) => (
            <CardProduct
              key={item.id}
              images={item.images[0].url}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

        {/* Linebreak Produk Terlaris */}
        <LineBreak>PRODUK TERLARIS</LineBreak>

        {/* Product Best Selling */}
        <div className="best-selling grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {listProductsBestSeller.map((item, i) => (
            <CardProduct
              key={item.id}
              images={item.images[0].url}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </main>
    </Template>
  );
}
