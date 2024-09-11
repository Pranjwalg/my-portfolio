import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: any;
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  // Define colors for specific technologies
  const getTagColor = (tag: string) => {
    switch (tag) {
      case "ReactJs":
        return "bg-blue-100 text-blue-800"; // React Blue
      case "Nextjs":
        return "bg-black text-white"; // Next.js Black
      case "Typescript":
        return "bg-blue-500 text-white"; // TypeScript Blue
      case "Bootstrap":
        return "bg-purple-100 text-purple-800"; // Bootstrap Purple
      case "Redis":
        return "bg-red-100 text-red-800"; // Redis Red
      case "Shadcn UI":
        return "bg-yellow-100 text-yellow-800"; // Shadcn Yellow
      case "CSS":
        return "bg-blue-200 text-blue-900"; // CSS Blue
      case "API":
        return "bg-green-100 text-green-800"; // API Green
      case "Middleware":
        return "bg-orange-100 text-orange-800"; // Middleware Orange
      case "React-Icons":
        return "bg-teal-100 text-teal-800"; // Teal for Icons
      case "Socket.io":
        return "bg-gray-300 text-black"; // Socket.io Grey
      case "NextUI":
        return "bg-indigo-100 text-indigo-800"; // NextUI Indigo
      case "react-query":
        return "bg-pink-100 text-pink-800"; // React Query Pink
      default:
        return "bg-gray-100 text-gray-800"; // Default grey for unknown
    }
  };

  return (
    <FramerWrapper
      className={"w-full sm:w-[48%] lg:w-[32%] min-h-[345px] max-w-full"}
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-t-md">
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
          {value.title}
        </CardTitle>
      </CardHeader>
        <CardContent>
          <p className="text-base font-poppins text-gray-700">
            {value.description
              ? value.description
              : "A project that demonstrates my ability to build scalable, high-quality web applications."}
          </p>
          <div className="w-full flex mt-2 justify-center flex-wrap gap-2">
            {value.tags.map((itm: string, indx: number) => (
              <span
                className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${getTagColor(
                  itm
                )}`}
                key={indx}
              >
                {itm}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="items-center justify-center flex">
          <Link
            href={value.link}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "flex transform hover:scale-105 transition-transform duration-200"
            )}
          >
            Explore Live Project <ArrowUpRight className="h-5 w-5 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
