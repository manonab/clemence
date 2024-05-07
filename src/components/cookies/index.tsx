import { Images } from "@/common/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CookiesProps {
  setIsOpen: (value: boolean) => void;
}
export const Cookies: React.FC<CookiesProps> = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(true)

  }

  return (
    <div className="bg-saumon rounded-t-3xl	fixed bottom-0 hidden md:flex flex-col min-h-[300px] w-1/4 z-[999]">
      <div className="flex flex-col items-start my-16 ml-10">
        <p className="text-orange text-[50px] font-neueRegular leading-[90px]">Chauds les chookies, chauds !</p>
        <p className="font-footer">Lorem ipsum dolor sit amet consectetur. Non gravida amet tellus sed sem mauris in at quam.</p>
      </div>
      <div className="flex items-center justify-start">
        <div
          className="hover:cursor-pointer hover:bg-grayBlack border-black transition transform hover:text-white text-grayBlack border rounded-3xl  px-10 py-2 mx-10"
          onClick={handleClick}>
          <p className="font-footer font-bold text-[12px] text-center uppercase">Accepter</p>
        </div>
        <div
          className="hover:cursor-pointer hover:bg-grayBlack border-black transition transform hover:text-white text-grayBlack border rounded-3xl  px-10 py-2 mx-10"
          onClick={handleClick}>
          <p className="font-footer font-bold text-[12px] text-center uppercase">Refuser</p>
        </div>
        <Link
          target={"_blank"}
          href={"https://meaningfuleats.com/the-best-gluten-free-chocolate-chip-cookies/"}
          className="hover:cursor-pointer hover:bg-grayBlack border-black transition transform hover:text-white text-grayBlack border rounded-3xl  px-10 py-2 mx-10"
        >
          <p className="font-footer font-bold text-[12px] text-center uppercase">Option sans gluten</p>
        </Link>
      </div>
      <Image src={Images.cookies} alt="cookie with arms" className="w-fit absolute right-0 bottom-5" />
    </div>
  )
}