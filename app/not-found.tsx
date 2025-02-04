"use client";

import { APP_NAME } from "@/lib/contants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo4 from "../public/logo3.jpg"

const NotFoundPage = () => {
  return (
    
      <section className="bg-white dark:bg-gray-900 h-full w-full">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <div className="flex items-center justify-center mb-10">
            <Image
              src={logo4}
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />

            </div>
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Button
             variant="outline"
              onClick={()=>{window.location.href="/"}}
              className="inline-flex text-gray-500 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Button>
          </div>
        </div>
      </section>
    
  );
};

export default NotFoundPage;
