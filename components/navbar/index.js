import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  IoCartOutline,
  IoClose,
  IoMenuSharp,
  IoSearchSharp,
} from "react-icons/io5";

function Navbar() {
  const [focusSearch, setFocusSearch] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

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

  return (
    <div className="md:mb-10">
      {/* Navbar */}
      <div className="bg-white sticky top-0 py-1.5 z-20">
        <nav className="nav-header">
          <ul className="nav-header__wrapper hidden md:flex">
            <li className="nav-header__item">
              <Link href="/">HOME</Link>
            </li>
            <li className="nav-header__item">
              <Link href="/products">PRODUK</Link>
            </li>
            <li className="nav-header__item">PROMOSI</li>
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
              <Link href="/">HOME</Link>
            </p>
            <p className="py-2 cursor-pointer hover:text-slate-600 hover:font-bold focus:font-bold focus:text-slate-600 no-select">
              <Link href="/products">PRODUK</Link>
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
    </div>
  );
}

export default Navbar;
