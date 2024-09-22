import React from "react";
import Header from "@/app/components/Header";
import BasicDetails from "@/app/components/BasicDetails";

const page = () => {
  return (
    <main>
      <Header name="Product details" />
      <BasicDetails />
    </main>
  );
};

export default page;
