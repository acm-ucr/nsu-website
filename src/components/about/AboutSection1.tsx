"use client";
import Image from "next/image";
import { motion } from "motion/react";
import AboutImg2 from "@/public/about/about2.webp";

const fadeFromLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay: 0.3 },
};

const AboutSection1 = () => {
  return (
    <motion.div className="px-4 md:px-6" {...fadeFromLeft}>
      <div className="bg-nsu-red-200 mx-auto my-2 h-[4px] w-full md:w-1/2" />

      <p className="font-nsu-main text-nsu-gray-300 mt-5 w-full text-center text-xl leading-7 tracking-normal md:w-3/4 md:text-left md:text-3xl md:leading-9">
        Nikkei Student Union (NSU) is a socio-cultural organization devoted to
        promoting, preserving, and educating the surrounding community and
        college-aged youth about the history of Japanese and Japanese Americans
        through cultural events and social activities.
      </p>

      <div className="relative mx-auto mt-4 flex w-full justify-center md:mt-6 md:w-2/5">
        <Image
          className="absolute z-0 mt-2 ml-2 opacity-50 md:ml-4"
          src={AboutImg2}
          alt="About1 Image Background"
        />
        <Image
          className="z-10 mb-8 opacity-100"
          src={AboutImg2}
          alt="About1 Image"
        />
      </div>
    </motion.div>
  );
};

export default AboutSection1;
