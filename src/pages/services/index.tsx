import { ServiceComponent } from "@/components/services";
import { NextPage } from "next";
import { ParallaxProvider } from "react-scroll-parallax";
const Services: NextPage = () => {
  return (
    <ParallaxProvider>
      <ServiceComponent />
    </ParallaxProvider>
  );
};
export default Services;
