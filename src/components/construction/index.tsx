import React, { SetStateAction, Dispatch } from "react";
import { Close } from '@mui/icons-material';
import Image from "next/image";
import { Images } from "@/common/images";
interface ConstructionProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const Construction: React.FC<ConstructionProps> = ({ isVisible, setIsVisible }: ConstructionProps) => {
  return (
    <>
      {isVisible && (
        <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className="rounded-[20px] mx-auto container w-[875px] h-[559px] z-10">
          <p
            className="text-right hover:cursor-pointer p-3"
          >
            <Close sx={{ width: "24px", height: "24px" }} onClick={() => setIsVisible(false)} />
          </p>
          <div className="flex bg-mainColor justify-around flex-col gap-2 items-center">
            <p className="text-[80px] text-redHome font-neueSemiBold leading-[70px]">Hello you,</p>
            <p className="w-[526px] text-xl text-center leading-6">if you really really want to see this webiste, please keep in mind that it’s still a work in progress !</p>
            <Image
              src={Images.becks}
              alt="victoria beckham image"
              className="w-full h-[372px]" />
          </div>
        </div>
      )}
    </>
  );
};
