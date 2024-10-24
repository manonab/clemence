import { ArrowRight } from "@assets/arrow-right";
import { useRouter } from "next/router";

export const CustomButton = ({
  text,
  redirection,
}: {
  text: string;
  redirection: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(redirection)}
      className="md:mb-2 md:ml-24 flex w-[150px] flex-col md:items-center justify-around md:pb-2 hover:cursor-pointer items-start md:mt-10 ml-2.5"
    >
      <span className="flex items-center gap-3">
        <p className="text-xs	uppercase">{text}</p>
        <ArrowRight />
      </span>
      <div className="absolute md:h-12 h-10 md:w-[150px] w-[135px]  origin-left border-b-2 border-b-black transition-transform duration-300 hover:scale-x-0" />
    </div>
  );
};
