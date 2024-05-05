import React, { useState } from "react";
import { motion } from "framer-motion";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/router";
import Image from "next/image";
import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";

export const Menu: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("/home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { headerColor } = useHeaderColor();

  const pathTextMapping = [
    { path: "/home", name: "accueil" },
    { path: "/values", name: "mes valeurs" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" }
  ];

  const pathTextMappingMobile = [
    { path: "/values", name: "à propos" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" },
    { path: "/contact", name: "contact" }
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    router.push(`${route}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={`${headerColor} hidden md:flex mx-auto justify-between items-center py-[30px] px-[40px] flex-row`}>
        <div onClick={() => router.push('/home')} className="hover:cursor-pointer h-[70px]">
          <Image src={Images.newlogo} alt='logo' width={50} height={50} />
        </div>
        <div
          className="flex justify-center items-center gap-9">
          {pathTextMapping.map((route) => (
            <div
              className="w-auto"
              key={route.path}
              onClick={() => handleChange(route.path)}
            >
              <p className={`${selected === route.path ? "text-redHome font-bold" : " text-grayBlack"} hover:text-redHome hover:font-bold leading-4 hover:cursor-pointer text-[18px] font-footer text-black`}>
                {route.name}
              </p>
            </div>
          ))}
        </div>
        <div
          onClick={() => handleChange("/contact")}
          className="hover:cursor-pointer flex flex-col items-center justify-around">
          <span className="flex items-center gap-3">
            <p className={`${selected === "/contact" && "text-redHome font-bold"} text-[15px] hover:cursor-pointer font-clashSemibold uppercase`}>Rencontrons nous</p>
          </span>
          <div className={`${selected === "/contact" ? "border-b-redHome font-bold" : "border-b-black"} border-b-black border-b-2 w-[165px] h-10 absolute transition-transform duration-300 transform origin-left hover:scale-x-0`} />
        </div>
      </motion.div>
      <div className="md:hidden">
        <div
          className={`${headerColor} flex justify-between items-center py-[32px] px-[30px] mt-2`}
        >
          <div onClick={() => router.push("/home")} className="hover:cursor-pointer h-[80px]">
            <Image src={Images.newlogo} alt="logo" width={60} height={50} />
          </div>
          <div className="md:hidden flex items-center mb-6">
            <button onClick={toggleMenu} className="text-grayBlack focus:outline-none flex gap-1">
              <motion.div
                initial={{ y: 10, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 }}
                className="bg-orange h-2.5 w-2.5 rounded-full"
              ></motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 150 }}
                className="bg-redHome h-2.5 w-2.5 rounded-full"
              ></motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8, type: "spring", stiffness: 150 }}
                className="bg-pinkVive h-2.5 w-2.5 rounded-full"
              ></motion.div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-yellowHome z-[999] flex flex-col gap-12 justify-center items-center fixed top-0 left-0 w-full h-full w-full h-full z-50 overflow-y-auto"
          >
            <div className="absolute top-5 right-5" onClick={toggleMenu}>
              <Close className="w-8 h-8" />
            </div>
            <div className="flex items-center flex-col gap-6 w-full">
              {pathTextMappingMobile.map((route) => (
                <p
                  key={route.path}
                  onClick={() => {
                    handleChange(route.path);
                    toggleMenu();
                  }}
                  className="text-orange uppercase hover:cursor-pointer text-titleMobile font-neueRegular"
                >
                  {route.name}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
