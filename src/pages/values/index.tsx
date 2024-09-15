import { ValueComponent } from "@/components/values";
import { NextPage } from "next";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Values: NextPage = () => {
  return (
    <ParallaxProvider>
      <ValueComponent />
    </ParallaxProvider>
  );
};
export default Values;
