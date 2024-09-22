"use client";
import { useRouter } from "next/router";
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

export default Button;
