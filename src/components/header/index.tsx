import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useHeaderColor } from "@/context";
import { Logo } from "@assets/utils/logo-clemence";

export const Menu: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string>();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { headerColor } = useHeaderColor();

  const pathTextMapping = [
    { path: "/home", name: "à propos" },
    { path: "/values", name: "mes valeurs" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" },
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    if (route === "/home") {
      router.push(`/`);
    } else {
      router.push(`${route}`);
    }
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
        className={`${headerColor} fixed top-0 mx-auto w-full flex-row items-center justify-between px-[40px] py-[30px] flex`}
      >
        <div
          onClick={() => router.push("/")}
          className="h-26 hover:cursor-pointer"
        >
          <Logo width="50px" height="40px" />
        </div>
        <div className="flex items-center justify-center gap-9">
          {pathTextMapping.map((route) => (
            <div
              className="w-auto"
              key={route.path}
              onClick={() => handleChange(route.path)}
            >
              <p
                className={`${selected === route.path ? "font-bold text-white" : " text-customBlack"} font-footer text-[18px] leading-4 text-black hover:cursor-pointer hover:font-bold hover:text-customRed`}
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
              className={`${selected === "/contact" && "font-bold"} font-clashSemibold text-[15px]  uppercase text-customRed hover:cursor-pointer hover:font-clashBold`}
            >
              Rencontrons nous
            </p>
          </span>
          <div className="absolute h-10 w-[165px] origin-left border-b-2 border-b-customRed transition-transform duration-300 hover:scale-x-0" />
        </div>
      </motion.div>
    </div>
  );
};
