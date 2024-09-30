import { cn } from "@/lib/utils";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/pranjwal-gupta/", icon: <Linkedin /> },
     { name: "Portfolio", link: "https://pranjwal.vercel.app/", icon: <ExternalLink /> },
  ];

  return (
    <div className="flex gap-4">
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="_blank"
              href={itm.link}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }), "transition-transform transform hover:scale-110 hover:text-primary")}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </div>
  );
};

export default SocialLinks;
