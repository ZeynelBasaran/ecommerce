"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Productİmages = ({ image }: { image: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  console.log(image);
  return (
    <div className="space-y-4">
      <Image
        src={image[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {image.map((image: string, i: number) => (
          <div
            className={cn("border mr-2 hover:border-orange-600 cursor-pointer",currentImage === i && "border-orange-500")}
            key={`${i}${image}`}
            onClick={() => {
              setCurrentImage(i);
            }}
          >
            <Image src={image} alt="product image" width={100} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productİmages;

/*

*/
