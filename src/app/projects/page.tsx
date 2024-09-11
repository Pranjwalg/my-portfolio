import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "VisaLiv",
      description:
        "Led the full development of VisaLiv's front-end, a premier online destination for comprehensive and up-to-date visa and immigration information. VisaLiv simplifies the complexities of visa processes by empowering users with accurate, reliable, and free information for all countries.",
      tags: ["ReactJs", "Nextjs", "Bootstrap", "Redis", "CSS", "API", "Middleware"],
      link: "https://visaliv.com/",
    },
    {
      title: "Sailax-DBC",
      description:
        "Enhanced the Sailax DBC platform, which revolutionizes networking with digital business cards that offer customizable designs, real-time tracking, advanced QR codes, chats, portfolio features, and more. With a focus on seamless user experience, Sailax DBC transforms how users share and manage their professional connections, featuring powerful analytics for networking insights.",
      tags: ["Nextjs", "Typescript", "Shadcn UI", "React-Icons", "Socket.io", "NextUI", "react-query"],
      link: "https://sailaxdbc.com/",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            Throughout my career, I have taken on key roles in developing complex projects that solve real-world challenges. I led the full front-end development of VisaLiv, a platform designed to simplify the visa and immigration process for users globally. Additionally, I have been enhancing the Sailax DBC platform, a cutting-edge tool that transforms how professionals share digital business cards and manage their networking strategies. Below, you'll find a showcase of these and other projects, highlighting my expertise in delivering innovative and user-centric solutions.
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
