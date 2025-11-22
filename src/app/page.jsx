import Featured from "@/component/home/Featured";
import Hero from "@/component/home/Hero";
import RecentlyAdded from "@/component/home/RecentlyAdded";

export default function Home() {
  return (
    <div className="w-screen bg-white">
      <Hero/>
      <RecentlyAdded/>
      <Featured/>
    </div>
  );
}
