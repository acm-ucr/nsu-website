"use client";
import Image from "next/image";
import Umbrella from "@/public/assets/nsu0.webp";
import Lanterns from "@/public/assets/lanterns.webp";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-row">
        <div className="relative flex flex-[5] flex-row">
          <div className="absolute w-5/12">
            <Image src={Umbrella} alt="NSU Umbrella" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 100, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:space-y-3 md:pt-8 lg:pt-20">
              <div className="mt-10 ml-[12vw] text-4xl font-extrabold md:text-6xl lg:text-8xl">
                <h1
                  className="text-nsu-tan-100 absolute z-0 mt-[2px] ml-[2px] lg:mt-1 lg:ml-1"
                  style={{ WebkitTextStroke: "1px #70161e" }}
                >
                  Nikkei
                </h1>
                <h1 className="text-nsu-red-200 relative z-10">Nikkei</h1>
              </div>
              <div className="ml-15 ml-[22vw] text-4xl font-extrabold md:text-6xl lg:text-8xl">
                <h1
                  className="text-nsu-tan-100 absolute z-0 mt-[2px] ml-[2px] lg:mt-1 lg:ml-1"
                  style={{ WebkitTextStroke: "1px #70161e" }}
                >
                  Student
                </h1>
                <h1 className="text-nsu-red-200 relative z-10">Student</h1>
              </div>
              <div className="ml-35 ml-[37vw] text-4xl font-extrabold md:text-6xl lg:text-8xl">
                <h1
                  className="text-nsu-tan-100 absolute z-0 mt-[2px] ml-[2px] lg:mt-1 lg:ml-1"
                  style={{ WebkitTextStroke: "1px #70161e" }}
                >
                  Union
                </h1>
                <h1 className="text-nsu-red-200 relative z-10">Union</h1>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="z-[-5] flex flex-[3]">
          <motion.div
            initial={{ y: -600 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              damping: 20,
            }}
            animate={{ y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={Lanterns}
              alt="NSU Lanterns"
              className="z-0 w-full object-contain object-top"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true }}
      >
        <div className="text-nsu-black-100 border-nsu-red-200 mx-[6vw] mb-5 border-b-4 py-2 text-center text-[0.80rem] md:mt-5 md:text-[1.50rem] lg:ml-20 lg:w-9/16 xl:text-[1.68rem]">
          NSU is a diverse Japanese socio-cultural club at UCR.
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
