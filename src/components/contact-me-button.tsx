import { useRouter } from "next/router";

export const ContactMeButton = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/contact")}
      className="mx-auto my-10 md:my-20 md:w-[200px] w-[150px] rounded-full border border-black md:px-10 md:py-5 p-4 text-center text-sm font-bold uppercase leading-[17.5px] text-customBlack transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-customBlack hover:text-white"
    >
      Me contacter
    </div>
  );
};
