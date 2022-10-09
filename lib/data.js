import { hygraphDataHome } from "./hygraph/hygraph-data";
import { hygraphDummyDataHome } from "./hygraph/hygraph-dummy-data";

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
