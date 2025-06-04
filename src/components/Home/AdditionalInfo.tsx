"use client";
import { motion } from "motion/react";

const AdditionalInfo = () => {
  const titleAnimation = {
    initial: { scale: 0.7, opacity: 0 },
    whileInView: { scale: 1.1, opacity: 1, transition: { duration: 0.25 } },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  const delayWords = {
    initial: { opacity: 0, x: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, delay: 0.13 },
    },
  };

  const items = [
    {
      question: "How often does your student organizaton meet?",
      answer: "Every two weeks",
    },
    {
      question:
        "What day and time does your student organization generally meet?",
      answer: "Thursday 8:00 PM",
    },
  ];

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
        {items.map((item, i) => (
          <motion.div key={i} className="flex w-full flex-col items-center">
            <motion.p
              variants={fadeInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-nsu-gray-100 font-urbanist mb-2 w-[80%] text-center text-sm md:text-lg lg:mb-6 lg:text-2xl"
            >
              {item.question}
            </motion.p>
            <motion.p
              variants={delayWords}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-nsu-gray-100 md:text-md font-urbanist mb-6 text-center text-xs lg:text-xl"
            >
              {item.answer}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdditionalInfo;
