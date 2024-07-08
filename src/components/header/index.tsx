import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Images } from "@/common/images";
import { useHeaderColor } from "@/context";
import { Logo } from "@assets/utils/logo-clemence";

export const Menu: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { headerColor } = useHeaderColor();

  const pathTextMapping = [
    { path: "/home", name: "accueil" },
    { path: "/values", name: "à propos" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" },
  ];

  const pathTextMappingMobile = [
    { path: "/values", name: "à propos" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" },
    { path: "/contact", name: "contact" },
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    if (route === "/home") {
      router.push(`/`);
    } else {
      router.push(`${route}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (router.pathname) {
      if (router.pathname === "/") {
        setSelected("/home");
      } else {
        setSelected(router.pathname);
      }
    }
  }, [router, setSelected]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -20 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`${headerColor} fixed top-0 mx-auto hidden w-full flex-row items-center justify-between px-[40px] py-[30px] md:flex`}
      >
        <div
          onClick={() => router.push("/")}
          className="h-[70px] hover:cursor-pointer"
        >
          <Logo width={"50"} height={"40"} />
        </div>
        <div className="flex items-center justify-center gap-9">
          {pathTextMapping.map((route) => (
            <div
              className="w-auto"
              key={route.path}
              onClick={() => handleChange(route.path)}
            >
              <p
                className={`${selected === route.path ? "font-bold text-redHome" : " text-grayBlack"} font-footer text-[18px] leading-4 text-black hover:cursor-pointer hover:font-bold hover:text-redHome`}
              >
                {route.name}
              </p>
            </div>
          ))}
        </div>
        <div
          onClick={() => handleChange("/contact")}
          className="flex flex-col items-center justify-around hover:cursor-pointer"
        >
          <span className="flex items-center gap-3">
            <p
              className={`${selected === "/contact" && "font-bold"} font-clashSemibold text-[15px]  uppercase text-redHome hover:cursor-pointer hover:font-clashBold`}
            >
              Rencontrons nous
            </p>
          </span>
          <div className="absolute h-10 w-[165px] origin-left border-b-2 border-b-redHome transition-transform duration-300 hover:scale-x-0" />
        </div>
      </motion.div>
      <motion.button
        onClick={() => setIsScrolled(false)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed right-10 top-10 z-50 gap-1 bg-none text-grayBlack hover:cursor-pointer focus:outline-none md:hidden`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
          className="size-2.5 rounded-full bg-orange"
        ></motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 150,
          }}
          className="size-2.5 rounded-full bg-redHome"
        ></motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            type: "spring",
            stiffness: 150,
          }}
          className="size-2.5 rounded-full bg-pinkVive"
        ></motion.div>
      </motion.button>
      {/* mobile version */}
      <div className="md:hidden">
        <div
          className={`${headerColor} mt-2 flex items-center justify-between px-[30px] py-[32px]`}
        >
          <div
            onClick={() => router.push("/")}
            className="h-[80px] hover:cursor-pointer"
          >
            <Image src={Images.newlogo} alt="logo" width={60} height={50} />
          </div>
          <div className="mb-6 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="flex gap-1 text-grayBlack focus:outline-none"
            >
              <motion.div
                initial={{ y: 10, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 150,
                }}
                className="size-2.5 rounded-full bg-orange"
              ></motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 150,
                }}
                className="size-2.5 rounded-full bg-redHome"
              ></motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 150,
                }}
                className="size-2.5 rounded-full bg-pinkVive"
              ></motion.div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 top-0 z-[999] flex size-full flex-col items-center justify-center gap-12 overflow-y-auto bg-yellowHome"
          >
            <div className="absolute right-5 top-5" onClick={toggleMenu}>
              <Close className="size-8" />
            </div>
            <div className="flex w-full flex-col items-center gap-6">
              {pathTextMappingMobile.map((route) => (
                <p
                  key={route.path}
                  onClick={() => {
                    handleChange(route.path);
                    toggleMenu();
                  }}
                  className="font-neueRegular text-titleMobile uppercase text-orange hover:cursor-pointer"
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
