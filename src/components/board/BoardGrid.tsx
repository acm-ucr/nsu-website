"use client";

import BoardCard from "@/components/board/BoardCard";
import { BOARD } from "@/data/Board";
import { motion } from "motion/react";

const BoardGrid = () => {
  return (
    <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {BOARD.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="grid"
        >
          <BoardCard image={item.image} name={item.name} role={item.role} />
        </motion.div>
      ))}
    </div>
  );
};

export default BoardGrid;
