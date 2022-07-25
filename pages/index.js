import Image from "next/image";
import MdcCartOutline from '@meronex/icons/mdc/MdcCartOutline';

export default function Home() {
  return (
    <nav className="nav-header">
      <ul className="nav-header__wrapper">
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
          alt="logo" />
      </div>

      <div className="nav-header__search">
        <input 
          className="nav-header__search-input" 
          placeholder="CARI PRODUK" 
          type="text" 
          name="search" />

        <MdcCartOutline 
          className="nav-header__search-cart"
          size={25}/>

        <p className="nav-header__search-cart-count">50</p>

        <div className="nav-header__profile-wrapper">
          <Image 
          className="nav-header__profile-image"
          src="https://lh5.googleusercontent.com/-u8Q4QSO84XQ/AAAAAAAAAAI/AAAAAAAAAAc/OOSySPGRvj8/photo.jpg"
          width={100}
          height={100}
          alt="logo" />
        </div>
      </div>
    </nav>
  )
}
