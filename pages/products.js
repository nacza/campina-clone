import CardProduct from "@/components/card-product";
import Template from "@/components/template";
import { getDataProducts } from "@/lib/data";

export async function getStaticProps() {
  const { listProducts } = await getDataProducts();

  return {
    props: {
      listProducts,
    },
  };
}

function Products({ listProducts }) {
  return (
    <Template>
      <div className="flex flex-row w-full">
        {/* Filter */}
        <div className="flex-1 pr-5 text-slate-400">
          <h5 className="font-bold text-slate-600">Filter</h5>
          <div className="shadow-filter rounded-lg overflow-hidden mt-2">
            <h5 className="font-bold pt-4 pr-2 pl-3 text-slate-600">
              Kategori
            </h5>
            <div>
              <ul className="pt-2 pr-2 pl-3 pb-2">
                <li className="pb-3 hover:cursor-pointer focus:cursor-pointer hover:text-slate-600">
                  Semua Kategori
                </li>
                <li className="pb-3 hover:cursor-pointer focus:cursor-pointer hover:text-slate-600">
                  Ice Cream Stick
                </li>
                <li className="pb-3 hover:cursor-pointer focus:cursor-pointer hover:text-slate-600">
                  Ice Cream Cup
                </li>
                <li className="pb-3 hover:cursor-pointer focus:cursor-pointer hover:text-slate-600">
                  Ice Cream Cone
                </li>
                <li className="pb-3 hover:cursor-pointer focus:cursor-pointer hover:text-slate-600">
                  Family Pack
                </li>
              </ul>
            </div>
            <h5 className="border-top-filter font-bold pt-4 pr-2 pl-3 text-slate-600">
              Price
            </h5>
            <div>
              <div className="pt-2 pr-2 pl-3 pb-2">
                <div className="pb-3"></div>
                <div className="pb-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="list-products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {listProducts.map((item, i) => (
            <CardProduct
              key={item.id}
              images={item.images[0].url}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Template>
  );
}

export default Products;
