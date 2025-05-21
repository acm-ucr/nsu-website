"use client";
import { motion } from "motion/react";

const fadeInAnim = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 100, x: 0 },
};

const Offer = () => {
  return (
    <div className="flex flex-col gap-10 p-20">
      <motion.div
        variants={fadeInAnim}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-nsu-red-100 text-center font-[urbanist] text-5xl font-bold">
          What We Offer:
        </div>
      </motion.div>
      <ul className="flex list-disc flex-col gap-5 font-[urbanist]">
        <motion.div
          variants={fadeInAnim}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <li>
            Bi-weekly General Meetings filled with engaging activities, cultural
            discussions, and fun icebreakers.
          </li>
        </motion.div>
        <motion.div
          variants={fadeInAnim}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <li>
            A variety of social events where you can meet new friends and bond
            with fellow members.
          </li>
        </motion.div>
        <motion.div
          variants={fadeInAnim}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <li>
            Cultural celebrations that highlight the rich history and traditions
            of the Japanese American community.
          </li>
        </motion.div>
        <motion.div
          variants={fadeInAnim}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <li>
            Intramural sports teams where you can compete, stay active, and have
            fun with fellow members.
          </li>
        </motion.div>
        <motion.div
          variants={fadeInAnim}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <li>
            Volunteer and leadership opportunities to get involved and make a
            difference!
          </li>
        </motion.div>
      </ul>
    </div>
  );
};

export default Offer;
