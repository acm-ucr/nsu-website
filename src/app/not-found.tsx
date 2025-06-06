"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
import nekoImg from "../../public/assets/nsu9.webp";
import kitsuneImg from "../../public/assets/nsu10.webp";
import inuImg from "../../public/assets/nsu11.webp";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <div className="relative mt-30 mb-30 flex w-full flex-col items-center justify-center lg:mt-40 lg:mb-40">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileInView={{ opacity: 100, x: 0 }}
        viewport={{ once: true }}
        className="absolute z-5 mt-35 duration-150 motion-safe:hover:scale-110 md:mt-42 lg:mt-105"
      >
        <Button variant="notfound" className="rounded-3xl p-5 md:p-7 lg:p-11">
          <Link href="/">
            <div className="flex w-full text-2xl md:text-3xl lg:text-4xl">
              HOME
            </div>
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 100, y: 0 }}
        viewport={{ once: true }}
        className="absolute mb-78 ml-[33%] w-[100px] md:mb-81 md:w-[140px] lg:mb-120 lg:w-auto"
      >
        <Image src={inuImg} alt="dog icon" />
      </motion.div>

      <div className="border-nsu-red-200 relative h-70 w-[70%] overflow-hidden rounded-lg border-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] lg:h-auto">
        <div className="mt-13 flex w-full flex-col place-items-center">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            className="absolute mt-29 ml-[75%] w-[140px] md:mt-18 md:w-[200px] lg:mt-36 lg:ml-[90%] lg:w-[400px]"
          >
            <Image src={nekoImg} alt="cat icon" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            className="absolute mt-38 mr-[70%] w-[90px] md:mt-30 md:w-[130px] lg:mt-57 lg:mr-[80%] lg:w-[175px]"
          >
            <Image src={kitsuneImg} alt="fox icon" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 100, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-6xl font-bold md:text-7xl lg:text-9xl"
          >
            <h1
              className="text-nsu-tan-100 absolute z-0 mr-1 mb-1 lg:mr-2 lg:mb-2"
              style={{ WebkitTextStroke: "2px #70161e" }}
            >
              404
            </h1>
            <h1 className="text-nsu-red-200 z-1">404</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileInView={{ opacity: 100, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-nsu-red-300 text-3xl font-light whitespace-nowrap md:text-5xl lg:mb-35 lg:text-8xl">
              page not found
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
