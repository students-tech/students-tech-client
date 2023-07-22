import Navbar from "@/components/container/navbar";
import Welcome from "@/components/container/welcome";
import ProjectList from "@/components/container/welcome/projectList";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Welcome />
      <ProjectList />
    </div>
  );
}
