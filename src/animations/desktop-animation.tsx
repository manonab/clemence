import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";


interface DesktopAnimationState {
  currentImage: number;
  showLastPart: boolean;
  animationFinished: boolean;
  images: StaticImageData[];
}

export const useDesktopAnimation = () => {
  const { setHeaderColor } = useHeaderColor();

  const [state, setState] = useState<DesktopAnimationState>({
    currentImage: 0,
    showLastPart: false,
    animationFinished: false,
    images: [
      Images.eye,
      Images.image1,
      Images.image2,
      Images.image3,
      Images.image5,
      Images.image4,
      Images.image6,
      Images.image7,
      Images.image8,
      Images.image9,
      Images.image10,
      Images.logo
    ]
  });

  const images = [
    Images.eye,
    Images.image1,
    Images.image2,
    Images.image3,
    Images.image5,
    Images.image4,
    Images.image6,
    Images.image7,
    Images.image8,
    Images.image9,
    Images.image10,
    Images.logo
  ];

  const startSlideShow = () => {
    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        currentImage: prev.currentImage < images.length - 1 ? prev.currentImage + 1 : prev.currentImage,
      }));
    }, 150);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);

    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []);

  useEffect(() => {
    if (state.currentImage === images.length - 1) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, showLastPart: true }));
      }, 1500);
      setTimeout(() => {
        setHeaderColor('bg_slider hovered')
      }, 2400);
    }
  }, [state.currentImage, images.length]);

  useEffect(() => {
    if (state.showLastPart) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, animationFinished: true }));
      }, 4000);
    }
  }, [state.showLastPart]);

  return { state, images }
};
