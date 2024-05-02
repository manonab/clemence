import { useHeaderColor } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Project() {
  const { setHeaderColor } = useHeaderColor();
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  const pathTextMappingMobile = [
    { path: "/mosaic", name: "mosaic" },
    { path: "/portfolio", name: "portfolio" },
    { path: "/capiche", name: "capiche" },
    { path: "/logofolio", name: "logos" }
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    router.push(`${route}`);
  };

  return (
    <div
      className="bg-mainColor z-[999] flex flex-col gap-12 justify-center items-center fixed top-0 left-0 w-full h-full w-full overflow-y-auto"
    >
      <div className="flex items-start flex-col gap-6 w-full ml-5 md:ml-20">
        {pathTextMappingMobile.map((route) => (
          <p
            key={route.path}
            onClick={() => {
              handleChange(route.path);
            }}
            className="text-orange uppercase hover:cursor-pointer hover:text-redHome text-[70px] md:text-[160px] leading-[90%] font-neueRegular"
          >
            {route.name}
          </p>
        ))}
      </div>
    </div>
  );
};