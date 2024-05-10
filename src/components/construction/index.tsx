import React, { SetStateAction, Dispatch } from "react";
import { Close } from '@mui/icons-material';
import Image from "next/image";
import { Images } from "@/common/images";
import { useAnimationContext } from "@/context/animation-context";
import { motion } from "framer-motion";
import { PoshLogo } from "@assets/utils/posh";

interface ConstructionProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const Construction: React.FC<ConstructionProps> = ({ isVisible, setIsVisible }: ConstructionProps) => {
  const { animationSeen, markAnimationSeen } = useAnimationContext();
  if (animationSeen) {
    return null;
  }
  return (
    <div className="w-full h-full">
      <div className="md:flex hidden fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-25 backdrop-filter backdrop-blur-lg">
        <div className="overflow-hidden md:h-[450px] md:w-1/3 rounded-2xl bg-white flex flex-col justify-around items-center relative">
          <div className="w-full flex flex-col gap-3 items-center justify-start">
            <div className="self-end p-2 hover:cursor-pointer" onClick={markAnimationSeen}><Close /></div>
            <p className="text-redHome font-neueRegular text-[60px] z-50">Psst...</p>
            <p className="text-footer text-m text-center mx-2">si tu veux vraiment vraiment voir ce site, sois<br></br> indulgent.e : il est encore en construction !</p>
          </div>
          <Image
            src={Images.inProgress}
            className="md:w-full md:h-full object-cover rounded-2xl"
            alt="inprogress"
          />
          <motion.div initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 }}
            className="absolute bottom-0 z-10">
            <PoshLogo />
          </motion.div>
        </div>
      </div>
      <div className="flex md:hidden fixed inset-0 justify-center items-center z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="overflow-hidden md:h-[450px] md:w-1/3 rounded-2xl bg-white flex flex-col justify-around items-center relative">
          <div className="w-full flex flex-col gap-3 items-center justify-start">
            <div className="self-end p-2 hover:cursor-pointer" onClick={markAnimationSeen}><Close /></div>
            <p className="text-redHome font-neueRegular text-[60px] z-50">Psst...</p>
            <p className="text-footer text-m text-center mx-2">si tu veux vraiment vraiment voir ce site, sois<br></br> indulgent.e : il est encore en construction !</p>

          </div>
          <div>
            <p>Bien noté</p>
          </div>
          <Image
            src={Images.inProgress}
            className="w-full md:h-full object-cover rounded-2xl"
            alt="inprogress"
          />
          <motion.div initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 }}
            className="absolute bottom-0 z-10">
            <Image src={Images.posh} alt="victoria beckam" className="md:h-[200px] w-full h-[150px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
