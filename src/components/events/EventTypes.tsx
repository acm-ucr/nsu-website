"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import DangoImg from "../../../public/events/tanghulu.webp";
import BigLittle from "../../../public/events/reveal.webp";
import RamenImg from "../../../public/events/ramen.webp";
import RetreatImg from "../../../public/events/winter_retreat.webp";
import OnigiriImg from "../../../public/events/onigiri.webp";
import CultureNightImg from "../../../public/events/culture_night.webp";
import TaiyakiImg from "../../../public/events/taiyaki.webp";
import BanquetImg from "../../../public/events/banquet.webp";

const fadeFromLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay: 0.3 },
};

const fadeFromRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay: 0.3 },
};

interface EventData {
  id: string;
  title: string;
  season: string;
  description: string;
  mainImage: { src: string; height: number; width: number };
  clipartImage: { src: string; height: number; width: number };
  clipartClasses: string;
  isReversed: boolean;
}

const eventData: EventData[] = [
  {
    id: "big-little",
    title: "NSU Big/Little",
    season: "(Fall Quarter)",
    description:
      "Join our Big Little program and become part of the UCR NSU family! Bigs serve as mentors and friends, while Littles get the opportunity to connect and grow within the club. It's the perfect way to meet new people and build lasting friendships!",
    mainImage: BigLittle,
    clipartImage: DangoImg,
    clipartClasses:
      "absolute top-0 right-0 hidden w-[100px] translate-x-12 -translate-y-16 md:flex md:w-[150px] lg:flex lg:translate-x-16 lg:-translate-y-20 xl:flex xl:w-[220px] xl:translate-x-18 xl:-translate-y-30",
    isReversed: false,
  },
  {
    id: "winter-retreat",
    title: "Winter Retreat",
    season: "(Winter Quarter)",
    description:
      "Escape to the mountains in Big Bear for a fun-filled weekend at our annual Winter Retreat! Enjoy bonding with friends over food, games, and cozy vibes. Hit the slopes for some snowboarding or skiing, or just relax and take in the winter scenery. Don't miss out on this unforgettable experience!",
    mainImage: RetreatImg,
    clipartImage: RamenImg,
    clipartClasses:
      "absolute top-0 right-0 hidden w-[100px] -translate-x-8 -translate-y-16 md:flex md:w-[150px] lg:flex lg:translate-x-4 lg:-translate-y-20 xl:flex xl:w-[220px] xl:-translate-x-12 xl:-translate-y-30",
    isReversed: true,
  },
  {
    id: "culture-night",
    title: "Culture Night",
    season: "(Spring Quarter)",
    description:
      "Join our Big Little program and become part of the UCR NSU family! Bigs serve as mentors and friends, while Littles get the opportunity to connect and grow within the club. It's the perfect way to meet new people and build lasting friendships!",
    mainImage: CultureNightImg,
    clipartImage: OnigiriImg,
    clipartClasses:
      "absolute top-0 right-0 hidden w-[100px] translate-x-6 -translate-y-8 scale-x-[-1] rotate-25 md:flex md:w-[150px] lg:flex lg:translate-x-11 lg:-translate-y-10 xl:flex xl:w-[200px] xl:-translate-y-15",
    isReversed: false,
  },
  {
    id: "banquet",
    title: "Banquet",
    season: "(Spring Quarter)",
    description:
      "Wrap up the year with our NSU Banquet, a night of celebration, reflection, and appreciation for our amazing members. Join us as we honor our seniors, relive cherished memories, and recognize the incredible friendships formed throughout the year!",
    mainImage: BanquetImg,
    clipartImage: TaiyakiImg,
    clipartClasses:
      "absolute top-0 right-0 hidden w-[100px] -translate-x-8 -translate-y-16 rotate-50 md:flex md:w-[150px] lg:flex lg:translate-x-4 lg:-translate-y-20 xl:flex xl:w-[220px] xl:-translate-x-12 xl:-translate-y-30",
    isReversed: true,
  },
];

const EventTypes = () => {
  const renderEventSection = (event: EventData, index: number) => {
    const isLastEvent = index === eventData.length - 1;
    const containerClasses = `grid grid-cols-1 gap-5 ${
      event.isReversed ? "py-8 md:py-32" : ""
    } lg:grid-cols-2 ${isLastEvent ? "" : "mb-8"}`;

    // Use fadeFromLeft for 1st and 3rd events (index 0, 2), fadeFromRight for 2nd and 4th events (index 1, 3)
    const animationProps = index % 2 === 0 ? fadeFromLeft : fadeFromRight;

    if (event.isReversed) {
      return (
        <motion.div
          key={event.id}
          className={containerClasses}
          {...animationProps}
        >
          <div className="order-2 flex flex-col items-center justify-center md:row-span-2 lg:order-1">
            <div className="relative mx-16 flex w-[90%] justify-center">
              <Image
                src={event.mainImage}
                alt={`${event.title} Image Shadow`}
                className="w-full translate-x-2 translate-y-2 rounded-lg opacity-50 md:translate-x-4 md:translate-y-4"
              />
              <Image
                src={event.mainImage}
                alt={`${event.title} Image`}
                className="absolute z-10 w-full rounded-lg"
              />
            </div>
          </div>
          <div className="relative order-1 lg:order-1">
            <div className="overflow-hidden">
              <div
                className="border-nsu-red-200 relative ml-45 flex w-full flex-col rounded-lg border-4 md:ml-20 md:rounded-2xl md:border-6 2xl:ml-45"
                style={{ boxShadow: "inset 0 0 8px 5px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="ml-8 flex flex-col items-start py-1 md:py-4 lg:ml-10">
                  <div className="flex flex-col items-start">
                    <div className="font-urbanist text-nsu-red-200 text-xl font-extrabold md:text-4xl lg:text-4xl xl:text-5xl">
                      {event.title}
                    </div>
                    <div className="font-urbanist text-nsu-red-200 text-lg font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                      {event.season}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={event.clipartImage}
              alt={`${event.title} Clipart`}
              className={event.clipartClasses}
            />
          </div>{" "}
          <p className="text-urbanist order-3 mx-10 py-7 text-center text-xl/7 tracking-wide md:order-3 md:ml-10 md:w-9/10 md:py-10 md:text-2xl/8 lg:w-9/10 lg:text-end lg:text-2xl/10 xl:text-3xl/10">
            {event.description}
          </p>
        </motion.div>
      );
    }
    return (
      <motion.div
        key={event.id}
        className={containerClasses}
        {...animationProps}
      >
        <div className="order-1 mb-6 -ml-4 w-full md:order-1 md:mr-6 md:mb-0">
          <div
            className="border-nsu-red-200 relative flex w-6/10 flex-col rounded-lg border-4 md:w-8/10 md:rounded-2xl md:border-6"
            style={{ boxShadow: "inset 0 0 8px 5px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="ml-8 flex flex-col items-start py-1 md:py-4 lg:ml-10 xl:ml-20">
              <div className="flex flex-col items-start md:items-end">
                <div className="font-urbanist text-nsu-red-200 text-xl font-extrabold md:text-4xl lg:text-4xl xl:text-5xl">
                  {event.title}
                </div>
                <div className="font-urbanist text-nsu-red-200 text-lg font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                  {event.season}
                </div>
              </div>
            </div>
            <Image
              src={event.clipartImage}
              alt={`${event.title} Clipart`}
              className={event.clipartClasses}
            />
          </div>
        </div>
        <div className="order-2 flex flex-col items-center justify-center md:order-2 md:row-span-2">
          <div className="relative mx-16 flex w-[90%] justify-center">
            <Image
              src={event.mainImage}
              alt={`${event.title} Image Shadow`}
              className="w-full translate-x-2 translate-y-2 rounded-lg opacity-50 md:translate-x-4 md:translate-y-4"
            />
            <Image
              src={event.mainImage}
              alt={`${event.title} Image`}
              className="absolute z-10 w-full rounded-lg"
            />
          </div>
        </div>{" "}
        <p className="text-urbanist order-3 mx-10 py-7 text-center text-xl/7 tracking-wide md:order-3 md:ml-10 md:w-9/10 md:py-10 md:text-2xl/8 lg:w-9/10 lg:text-start lg:text-2xl/10 xl:ml-20 xl:text-3xl/10">
          {event.description}
        </p>
      </motion.div>
    );
  };

  return (
    <div className="mt-10a overflow-hidden pt-10">
      {eventData.map((event, index) => renderEventSection(event, index))}
    </div>
  );
};

export default EventTypes;
