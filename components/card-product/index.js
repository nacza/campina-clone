import { BsCartPlus } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";

function CardProduct({ images, name, price }) {
  return (
    <div className="group">
      <div className="bg-gray-200 relative aspect-square overflow-hidden rounded-t-lg cursor-pointer z-10 no-select">
        <img
          className="absolute object-cover w-full transition-transform hover:scale-[1.05] no-select"
          src={images}
          alt={name}
        />
      </div>
      <div className="py-3 px-3 bg-white shadow-lg overflow-hidden rounded-b-lg">
        <div className="relative z-10 cursor-pointer text-slate-600 hover:text-blue-600">
          <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap no-select">
            {name}
          </p>
          <p className="text-sm md:text-md lg:text-base text-ellipsis overflow-hidden w-full whitespace-nowrap no-select">
            Rp. {price}
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
  );
}

export default CardProduct;
