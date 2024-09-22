"use client";
import { IoIosArrowDown } from "react-icons/io";
const SectionHeaders = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-row w-[100%] justify-between    items-center">
      <h2 className="text-[#1a1a1a]">{name}</h2>
      <IoIosArrowDown size={20} className="text-[#1a1a1a]" />
    </div>
  );
};

export default SectionHeaders;
