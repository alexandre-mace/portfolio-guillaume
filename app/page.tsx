import projects from "@/data/projects.json"
import Image from "next/image";
import getImageLink from "@/lib/getImageLink";
import getVideoLink from "@/lib/getVideoLink";
import extractGoogleDriveId from "@/lib/extractGoogleDriveId";
export default function Home() {
  return (
    <div className={"container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto my-12 md:my-[180px] max-w-8xl gap-2 sm:gap-36 xl:gap-56"}>
      {projects.map((project, index) => (
          <div key={index}>
            {project.image && !project.video &&
              <Image width={300} height={250} className={"w-full h-full object-contain object-center my-auto"} src={getImageLink(project.image)} alt={""}/>
            }
            {project.video &&
                <video width="300" poster={getImageLink(project.image)} height="250" className={"w-full h-full object-contain object-center my-auto"} autoPlay loop muted playsInline preload="auto">
                  <source src={getVideoLink(project.video)} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
            }
          </div>
      ))}
    </div>
  );
}