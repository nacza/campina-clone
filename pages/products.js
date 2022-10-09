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
    </Template>
  );
}

export default Products;
