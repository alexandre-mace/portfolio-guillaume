import projects from "@/data/projects.json"
import Image from "next/image";
export default function Home() {
  return (
    <div className={"container grid md:grid-cols-3 xl:grid-cols-4 mx-auto my-12 md:my-[180px] max-w-8xl gap-2 lg:gap-20 xl:gap-28 2xl:gap-36"}>
      {projects.map((project, index) => (
          <div key={index}>
            <Image width={300} height={250} className={"w-full h-auto"} src={project.image} alt={""}/>
          </div>
      ))}
    </div>
  );
}
