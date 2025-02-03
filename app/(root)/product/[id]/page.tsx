import { getProduct } from "@/service/service";
import { notFound } from "next/navigation";
import Comments from "@/components/shared/product/comments";
import { Review } from "@/lib/productType";
import Productİmages from "@/components/shared/product/productİmages";

const ProductDetails = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const product = await getProduct(id);

  const { title, price, rating, reviews, description, images } = product;

  if (!product) notFound();

  console.log(images);

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased ">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto mb-4">
            <Productİmages image={images} />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${price}
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1"></div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  ({rating})
                </p>
                <a
                  href="#comm"
                  className="text-sm font-medium leading-none text-gray-900  hover:underline dark:text-white"
                >
                  {reviews?.length} Yorum
                </a>
              </div>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                title=""
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
                Sepete Ekle
              </a>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div
        id="comm"
        className="max-w-screen-xl px-4 mx-auto 2xl:px-0  bg-white antialiased dark:bg-gray-900 border-2"
      >
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">
          <div className="flex items-center gap-2 my-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Yorumlar
            </h2>

            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <div className="flex items-center gap-0.5"></div>
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                ({rating?.toFixed(1)})
              </p>
              <a
                href="#"
                className="text-sm font-medium leading-none text-gray-900  dark:text-white"
              >
                {reviews?.length} Yorum
              </a>
            </div>
          </div>

          <div>
            {reviews?.map((items: Review, i: number) => {
              return <Comments key={`${i}${items.comment}`} items={items} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

/*
 <div
             
              className="shrink-0 max-w-md lg:max-w-lg mx-auto"
            >
              <img className="w-full dark:hidden" src={item} alt="" />
              <img className="w-full hidden dark:block" src={item} alt="" />
            </div>
*/
