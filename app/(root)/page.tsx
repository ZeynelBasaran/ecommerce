
import ProductCard from "@/components/shared/product/productCard";
import {  Product } from "@/lib/productType";
import { getData } from "@/service/service";



const Home = async () => {
  const data = await getData();

  return (
    <>
      <main className="flex flex-wrap justify-between gap-4 my-4">
        {data.products.map((item: Product, i: number) => (
          <ProductCard item={item} key={`${item.title}1${i}`} />
        ))}
      </main>
    </>
  );
};

export default Home;
