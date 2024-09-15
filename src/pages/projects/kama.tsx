import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

import RouageAnimation from "@/animations/rouage";
import Carousel from "@/components/mosaic/carousel";
import { BigArrow } from "@assets/big-arrow";

const Kama: NextPage = () => {
  const router = useRouter();
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  return (
    <div className="flex-col overflow-hidden flex">
      <div className="mb-12 h-screen flex-col pt-36">
        <p className="mb-[100px] mt-[180px] text-center font-neueRegular text-capicheMobile uppercase text-redHome md:text-title">
          MOSAIC
        </p>
        <Link
          to="mosaic_desktop_target"
          className="hover:cursor-pointer"
          smooth={true}
        >
          <motion.div
            className="mb-[150px] flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.6 }}
          >
            <BigArrow />
            <p className="font-footer text-[14px] font-bold uppercase leading-[20px] hover:cursor-pointer ">
              DISCOVER
            </p>
          </motion.div>
        </Link>
      </div>
      <div className="w-full">
        <RouageAnimation
          isMosaic={true}
          start={-800}
          end={100}
          otherStart={100}
          otherEnd={-800}
        />
      </div>
      <div className="mt-32 bg-yellowHome py-10">
        <div className="absolute -left-16 -mt-36 size-[189px]  rounded-full border-2 border-mosaic" />
        <div className="ml-32 flex flex-col items-start">
          <p className="mt-20 font-neueCondensed text-[62px] leading-[100%] text-orange">
            “Mosaic encourage, éduque<br></br> et inspire les jeunes<br></br>{" "}
            personnes LGBTQ+ et celleux<br></br> à leur côtés”.
          </p>
          <div className="mx-auto flex w-full items-center justify-start pb-28">
            <div className="my-20 flex w-1/2 flex-col gap-6"></div>
            <div className="ml-36">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kama;
