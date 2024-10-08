import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Images } from "@/common/images";

interface CookiesProps {
  setIsOpen: (value: boolean) => void;
}
export const Cookies: React.FC<CookiesProps> = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="fixed	bottom-0 z-[999] min-h-[300px] w-1/4 flex-col rounded-t-3xl md:flex">
      <div className="my-16 ml-10 flex flex-col items-start">
        <p className="text-[50px] leading-[90px]">
          Chauds les chookies, chauds !
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non gravida amet tellus sed
          sem mauris in at quam.
        </p>
      </div>
      <div className="flex items-center justify-start">
        <div
          className="mx-10 rounded-3xl border border-black px-10 py-2 text-customBlack transition  hover:cursor-pointer hover:text-white"
          onClick={handleClick}
        >
          <p className="text-center text-[12px] font-bold uppercase">
            Accepter
          </p>
        </div>
        <div
          className="mx-10 rounded-3xl border border-black px-10 py-2 text-customBlack transition  hover:cursor-pointer hover:text-white"
          onClick={handleClick}
        >
          <p className="text-[12px] font-bold uppercase">Refuser</p>
        </div>
        <Link
          target={"_blank"}
          href={
            "https://meaningfuleats.com/the-best-gluten-free-chocolate-chip-cookies/"
          }
          className="mx-10 rounded-3xl border border-black px-10 py-2 text-customBlack transition  hover:cursor-pointer hover:text-white"
        >
          <p className="text-[12px] font-bold uppercase">Option sans gluten</p>
        </Link>
      </div>
      <Image
        src={Images.cookies}
        alt="cookie with arms"
        className="absolute bottom-5 right-0 w-fit"
      />
    </div>
  );
};
