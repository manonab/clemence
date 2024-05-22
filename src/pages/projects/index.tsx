import { useHeaderColor } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Project() {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setHeaderColor("linear-background")
  }, [setHeaderColor]);

  const pathTextMappingMobile = [
    { path: "/projects/mosaic", name: "mosaic", urlImage: "./image1.png" },
    { path: "/projects/portfolio", name: "portfolio", urlImage: "./image2.png" },
    { path: "/projects/capiche", name: "capiche", urlImage: "./image3.png" },
    { path: "/projects/logofolio", name: "logos", urlImage: "./image4.png" }
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    router.push(`${route}`);
  };

  return (
    <div
      className="bg-mainColor z-[999] flex flex-col gap-12 justify-center items-center w-full h-full"
    >
      <div className="flex items-start flex-col gap-6 w-full ml-3 md:ml-20">
        {pathTextMappingMobile.map((route, index) => (
          <div key={index}>
            <p
              key={route.path}
              onClick={() => {
                handleChange(route.path);
              }}
              className="text-orange uppercase hover:cursor-pointer hover:text-redHome text-[65px] md:text-[190px] leading-[90%] font-neueRegular"
            >
              {route.name}
            </p>
            <div className="hover:opacity-1 opacity-0">
              <p>coucou</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};