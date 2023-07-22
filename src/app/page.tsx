import Navbar from "@/components/container/navbar"
import Welcome from "@/components/container/welcome";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Welcome />
    </div>
  );
}
