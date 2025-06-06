"use client";
import Image from "next/image";
import About from "@/public/about/about1.webp";
import RedFish from "@/public/assets/nsu4.webp";
import BlackFish from "@/public/assets/nsu12.webp";
import Tree from "@/public/assets/nsu5.webp";
import { motion } from "motion/react";

const AboutSection2 = () => {
  return (
    // same horizontal padding
    <div className="px-4 md:px-0">
      <div className="bg-nsu-red-200 mx-auto my-2 mt-10 h-[4px] w-full md:w-1/2" />
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="bg-nsu-tan-100 relative flex flex-col items-start overflow-hidden p-4 md:p-8"
      >
        <div className="w-full text-left md:ml-auto md:w-3/4 md:text-right">
          <p className="font-nsu-main text-nsu-gray-300 text-center text-xl leading-7 tracking-normal md:text-left md:text-3xl md:leading-9">
            We host bi-weekly General Meetings where our NSU community gathers
            to learn more about Japanese American Culture, participate in
            engaging games and icebreaker activities, as well as hear more about
            upcoming events open to General Members.
          </p>
        </div>

        <div className="relative z-1 mt-10 mb-20 ml-0 w-full max-w-xl min-w-[300px] md:mt-20 md:mb-40 md:ml-[10%] md:w-2/5">
          <div className="absolute top-[-40%] left-[-35%] z-0 hidden w-[50%] min-w-[40px] md:block">
            <Image src={BlackFish} alt="Black Fish" className="h-auto w-full" />
          </div>
          <div className="absolute top-[60%] right-[-38%] z-0 hidden w-[50%] min-w-[40px] md:block">
            <Image src={RedFish} alt="Red Fish" className="h-auto w-full" />
          </div>

          <Image
            src={About}
            alt="About Section 2 Main Image"
            className="relative z-10 rounded-md md:rounded-[1/2vw]"
          />
          <Image
            src={About}
            alt="Ghost Image"
            className="absolute top-3 left-3 z-1 hidden rounded-[1/2vw] opacity-50 md:block"
          />
        </div>

        <div className="absolute -right-8 mt-4 hidden md:-right-30 md:mt-20 md:block">
          <Image src={Tree} alt="Tree" className="w-4/5" />
        </div>
        <div className="absolute -right-12 mt-4 hidden md:-right-70 md:mt-100 md:block">
          <Image src={Tree} alt="Tree" className="w-3/5 rotate-300" />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection2;
