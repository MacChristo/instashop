"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack, IoIosCheckmark } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
const Header = ({ name }: { name: string }) => {
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

export default Header;
