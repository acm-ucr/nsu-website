"use client";

import Image from "next/image";
import WelcImg from "@/public/hero.webp";
import { motion } from "motion/react";

const Welcome = () => {
  return (
    <div>
      <div className="bg-nsu-red-200 flex flex-col place-items-center justify-center md:flex-row">
        <div className="mt-15 mb-15 hidden w-1/2 md:flex">
          <div className="relative mx-auto w-[90%] max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 100, x: 0, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                className="relative top-3 left-3 z-0 h-auto w-full opacity-50"
                src={WelcImg}
                alt="Welcome Image Background"
              />
            </motion.div>
            <motion.div
              className="absolute top-0 z-1 mb-8 w-full opacity-100"
              style={{ width: "100%", height: "100%" }}
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 100, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image src={WelcImg} alt="Welcome Image" fill />
            </motion.div>
          </div>
        </div>

        <div className="mt-5 mr-10 ml-10 flex flex-col items-center justify-center text-center md:mt-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="font-nsu-main text-nsu-gray-100 flex text-center text-xl font-bold md:text-4xl">
              <p>Welcome to Nikkei Student Union!</p>
            </div>
          </motion.div>

          <div className="relative mt-3 mb-3 flex w-3/4 place-items-center justify-center md:hidden">
            <motion.div
              className="border-nsu-gray-300 absolute top-0 z-0 mt-1.5 ml-3 w-full rounded-lg border-1 opacity-50"
              style={{ width: "100%", height: "100%" }}
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 0.5, x: 0, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image src={WelcImg} alt="Welcome Image Background" />
            </motion.div>

            <motion.div
              style={{ z: 1 }}
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 100, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                className="border-nsu-gray-300 z-5 w-full rounded-lg border-1 opacity-100"
                src={WelcImg}
                alt="Welcome Image"
              />
            </motion.div>
          </div>

          <div className="font-nsu-main text-nsu-gray-100 text-s mr-5 mb-5 ml-5 flex text-center font-light md:mt-10 md:mb-0 md:text-xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                We are a community of students passionate about celebrating and
                preserving Japansese and Japanese American culture. Whether
                you're looking to connect with others, learn more about Japanese
                culture, or just have fun at our events, NSU is the perfect
                place to do so!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
