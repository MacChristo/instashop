"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack, IoIosCheckmark } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
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

export const Header = ({ name }: { name: string }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between items-center p-4 gap-[15px]">
      <div className="flex flex-row justify-between w-[100%] items-center">
        <div className="flex flex-row gap-0 items-center">
          <IoIosArrowRoundBack
            onClick={() => {
              router.push("/pages/createProduct");
            }}
            size={35}
            className="text-[#1a1a1a]"
          />
          <p className="text-[#1a1a1a] font-semibold">{name}</p>
        </div>
        <FiMoreVertical size={30} className="text-[#1a1a1a]" />
      </div>
      <div className="flex flex-row justify-between items-center w-[100%]">
        <div className="flex flex-row items-center gap-1 py-[0.35em] px-2 rounded-full border-[1.5px] border-solid border-[#1a1a1a}">
          <p className="text-[#1a1a1a] text-sm">Draft</p>
          <IoIosCheckmark size={20} className="text-[#1a1a1a]" />
        </div>
        <p className="text-[#8a226f] text-[0.95rem] font-semibold">
          Preview product
        </p>
      </div>
    </div>
  );
};

export const SectionHeaders = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-row w-[100%] justify-between    items-center">
      <h2 className="text-[#1a1a1a]">{name}</h2>
      <IoIosArrowDown size={20} className="text-[#1a1a1a]" />
    </div>
  );
};

export const ProductButtons = () => {
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

export const BasicDetails = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [collection, setCollection] = useState("");
  const [inventory, setInventory] = useState("");

  return (
    <div className="flex flex-col w-[100%] p-4 gap-[15px]">
      <SectionHeaders name="Basic details" />
      <form action="" className="flex flex-col w-[100%] gap-3">
        <input
          onChange={(t) => {
            setProductTitle(t.target.value);
          }}
          value={productTitle}
          type="text"
          name="product-title"
          id="product-title"
          placeholder="Product title"
          className="w-[100%] rounded-[10px] text-[#1a1a1a] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
        />
        <textarea
          onChange={(d) => {
            setProductDescription(d.target.value);
          }}
          value={productDescription}
          name="product-description"
          id="product-description"
          placeholder="Product description"
          className="w-[100%] rounded-[10px] text-[#1a1a1a] px-4 py-3 border border-[#000] border-solid focus-within:outline-none"
        ></textarea>
        <div className="flex flex-row w-[100%] gap-3 justify-between">
          <input
            onChange={(p) => {
              setPrice(p.target.value);
            }}
            value={price}
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            className="w-1/2 rounded-[10px] px-4 text-[#1a1a1a] py-3 border border-[#000] border-solid focus-within:outline-none"
          />
          <input
            onChange={(o) => {
              setOldPrice(o.target.value);
            }}
            value={oldPrice}
            type="text"
            name="old-price"
            id="old-price"
            placeholder="Old price"
            className="w-1/2 rounded-[10px] px-4 text-[#1a1a1a] py-3 border border-[#000] border-solid focus-within:outline-none"
          />
        </div>
        <textarea
          onChange={(c) => {
            setCollection(c.target.value);
          }}
          value={collection}
          name="product-collection"
          id="product-collection"
          placeholder="Product collection"
          className="w-[100%] rounded-[10px] px-4 text-[#1a1a1a] py-3 border border-[#000] border-solid focus-within:outline-none"
        ></textarea>
        <input
          onChange={(i) => {
            setInventory(i.target.value);
          }}
          value={inventory}
          type="text"
          name="inventory-stocks"
          id="inventory-stocks"
          placeholder="Inventory stocks"
          className="w-[100%] rounded-[10px] px-4 text-[#1a1a1a] py-3 border border-[#000] border-solid focus-within:outline-none"
        />
      </form>
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
