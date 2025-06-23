"use client";

import BoardCard from "@/components/board/Card";
import { BOARD } from "@/data/Board";
import { motion } from "motion/react";

const fadeIn = (index: number, delay: number = 0.05) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: index * delay },
  viewport: { once: true },
});

const BoardGrid = () => {
  return (
    <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {BOARD.map(({ image, name, role }, index) => (
        <motion.div key={index} {...fadeIn(index)} className="grid">
          <BoardCard image={image} name={name} role={role} />
        </motion.div>
      ))}
    </div>
  );
};

export default BoardGrid;
