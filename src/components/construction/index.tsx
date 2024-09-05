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
        <div className="relative flex flex-col items-center justify-around overflow-hidden rounded-2xl bg-white md:h-[450px] md:w-1/3">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <div
              className="self-end p-2 hover:cursor-pointer"
              onClick={markAnimationSeen}
            >
              <Close />
            </div>
            <p className="z-50 text-[60px]">Psst...</p>
            <p className="mx-2 text-center text-sm">
              si tu veux vraiment vraiment voir ce site, sois<br></br>
              indulgent.e : il est encore en construction !
            </p>
          </div>
          <Image
            src={Images.inProgress}
            className="rounded-2xl object-cover md:size-full"
            alt="inprogress"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 150,
            }}
            className="absolute bottom-0 z-10"
          >
            <PoshLogo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
