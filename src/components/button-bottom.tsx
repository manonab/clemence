import { useRouter } from "next/router";

export const ButtonBottom = ({ nextRoute }: { nextRoute: string }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between mx-16 mb-10 mt-32 uppercase font-footer">
      <div
        onClick={() => router.push("/projects")}
        className="hover:cursor-pointer"
      >
        Retour
      </div>
      <div
        className="uppercase font-extrabold hover:cursor-pointer"
        onClick={() => router.push(nextRoute)}
      >
        Prochain projet
      </div>
    </div>
  );
};
