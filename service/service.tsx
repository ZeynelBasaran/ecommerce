"use server"


import { SERVER_URL } from "@/lib/contants";
import { ApiResponse } from "@/lib/productType";


//Get All Data
export const getData = async (): Promise<ApiResponse> => {
  const res = await fetch(`${SERVER_URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

//Get All Data
export const getProduct = async (id:string): Promise<ApiResponse> => {
  const res = await fetch(`${SERVER_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

