"use client";
import { motion } from "motion/react";

const AdditionalInfo = () => {
  const titleAnimation = {
    initial: { scale: 0.7, opacity: 0 },
    whileInView: { scale: 1.1, opacity: 1, transition: { duration: 0.25 } },
    viewport: { once: true },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.25 } },
    viewport: { once: true },
  };

  const delayWords = {
    initial: { opacity: 0, x: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, delay: 0.13 },
    },
    viewport: { once: true },
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
    <div className="my-8 flex w-3/4 flex-col items-center xl:w-1/2">
      <motion.div
        {...titleAnimation}
        className="font-urbanist text-nsu-red-300 text-md mt-2 mb-4 flex w-[70%] flex-col items-center font-bold md:text-2xl lg:text-3xl xl:text-4xl"
      >
        Additional Information
        <div className="bg-nsu-red-300 mb-2 h-[4px] w-[85%]" />
      </motion.div>

      <motion.div
        {...fadeInRight}
        className="bg-nsu-red-300 text-nsu-gray-100 flex flex-col items-center justify-center rounded-3xl p-4 shadow-[12px_12px_0px_rgba(59,37,44,0.4)] md:w-9/10 lg:p-12"
      >
        {items.map((item, i) => (
          <motion.div key={i} className="flex w-full flex-col items-center">
            <motion.p
              {...fadeInRight}
              className="text-nsu-gray-100 font-urbanist mb-2 w-[80%] text-center text-sm md:text-lg lg:mb-6 lg:text-2xl"
            >
              {item.question}
            </motion.p>
            <motion.p
              {...delayWords}
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
