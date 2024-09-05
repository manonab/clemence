import HomeComponent from "@/components/home";

export default function Index() {
  return (
    <div className="w-full">
      <div className="relative top-[80px] mx-auto hidden h-full flex-col md:flex">
        <HomeComponent />
      </div>
    </div>
  );
}
