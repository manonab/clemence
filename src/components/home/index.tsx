import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Description from "./description";
import { Construction } from "../construction";
import { BigArrow } from "@assets/big-arrow";

const timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const HomeComponent: React.FC = () => {
  return (
    <ParallaxProvider>
      <Construction />
      <Parallax
        speed={-15}
        className="mb-20 w-full flex-col items-center justify-around gap-4 md:flex"
      >
        <motion.div
          transition={{ ...timing, delay: 2 }}
          className="flex h-screen flex-col items-center justify-evenly"
        >
          <p className="text-center font-marsdenHeavy text-welcome text-customRed">
            Consultante pour <br></br>
            esprits audacieux
          </p>
          <Link
            to="scroll_target"
            className="hover:cursor-pointer"
            smooth={true}
          >
            <div className="mb-20 flex flex-col items-center gap-3">
              <BigArrow />
              <p className="font-bold uppercase leading-[20px]">
                SCROLL & ROLL
              </p>
            </div>
          </Link>
        </motion.div>
      </Parallax>
      <Parallax speed={-10}>
        <Description id="scroll_target" />
      </Parallax>
    </ParallaxProvider>
  );
};

export default HomeComponent;
