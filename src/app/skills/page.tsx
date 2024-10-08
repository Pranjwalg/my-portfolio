import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png';
import css from '../../../public/css.png';
import scss from '../../../public/scss.png';
import js from '../../../public/js.png';
import ts from '../../../public/ts.png';
import java from '../../../public/java.png';
import react from '../../../public/react.png';
import nextjs from '../../../public/nextjs.jpeg';
import cplus from '../../../public/c++.jpeg';
import tailwind from '../../../public/tailwindcss.png';
import github from '../../../public/github.png';
import boot from '../../../public/springboot.png';
import postman from '../../../public/postman.png'; // Add Postman image
import restapi from '../../../public/api.png'; // Add REST API image
import socketio from '../../../public/socket.png'; // Add Socket.io image
import bootstrap from '../../../public/bootstrap.png'; // Add Bootstrap image
import vercel from '../../../public/Vercel.png'; // Add Vercel image
import FramerWrapper from "@/components/FramerWrapper";
import mysql from '../../../public/mysql.png';
const skillPage = () => {
    const language = [
        {alt: "html", img: html},
        {alt: "css", img: css},
        {alt: "js", img: js},
        {alt: "c++", img: cplus},
        {alt: "java", img: java},
        {alt: "ts", img: ts},
    ];

    const framework = [
        {alt: "react", img: react},
        {alt: "nextjs", img: nextjs},
        {alt: "boot", img: boot},
        {alt: "tailwind", img: tailwind},
        {alt: "github", img: github},
        {alt: "postman", img: postman}, // Added Postman
        {alt: "restapi", img: restapi}, // Added REST API
        {alt: "socket.io", img: socketio}, // Added Socket.io
        {alt: "bootstrap", img: bootstrap}, // Added Bootstrap
        {alt: "vercel", img: vercel}, // Added Vercel
    ];

    const databases = [
      {alt: "mysql", img: mysql},
    ];

    return (
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge className="gap-2">
          <Lightbulb className="h-5 w-5" />
          My Skills
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Technical Experience/Skills.</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
              I am currently a MERN Stack Developer at Digipanda Consulting Pvt. Ltd. with a solid understanding of HTML5, CSS3, JavaScript, TypeScript, and React, including responsive design principles. I specialize in building applications and websites using JavaScript, TypeScript, React, Next.js, Node.js, and Java for full-stack development.
            </p>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.30} className="block">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
              Programming Languages
            </h1>
            <div className="w-full h-fit flex-row flex justify-between items-center">
              <SkillsFooter items={language} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
              Framework/Libraries and Version Control
            </h1>
            <div className="w-full h-fit flex-row flex justify-between items-center">
              <SkillsFooter items={framework} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
              Databases
            </h1>
            <div className="w-full h-fit flex-row flex justify-between items-center">
              <SkillsFooter items={databases} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    );
};

export default skillPage;
