import { hygraphDataHome, hygraphDataProducts } from "./hygraph/hygraph-data";
import {
  hygraphDummyDataHome,
  hygraphDummyDataProducts,
} from "./hygraph/hygraph-dummy-data";

export async function getDataHome() {
  const {
    listProductsBestSeller,
    listProductsFlashSale,
    listCategories,
    listBanners,
  } = process.env.FLAG_DEV ? hygraphDummyDataHome() : await hygraphDataHome();

  return {
    listProductsFlashSale,
    listProductsBestSeller,
    listCategories,
    listBanners,
  };
}

export async function getDataProducts() {
  const { listProducts } = process.env.FLAG_DEV
    ? hygraphDummyDataProducts()
    : await hygraphDataProducts();

  return { listProducts };
}
