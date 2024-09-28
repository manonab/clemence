import Image from "next/image";
import { useRouter } from "next/router";

import { Images } from "@/common/images";

const Custom404 = () => {
  const redirect = useRouter();
  const handleRedirect = () => {
    redirect.back();
  };
  return (
    <div className="mx-auto flex w-1/2 flex-col items-start">
      <div className="my-10 flex items-center gap-6">
        <Image
          src={Images.rabbitError}
          alt="rabbit error"
          className="size-[250px]"
        />
        <p className="font-neueRegular text-[250px] text-orange">ups..</p>
      </div>
      <p className="mx-auto font-neueCondensed text-[30px] leading-[90%]">
        Il semblerait qu’il n’y ait rien à voir par ici.
      </p>
      <div
        className="mx-auto my-10 w-[200px] rounded-3xl border border-black p-4 hover:cursor-pointer"
        onClick={handleRedirect}
      >
        <p className="text-center font-footer text-[12px] font-bold uppercase text-grayBlack">
          retour
        </p>
      </div>
    </div>
  );
};

export default Custom404;
