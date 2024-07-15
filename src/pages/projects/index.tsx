import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useHeaderColor } from "@/context";
import { CapcicheText } from "@assets/projects/capiche-text";
import { LogoText } from "@assets/projects/logofolio-text";
import { MosaicText } from "@assets/projects/mosaic-text";
import { PortFolioText } from "@assets/projects/portfolio-text";

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
    {
      path: "/projects/portfolio",
      name: "portfolio",
      svgComponent: <PortFolioText />,
    },
    {
      path: "/projects/capiche",
      name: "capiche",
      svgComponent: <CapcicheText />,
    },
    { path: "/projects/logofolio", name: "logos", svgComponent: <LogoText /> },
  ];

  console.log(selected);
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
              onMouseEnter={() => setHovered(route.path)}
              onMouseLeave={() => setHovered("")}
              onClick={() => {
                handleChange(route.path);
              }}
              className="z-10 font-neueRegular text-[65px] uppercase leading-[90%] text-orange hover:cursor-pointer hover:text-redHome md:text-[190px]"
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
