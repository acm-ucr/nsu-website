"use client";

import Landing from "@/components/Home/Landing";
import Welcome from "@/components/Home/Welcome";
import Offer from "@/components/Home/Offer";
import AdditionalInfo from "@/components/Home/AdditionalInfo";
import JoinUsButton from "@/components/Home/JoinUsButton";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Landing />
      <Welcome />
      <Offer />
      <JoinUsButton />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex w-full flex-col items-center justify-center"
      >
        <AdditionalInfo />
      </motion.div>
    </div>
  );
};

export default Home;
