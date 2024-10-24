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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour le menu burger

  const pathTextMapping = [
    { path: "/home", name: "à propos" },
    { path: "/values", name: "mes valeurs" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" },
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    setIsMenuOpen(false); // Fermer le menu une fois la navigation effectuée
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
        className={`${headerColor} fixed top-0 mx-auto w-full flex-row items-center justify-between px-[20px] py-[15px] flex md:px-[40px] md:py-[30px]`}
      >
        <div
          onClick={() => router.push("/")}
          className="h-26 hover:cursor-pointer"
        >
          <Logo width="50px" height="40px" />
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-9">
          {pathTextMapping.map((route) => (
            <div
              className="w-auto"
              key={route.path}
              onClick={() => handleChange(route.path)}
            >
              <p
                className={`${
                  selected === route.path
                    ? "font-bold text-white"
                    : "text-customBlack"
                } font-footer text-[18px] leading-4 text-black hover:cursor-pointer hover:font-bold hover:text-customRed`}
              >
                {route.name}
              </p>
            </div>
          ))}
        </div>

        <div
          onClick={() => handleChange("/contact")}
          className="hidden md:flex flex-col items-center justify-around hover:cursor-pointer"
        >
          <span className="flex items-center gap-3">
            <p
              className={`${
                selected === "/contact" && "font-bold"
              } font-clashSemibold text-[15px] uppercase text-customRed hover:cursor-pointer hover:font-clashBold`}
            >
              Rencontrons nous
            </p>
          </span>
          <div className="absolute h-10 w-[165px] origin-left border-b-2 border-b-customRed transition-transform duration-300 hover:scale-x-0" />
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90"
          onClick={() => setIsMenuOpen(false)} // Fermer le menu si on clique sur l'overlay
        >
          <div
            className="flex flex-col items-center gap-6"
            onClick={
              (e) =>
                e.stopPropagation() /* Empêche la fermeture si on clique sur le menu */
            }
          >
            {pathTextMapping.map((route) => (
              <p
                key={route.path}
                onClick={() => handleChange(route.path)} // Fermer le menu quand on clique sur un lien
                className="text-white text-2xl font-bold cursor-pointer hover:text-customRed"
              >
                {route.name}
              </p>
            ))}
            <p
              onClick={() => handleChange("/contact")}
              className="text-customRed text-xl font-clashSemibold cursor-pointer hover:text-white"
            >
              Rencontrons nous
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
