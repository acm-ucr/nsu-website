"use client";
import { motion } from "motion/react";

const Offer = () => {
  const titleAnimation = {
    initial: { scale: 0.7, opacity: 0 },
    whileInView: { scale: 1, opacity: 1, transition: { duration: 0.25 } },
  };

  const listFade = {
    initial: { opacity: 0, x: -30 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, delay: 0.13 },
    },
  };

  const offers = [
    "Bi-weekly General Meetings filled with engaging activities, cultural discussions, and fun icebreakers.",
    "A variety of social events where you can meet new friends and bond with fellow members.",
    "Cultural celebrations that highlight the rich history and traditions of the Japanese American community.",
    "Intramural sports teams where you can compete, stay active, and have fun with fellow members.",
    " Volunteer and leadership opportunities to get involved and make a difference!",
  ];

  return (
    <div className="flex flex-col gap-10 p-20">
      <motion.div
        variants={titleAnimation}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="text-nsu-red-100 text-center font-[urbanist] text-5xl font-bold"
      >
        What We Offer:
      </motion.div>
      <ul className="flex list-disc flex-col gap-5 font-[urbanist]">
        {offers.map((text, i) => (
          <motion.li
            key={i}
            variants={listFade}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {text}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Offer;
