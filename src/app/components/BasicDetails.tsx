"use client";
import { useState } from "react";
import SectionHeaders from "./SectionHeaders";
const BasicDetails = () => {
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

export default BasicDetails;
