"use client";
import { motion } from "motion/react";

const AdditionalInfo = () => {
  const titleAnimation = {
    initial: { scale: 0.7, opacity: 0 },
    whileInView: { scale: 1.1, opacity: 1, transition: { duration: 0.15 } },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  const delayWords = {
    initial: { opacity: 0, x: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, delay: 0.13 },
    },
  };

  return (
    <div className="my-8 flex w-[75%] flex-col items-center xl:w-[50%]">
      <motion.h2
        variants={titleAnimation}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="font-urbanist text-nsu-red-300 text-md mt-2 mb-4 flex w-[70%] flex-col items-center font-bold md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Additional Information
        <div className="bg-nsu-red-300 mb-2 h-[4px] w-[85%]"></div>
      </motion.h2>

      <motion.div
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="bg-nsu-red-300 flex w-full flex-col items-center justify-center rounded-3xl p-4 shadow-[12px_12px_0px_rgba(59,37,44,0.4)] md:w-[90%] lg:p-12"
      >
        <motion.p
          variants={delayWords}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-nsu-gray-100 font-urbanist mb-2 w-[80%] text-center text-sm md:text-lg lg:mb-6 lg:text-2xl"
        >
          How often does your student organizaton meet?
        </motion.p>
        <motion.p
          variants={delayWords}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-nsu-gray-100 md:text-md font-urbanist mb-6 text-center text-xs lg:text-xl"
        >
          Every two weeks
        </motion.p>

        <motion.p
          variants={delayWords}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-nsu-gray-100 font-urbanist mb-2 w-[80%] text-center text-sm md:text-lg lg:mb-6 lg:text-2xl"
        >
          What day and time does your student organization generally meet?
        </motion.p>
        <motion.p
          variants={delayWords}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-nsu-gray-100 md:text-md font-urbanist text-center text-xs lg:text-xl"
        >
          Thursday 8:00 PM
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AdditionalInfo;
