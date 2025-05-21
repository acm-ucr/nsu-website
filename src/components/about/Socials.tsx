"use client";
import Link from "next/link";
import { socialLanterns } from "@/data/Socials";
import { motion } from "motion/react";

const Socials = () => {
  return (
    <div className="my-16 flex w-full flex-col items-center">
      <div className="text-nsu-red-200 items-center text-5xl font-extrabold lg:text-6xl xl:text-7xl">
        SOCIALS
      </div>
      <div className="border-nsu-red-200 mt-6 w-[80%] border-t-4 md:border-t-5 lg:border-t-6" />
      {/*Desktop*/}
      <div className="relative hidden h-110 w-[90%] flex-wrap justify-center md:flex lg:h-150 lg:w-[80%]">
        {socialLanterns.map(({ icon, href, ml, lineHeight }, index) => (
          <div key={index} className={`flex w-1/7 flex-col items-center ${ml}`}>
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              style={{ originY: 0 }}
              className={`${lineHeight} border-r-4 lg:border-r-5 xl:border-r-6`}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: "easeOut",
              }}
              className="flex w-full flex-col items-center"
            >
              <div className="border-nsu-red-200 -mb-0.5 h-1/35 w-1/3 rounded-full border-4 lg:-mb-1 lg:border-5" />
              <div className="border-nsu-red-200 flex aspect-square w-full items-center justify-center rounded-[2.5rem] border-4 lg:rounded-[3.5rem] lg:border-5 xl:rounded-[4.5rem]">
                <Link
                  className="text-nsu-red-300 flex scale-80 items-center duration-150 hover:scale-100 md:scale-75 2xl:scale-90"
                  href={href}
                  target="_blank"
                >
                  {icon}
                </Link>
              </div>
              <div className="border-nsu-red-200 -mt-0.5 h-1/35 w-1/3 rounded-full border-4 lg:-mt-1 lg:border-5" />
            </motion.div>
          </div>
        ))}
      </div>

      {/*Mobile*/}
      <div className="relative m-4 grid grid-cols-2 gap-12 md:hidden">
        {socialLanterns.map(({ icon, href }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <div key={index}>
              <Link
                className="text-nsu-red-300 flex items-center duration-150 hover:scale-110"
                href={href}
                target="_blank"
              >
                {icon}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
