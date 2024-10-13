import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Images } from "@/common/images";
import { useAnimationContext } from "@/context/animation-context";
import { PoshLogo } from "@assets/utils/posh";

export const Construction: React.FC = () => {
  const { animationSeen, markAnimationSeen } = useAnimationContext();
  if (animationSeen) {
    return null;
  }
  return (
    <div className="size-full">
      <div className="fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-25 backdrop-blur-lg md:flex">
        <div className="justify-between flex flex-col items-center overflow-hidden bg-mainColor md:h-[450px] md:w-2/4">
          <div
            className="self-end hover:cursor-pointer m-2.5"
            onClick={markAnimationSeen}
          >
            <Close />
          </div>
          <p className="z-50 text-[80px] font-marsdenHeavy text-customRed">
            Psst...
          </p>
          <p className="mx-2 text-center text-[25px] font-helveticaNeue text-customBlack tracking-[-2%]">
            si tu veux vraiment vraiment voir ce site, sois<br></br>
            indulgent.e : il est encore en construction !
          </p>

          <PoshLogo />
        </div>
      </div>
    </div>
  );
};
