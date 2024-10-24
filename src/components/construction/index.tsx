import { Close } from "@mui/icons-material";
import React from "react";
import { useAnimationContext } from "@/context/animation-context";
import { PoshLogo } from "@assets/utils/posh";
import useResponsive from "@/hooks/useResponsive";

export const Construction: React.FC = () => {
  const { animationSeen, markAnimationSeen } = useAnimationContext();
  const customBreakpoints = { mobile: 600, tablet: 900, desktop: 1200 };
  const screenSize = useResponsive(customBreakpoints);

  if (animationSeen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-25 backdrop-blur-lg md:flex ">
      <div className="justify-between w-full flex flex-col items-center overflow-hidden bg-mainColor md:h-[450px] md:w-2/4">
        <div
          className="self-end hover:cursor-pointer m-2.5"
          onClick={markAnimationSeen}
        >
          <Close />
        </div>
        <p className="z-50 md:text-[80px] font-marsdenHeavy text-customRed text-[60px]">
          Psst...
        </p>
        <p className="mx-2 text-center md:text-[25px] font-helveticaNeue text-customBlack tracking-[-2%]">
          si tu veux vraiment vraiment voir ce site, sois<br></br>
          indulgent.e : il est encore en construction !
        </p>
        <PoshLogo
          width={`${screenSize === "mobile" ? "169" : "269"}`}
          height={`${screenSize === "mobile" ? "199" : "299"}`}
        />
      </div>
    </div>
  );
};
