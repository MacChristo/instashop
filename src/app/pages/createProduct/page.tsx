"use client";
import React from "react";
import Header from "@/app/components/Header";
import BasicDetails from "@/app/components/BasicDetails";
import SectionHeaders from "@/app/components/SectionHeaders";
import { useRouter } from "next/navigation";
import { BiImageAdd } from "react-icons/bi";

const Product = () => {
  return (
    <main className="flex flex-col w-[100%] pb-8">
      <Header name="Create a product" />
      <hr />
      <BasicDetails />
      <hr />
      <ProductImage />
      <hr />
      <InventoryVariations />
      <hr />
      <Shipping />
      <hr />
      <ProductButtons />
    </main>
  );
};

const ProductButtons = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row w-[100%] justify-between items-center gap-3 mt-6 px-4">
      <button
        onClick={() => {
          router.push("/pages/register");
        }}
        type="button"
        className="w-1/2 p-3 text-[#8a226f] rounded-full border border-solid border-[#8a226f] bg-transparent"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          router.push("/pages/productDetails");
        }}
        type="button"
        className="w-1/2 p-3 text-[#fff] rounded-full border-0 border-solid border-[#8a226f] bg-[#8a226f]"
      >
        Save
      </button>
    </div>
  );
};

const ProductImage = () => {
  return (
    <div className="flex flex-col w-[100%] p-4 gap-[15px]">
      <SectionHeaders name="Product image" />
      <button
        type="button"
        className="flex w-[100%] bg-[#f7f7f7] rounded-full px-4 py-3 justify-center"
      >
        <div className="flex flex-row gap-3 justify-center items-center">
          <p className="text-[#8a226f]">Add image</p>
          <BiImageAdd className="text-[#8a226f]" />
        </div>
      </button>
    </div>
  );
};

const InventoryVariations = () => {
  return (
    <div className="flex flex-col w-[100%] p-4 gap-[15px]">
      <SectionHeaders name="Inventory variations" />
      <div className="flex flex-row justify-start gap-2">
        <input
          type="checkbox"
          name="stocks"
          id="stocks"
          placeholder="stocks"
          className="w-[40px]"
        />
        <p className="text-[0.95rem] leading-5 text-[#1a1a1a]">
          This product is variable, has different colors, sizes, weight,
          materials, etc.
        </p>
      </div>
    </div>
  );
};

const Shipping = () => {
  return (
    <div className="flex flex-col w-[100%] p-4 gap-[15px]">
      <SectionHeaders name="Shipping" />
      <div className="flex flex-col justify-start w-[100%] gap-4">
        <div className="flex flex-row justify-between w-[100%] items-center">
          <p className="text-[0.95rem] text-[#1a1a1a]">Self shipping</p>
          <input
            type="checkbox"
            name="shipping"
            id="self-shipping"
            placeholder="shipping"
            className="w-[30px]"
          />
        </div>
        <div className="flex flex-row justify-between w-[100%] items-center">
          <p className="text-[0.95rem] text-[#1a1a1a]">InstaShop shipping</p>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            placeholder="shipping"
            className="w-[30px]"
          />
        </div>
        <input
          type="text"
          name="inventory"
          id="inventory"
          placeholder="Inventory stocks"
          className="w-[100%] rounded-[10px] px-4 text-[#1a1a1a] py-3 border border-[#000] border-solid focus-within:outline-none"
        />
      </div>
    </div>
  );
};
export default Product;
