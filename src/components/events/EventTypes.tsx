"use client";
import React from "react";
import Image from "next/image";
import TanghuluImg from "../../../public/events/tanghulu.webp";
import BigLittle from "../../../public/events/reveal.webp";
import RamenImg from "../../../public/events/ramen.webp";
import RetreatImg from "../../../public/events/winter_retreat.webp";

const EventTypes = () => {
  return (
    <div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col">
          <div
            className="border-nsu-red-200 relative -ml-4 flex w-3xl flex-col rounded-2xl border-6 pt-6 pb-5"
            style={{
              boxShadow: "inset 0 0 8px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Image
              src={TanghuluImg}
              alt="Tanghulu Clipart"
              width={220}
              height={220}
              className="absolute top-0 right-0 -translate-y-34 translate-x-18"
            />
            <div className="ml-14 flex flex-col items-start">
              <div className="flex flex-col items-end">
                <div className="font-urbanist text-nsu-red-200 text-5xl font-extrabold">
                  Big Little Program
                </div>
                <div className="font-urbanist text-nsu-red-200 text-3xl font-extrabold">
                  (Fall Quarter)
                </div>
              </div>
            </div>
          </div>

          <p className="text-urbanist ml-20 flex w-240 flex-col py-14 text-6xl font-light">
            Join our Big Little program and become part of the UCR NSU family!
            Bigs serve as mentors and friends, while Littles get the opportunity
            to connect and grow within the club. It’s the perfect way to meet
            new people and build lasting friendships!
          </p>
        </div>

        <div className="relative flex h-2/5 w-2/5 justify-center">
          <Image
            src={BigLittle}
            alt="Big Little Reveal Image Shadow"
            width={750}
            height={600}
            className="absolute rounded-lg opacity-50"
            style={{
              transform: "translate(10px, 10px)",
            }}
          />
          <Image
            src={BigLittle}
            alt="Big Little Reveal Image"
            height={600}
            className="absolute rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-12">
        <div className="ml-30 flex pt-12">
          <Image
            src={RetreatImg}
            alt="Winter Retreat Image Shadow"
            width={850}
            height={600}
            className="absolute rounded-lg opacity-50"
            style={{
              transform: "translate(10px, 10px)",
            }}
          />
          <Image
            src={RetreatImg}
            alt="Winter Retreat Image"
            width={850}
            height={600}
            className="absolute rounded-lg"
          />
        </div>

        <div className="flex w-full justify-end pt-6">
          <div className="flex w-3xl flex-col">
            <div
              className="border-nsu-red-200 relative -mr-4 flex flex-col rounded-2xl border-6 pt-6 pr-6 pb-5"
              style={{
                boxShadow: "inset 0 0 8px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src={RamenImg}
                alt="Ramen Clipart"
                width={240}
                height={240}
                className="absolute top-0 right-0 -translate-y-30"
              />
              <div className="ml-14 flex flex-col items-start">
                <div className="flex flex-col items-start">
                  <div className="font-urbanist text-nsu-red-200 text-5xl font-extrabold">
                    Winter Retreat
                  </div>
                  <div className="font-urbanist text-nsu-red-200 text-3xl font-extrabold">
                    (Winter Quarter)
                  </div>
                </div>
              </div>
            </div>

            <p className="text-urbanist mr-20 w-220 self-end py-14 text-right text-6xl font-light">
              Escape to the mountains in Big Bear for a fun-filled weekend at
              our annual Winter Retreat! Enjoy bonding with friends over food,
              games, and cozy vibes. Hit the slopes for some snowboarding or
              skiing, or just relax and take in the winter scenery. Don’t miss
              out on this unforgettable experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTypes;
