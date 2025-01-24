import { SERVER_URL } from "@/lib/contants";
import ProductCard from "@/components/shared/product/productCard";
import { ApiResponse, Product } from "@/lib/productType";

const getData = async (): Promise<ApiResponse> => {
  const res = await fetch(`${SERVER_URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Home = async () => {
  const data = await getData();

  return (
    <>
      <div className="grid grid-col-3">
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {data.products.map((item: Product) => (
                <ProductCard item={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
