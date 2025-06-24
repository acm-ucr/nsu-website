"use client";

import Image from "next/image";
import fanImg from "@/public/assets/fan.webp";
import { motion } from "motion/react";

const Header = ({ headerString }: { headerString: string }) => {
  const fanAnimation = {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <div className="relative mx-auto mt-10 mb-5 flex w-1/2 flex-col items-center justify-center overflow-visible sm:w-1/3 md:w-1/4">
      <motion.div className="size-[75%]" {...fanAnimation}>
        <Image src={fanImg} alt="fan image" className="z-0 w-full"></Image>
      </motion.div>

      <svg
        viewBox="0 0 500 1"
        className="absolute h-full w-full overflow-visible"
      >
        <path
          id="curvedText"
          fill="none"
          stroke=""
          strokeWidth="2"
          d="M10,100 C200,-10 300,-10 490,100"
          className="overflow-visible"
        />
        <text
          key=""
          className="fill-[#70161e] text-8xl font-bold [letter-spacing:2px] md:[letter-spacing:5px] lg:text-8xl xl:text-[80px]"
        >
          <motion.textPath
            style={{ textAnchor: "middle" }}
            href="#curvedText"
            initial={{ startOffset: "25%", opacity: 0 }}
            whileInView={{ startOffset: "50%", opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
              damping: 15,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            {headerString || "Header"}
          </motion.textPath>
        </text>
      </svg>
    </div>
  );
};

export default Header;
