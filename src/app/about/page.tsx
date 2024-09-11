import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";

const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Building Cool Projects" },
    { hobby: "Learning New Things" },
    
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-6 overflow-hidden">
      <Badge className="gap-2 bg-blue-500 text-white">
        <User2 className="h-5 w-5" />
        About Me
      </Badge>

      <div className="flex flex-col gap-4">
        <Heading>
          Full Stack Developer <br /> Based in India
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-lg sm:text-xl text-gray-800 max-sm:text-lg">
            I am currently working as a Full Stack Developer at Digipanda Consulting Pvt. Ltd., where I focus on creating scalable web applications and delivering high-performance solutions. I have contributed to several live projects, concentrating on building seamless user experiences and efficient systems.
          </p>
        </FramerWrapper>

        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-lg sm:text-xl text-gray-800 max-sm:text-lg">
            In my current role, I collaborate closely with cross-functional teams to develop end-to-end solutions, ensuring optimal performance and user satisfaction. I am passionate about leveraging modern technologies to solve complex challenges and am always eager to learn and grow in the ever-evolving tech landscape.
          </p>
        </FramerWrapper>
      </div>

      {/* About Footer Section */}
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col" y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>

      {/* Hobbies Section */}
      <FramerWrapper y={100} delay={0.31}>
        <h1 className="flex items-center gap-2 text-3xl font-poppins text-primary font-semibold max-sm:text-2xl icon_underline relative">
          <Heart className="h-8 w-8 text-red-500" /> Hobbies
        </h1>
        <div className="w-full p-2 flex flex-wrap gap-7">
          {items.map((val, indx) => {
            return (
              <div key={indx} className="flex items-center gap-2 text-lg sm:text-xl text-gray-700">
                <Circle className="h-4 w-4 text-blue-500" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
