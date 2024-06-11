import { motion } from "framer-motion";
import Image from "next/image";

import { useDesktopAnimation } from "@/animations/desktop-animation";
import HomeComponent from "@/components/home";
import BackgroundSlider from "@/components/home/background-slider";

export default function Index() {
  const { state } = useDesktopAnimation();

  return (
    <div className="w-full">
      <div
        className={`hidden flex-col md:flex ${state.currentImage === state.images.length - 1 ? "top-0" : "top-[80px]"} relative top-[80px] mx-auto h-full`}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {!state.animationFinished && (
            <Image
              src={state.images[state.currentImage]}
              alt="Image"
              width={400}
              height={400}
              className="mx-auto rounded"
            />
          )}
        </motion.div>
        {state.showLastPart && (
          <BackgroundSlider isVisible={!state.animationFinished} />
        )}
        {state.animationFinished && <HomeComponent />}
      </div>
    </div>
  );
}
