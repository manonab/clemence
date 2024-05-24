import { useHeaderColor } from "@/context";
import { CapcicheText } from "@assets/projects/capiche-text";
import { LogoText } from "@assets/projects/logofolio-text";
import { MosaicText } from "@assets/projects/mosaic-text";
import { PortFolioText } from "@assets/projects/portfolio-text";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Project() {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setHeaderColor("linear-background")
  }, [setHeaderColor]);

  const pathTextMappingMobile = [
    { path: "/projects/mosaic", name: "mosaic", svgComponent: <MosaicText /> },
    { path: "/projects/portfolio", name: "portfolio", svgComponent: <PortFolioText /> },
    { path: "/projects/capiche", name: "capiche", svgComponent: <CapcicheText /> },
    { path: "/projects/logofolio", name: "logos", svgComponent: <LogoText /> }
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    router.push(`${route}`);
  };

  return (
    <div
      className="bg-mainColor z-[999] flex flex-col gap-12 justify-center items-center w-full h-full"
    >
      <div className="flex items-start flex-col gap-6 w-full ml-3 md:ml-20 md:mt-16">
        {pathTextMappingMobile.map((route, index) => (
          <div key={index} className="flex items-center h-[200px]">
            <p
              key={route.path}
              onMouseEnter={() => setHovered(route.path)}
              onMouseLeave={() => setHovered("")}
              onClick={() => {
                handleChange(route.path);
              }}
              className="z-10 text-orange uppercase hover:cursor-pointer hover:text-redHome text-[65px] md:text-[190px] leading-[90%] font-neueRegular"
            >
              {route.name}
            </p>
            {hovered === route.path && route.svgComponent &&
              <p className="transition-transform  ease-in z-0 -ml-[300px]">{route.svgComponent}</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
};