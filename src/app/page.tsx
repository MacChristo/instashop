"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import saleIllustrator from "../public/images/sale-illustration.svg";

import { CiCircleCheck } from "react-icons/ci";
const Welcome = () => {
  const welcomeList = [
    {
      text: "Reach millions of shoppers",
    },
    {
      text: "Easy product listing",
    },
    {
      text: "Secure and fast payments",
    },
    {
      text: "Boost your visibility",
    },
  ];
  return (
    <main className="w-[90%] flex justify-center flex-col items-center py-8 absolute">
      <Image
        aria-hidden
        src={saleIllustrator}
        alt="Sales illustration"
        priority
        className="w-auto h-auto"
      />

      <article className="flex flex-col gap-4 justify-center items-center my-6">
        <div className="flex justify-center flex-col gap-3 items-center w-[80%] text-center">
          <h1 className="text-4xl text-[#1a1a1a] font-[600]">Welcome</h1>
          <p className="text-base text-[#1a1a1a]">
            The safest platform to shop from social media vendors
          </p>
        </div>
        <div className="flex flex-col gap-2 px-3 py-4 my-4 rounded-xl bg-[#ffeafa] border border-solid border-[#8a226f] w-[90%]">
          {welcomeList.map((item) => {
            return (
              <div
                key={item.text}
                className="flex flex-row gap-1 justify-start items-center"
              >
                <CiCircleCheck className="w-[23px] h-[23px] text-[#8a226f]" />
                <p className="text-[#1a1a1a]">{item.text}</p>
              </div>
            );
          })}
        </div>
        <Button
          text="Get Started"
          nextPage="/pages/register"
          classNames="flex self-center w-[100%] bg-[#8a226f] text-[#ffffff] justify-center p-3 rounded-[100px] absolute bottom-[0]"
        />
      </article>
    </main>
  );
};

export default Welcome;

const Button = ({
  text,
  nextPage,
  classNames,
}: {
  text: string;
  nextPage: string;
  classNames: string;
}) => {
  const router = useRouter();
  return (
    <button
      type="submit"
      className={`${classNames}`}
      onClick={() => {
        router.push(nextPage);
      }}
    >
      {text}
    </button>
  );
};

export { Button };
