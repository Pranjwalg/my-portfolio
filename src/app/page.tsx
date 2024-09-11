

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/FramerWrapper";

export const siteConfig = {
  name: "Pranjwal Gupta-Portfolio",
  description: "I am a Passionate Full Stack Developer",
  ogImage: "https://my-portfolio-afk7.vercel.app/og-image.png",
  url: "https://my-portfolio-afk7.vercel.app/",
};
export default function Home() {
  return (
   <>
      {/* LEFT SIDE  */}
      <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
       {/* <DownLoadResumeBtn/> */}
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      
     
      {/* GITHUB BUTTON  */}
      <GithubBtn/>
      </>
  );
}
