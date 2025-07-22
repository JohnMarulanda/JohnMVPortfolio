"use client";

import StarIcon from "@/assets/icons/star.svg";
import { motion } from "framer-motion";

const words = [
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Computer Vision Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
];

export const TapeSection = () => {
  return (
    <div className="py-10">
      <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500/10 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%, black_90%, transparent)]">
          <motion.div 
            className="flex flex-none gap-4 py-3"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <div key={index} className="flex flex-none gap-4">
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-white uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-white -rotate-12" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
