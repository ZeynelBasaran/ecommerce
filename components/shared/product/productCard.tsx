import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Product } from "@/lib/productType";

const ProductCard = ({ item }: { item: Product }) => {


  const value = item.price.toFixed(2);
  const [intValue, floatValue] = value.split(".");

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-40 w-full flex items-center justify-center">
        <a href="#">
          {
            <Image
              src={item.images[0]}
              alt={item.title}
              width={100}
              height={100}
              layout="fixed"
              unoptimized
              //priority={true}
            />
          }
        </a>
      </div>
      <div className="pt-6">
        <div className="h-10">
          <a
            href="#"
            className="hover:no-underline text-lg font-semibold leading-tight text-gray-900 dark:text-white"
          >
            {item.title}
          </a>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <Rating
            size="small"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
          />
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {item.rating}
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            ({item.reviews.length})
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            <span className="text-xs align-super">$</span>
            {intValue}
            <span className="text-xs align-super">.{floatValue}</span>
          </p>

          <button
            type="button"
            className="inline-flex dark:text-white  text-gray-500 border-solid border-2 border-gray-500 items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  hover:bg-primary-800 focus:outline-none hover:ring-4  hover:ring-primary-300 hover:text-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

/*
 
*/
