"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TextRotator() {
  const texts = [
    "Full Stack Developer",
    "Problem Solver",
    "MERN Stack Developer",
    "Software Engineer",
  ];  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-center overflow-hidden">
      <AnimatePresence >
        <motion.div
          key={index} // key based on the current text index
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700"
        >
          I am a {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TextRotator;
