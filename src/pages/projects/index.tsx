import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useHeaderColor } from "@/context";
import { CapcicheText } from "@assets/projects/capiche-text";
import { LogoText } from "@assets/projects/logofolio-text";
import { MosaicText } from "@assets/projects/mosaic-text";
import { PortFolioText } from "@assets/projects/portfolio-text";
import path from "path";

export default function Project() {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  const pathTextMappingMobile = [
    { path: "/projects/mosaic", name: "mosaic", svgComponent: <MosaicText /> },
    { path: "/projects/lutalica", name: "lutalica" },
    { path: "/projects/kama", name: "kama" },
    { path: "/projects/logofolio", name: "logos", svgComponent: <LogoText /> },
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    router.push(`${route}`);
  };

  return (
    <div className="z-[999] flex size-full flex-col items-center justify-center gap-12 bg-mainColor pt-32">
      <div className="ml-3 flex w-full flex-col items-start gap-6 md:my-16 md:ml-20">
        {pathTextMappingMobile.map((route, index) => (
          <div key={index} className="flex h-[200px] items-center">
            <p
              key={route.path}
              // onMouseEnter={() => setHovered(route.path)}
              // onMouseLeave={() => setHovered("")}
              onClick={() => {
                handleChange(route.path);
              }}
              className="z-10 font-marsdenHeavy text-[200px] uppercase text-customRed hover:cursor-pointer hover:text-lightPink"
            >
              {route.name}
            </p>
            {hovered === route.path && route.svgComponent && (
              <p className="z-0  -ml-[300px] transition-transform ease-in">
                {route.svgComponent}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
