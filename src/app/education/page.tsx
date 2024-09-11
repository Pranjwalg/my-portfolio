import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // EDUCATION PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex flex-col md:flex-row">
          <FramerWrapper 
            y={0} 
            x={-100} 
            delay={0.35} 
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2020 - 2023
          </FramerWrapper>
          <FramerWrapper 
            y={0} 
            x={100} 
            delay={0.35} 
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Technology in Computer Science Engineering <br />
              NIET ,Greater Noida
            </div>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row mt-4">
          <FramerWrapper 
            y={0} 
            x={-100} 
            delay={0.35} 
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2017 - 2020
          </FramerWrapper>
          <FramerWrapper 
            y={0} 
            x={100} 
            delay={0.35} 
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Diploma in Information Technology <br />
              Government Girls Polytechnic, Lucknow
            </div>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row mt-4">
          <FramerWrapper 
            y={0} 
            x={-100} 
            delay={0.35} 
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2015 - 2016
          </FramerWrapper>
          <FramerWrapper 
            y={0} 
            x={100} 
            delay={0.35} 
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              10th Grade <br />
              Bhartiya Inter College, Pihani-Hardoi
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
