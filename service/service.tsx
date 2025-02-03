"use server"


import { SERVER_URL } from "@/lib/contants";
import { ApiResponse,Product } from "@/lib/productType";


//Get All Data
export const getData = async (): Promise<ApiResponse> => {
  const res = await fetch(`${SERVER_URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

//Get All Data
export const getProduct = async (productId:string): Promise<Product> => {
  const res = await fetch(`${SERVER_URL}/${productId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Product = await res.json();
  return data;
};

