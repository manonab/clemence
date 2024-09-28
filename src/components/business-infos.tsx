import React from "react";
import { motion } from "framer-motion";
import { BigArrow } from "@assets/big-arrow";
import { Location } from "@assets/location";

interface BusinessInfoProps {
  name: string;
  sector: string;
  location: string;
  customStyle?: string;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  name,
  sector,
  location,
  customStyle,
}) => {
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <div className="h-screen w-screen flex my-32">
      <div className="flex-col flex flex-grow  items-start w-1/3 justify-center">
        <div
          className={`text-[300px] font-marsdenHeavy leading-[90%] text-left ml-16 text-customRed uppercase ${customStyle}`}
        >
          {name.split("-").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        <motion.div
          className="my-12 flex flex-col items-center gap-3 mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 0.6 }}
        >
          <BigArrow />
          <p className="font-footer font-bold text-customBlack uppercase leading-[20px]">
            DISCOVER
          </p>
        </motion.div>
      </div>

      <div className="w-full px-8 py-8 flex justify-center items-center">
        <div className="text-black ml-28">
          <div className="text-left mb-6">
            <span className="text-5xl font-helveticaCondensed">Secteur</span>
            <span className="mt-2 block max-w-[150px]">{sector}</span>
          </div>
          <div>
            <span className="text-5xl font-helveticaCondensed">
              Localisation
            </span>
            <div className="flex items-center justify-start mt-2">
              <Location />
              <span className="mx-2">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
