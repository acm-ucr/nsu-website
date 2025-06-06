"use client";

import Landing from "@/components/home_temp/Landing";
import Welcome from "@/components/home_temp/Welcome";
import Offer from "@/components/home_temp/Offer";
import AdditionalInfo from "@/components/home_temp/AdditionalInfo";
import JoinUsButton from "@/components/home_temp/JoinUsButton";
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
