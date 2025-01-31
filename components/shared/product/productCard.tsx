import Image from "next/image";
import { Product } from "@/lib/productType";
import Link from "next/link";

const ProductCard = ({ item }: { item: Product }) => {
  const value = item.price.toFixed(2);
  const [intValue, floatValue] = value.split(".");

  return (
    <Link href={`/product/${item.id}`}>
      <div className=" w-56 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="h-40 w-full flex items-center justify-center">
          {
            <Image
              src={item.images[0]}
              alt={item.title}
              width={100}
              height={100}
              unoptimized
            />
          }
        </div>
        <div className="pt-6">
          <div className="h-10 hover:no-underline text-lg font-semibold leading-tight text-gray-900 dark:text-white line-clamp-2">
            {item.title}
          </div>

          <div className="mt-2 flex items-center gap-2">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {item.rating}
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              ({item.reviews.length})
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between gap-4">
            <p className="text-xl font-extrabold leading-tight text-gray-900 dark:text-white">
              <span className="text-xs align-super">$</span>
              {intValue}
              <span className="text-xs align-super">.{floatValue}</span>
            </p>

            <button
              type="button"
              className="inline-flex dark:text-white  text-gray-500 border-solid border-2 border-gray-500 items-center rounded-lg bg-primary-700 px-2 py-2.5 text-sm font-small  hover:bg-primary-800 focus:outline-none hover:ring-4  hover:ring-primary-300 hover:text-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

/*
   <Rating
            size="small"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
          />
*/
