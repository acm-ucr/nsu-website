"use client";

import Landing from "@/components/home/Landing";
import Welcome from "@/components/home/Welcome";
import Offer from "@/components/home/Offer";
import AdditionalInfo from "@/components/home/AdditionalInfo";
import JoinUsButton from "@/components/home/JoinUsButton";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Landing />
      <Welcome />
      <Offer />
      <JoinUsButton />      
      <AdditionalInfo />
    </div>
  );
};

export default Home;
