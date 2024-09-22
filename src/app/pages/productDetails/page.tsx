import React from "react";
import { Header } from "../createProduct/page";
import { BasicDetails } from "../createProduct/page";

const page = () => {
  return (
    <main>
      <Header name="Product details" />
      <BasicDetails />
    </main>
  );
};

export default page;
