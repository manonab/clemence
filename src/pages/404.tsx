import { Images } from "@/common/images";
import Image from "next/image";
import { useRouter } from "next/router";

const Custom404 = () => {
  const redirect = useRouter();
  const handleRedirect = () => {
    redirect.push("/home")
  }
  return (
    <div className="w-1/2 flex flex-col items-start mx-auto">
      <div className="flex items-center gap-6 my-10">
        <Image src={Images.rabbitError} alt="rabbit error" className="w-[250px] h-[250px]" />
        <p className="font-neueRegular text-orange text-[250px]">ups..</p>
      </div>
      <p className="text-[30px] leading-[90%] font-neueCondensed mx-auto">Il semblerait qu’il n’y ait rien à voir par ici.</p>
      <div
        className="mx-auto hover:cursor-pointer border-black border rounded-3xl p-4 w-[200px] my-10"
        onClick={handleRedirect}
      >
        <p className="font-footer font-bold text-[12px] text-center text-grayBlack uppercase">retour</p>
      </div>
    </div>
  );
};

export default Custom404;