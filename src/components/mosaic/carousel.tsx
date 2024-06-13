import { motion } from "framer-motion";
import React, { useState } from "react";

const slides = [
  {
    id: 1,
    text: "+16%",
    subText: "d’augmentation de l’audience globale en ligne.",
    shape: "rounded-full bg-[#F8FAD2]",
    backgroundImage: "/static/assets/mosaic/shape-1.png",
  },
  {
    id: 2,
    text: "20",
    subText: "workshops organisés pour les jeunes de l’association.",
    shape: "rounded-full bg-[#F8FAD2]",
    backgroundImage: "/static/assets/mosaic/shape-2.png",
  },
  {
    id: 3,
    text: "1",
    subText: "nouveau concours littéraire pour la communauté Queer.",
    shape: "rounded-full bg-[#F8FAD2]",
    backgroundImage: "/static/assets/mosaic/shape-3.png",
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative mb-6 flex items-center justify-center">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute flex size-[410px] flex-col items-center justify-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className={` flex size-[350px]  flex-col items-center justify-center px-10 ${
                index === currentSlide ? slide.shape : "bg-gray-200"
              }`}
            >
              <span className="text-6xl font-bold text-blue-500">
                {slide.text}
              </span>
              <p className="mt-4 text-center text-lg font-semibold text-blue-500">
                {slide.subText}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`z-50 mt-20 size-2.5 rounded-full ${
              index === currentSlide
                ? "bg-[#4E4D4D]"
                : "border border-[#4E4D4D]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
