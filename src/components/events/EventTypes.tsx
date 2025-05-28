"use client";
import React from "react";
import Image from "next/image";
import DangoImg from "../../../public/events/tanghulu.webp";
import BigLittle from "../../../public/events/reveal.webp";
import RamenImg from "../../../public/events/ramen.webp";
import RetreatImg from "../../../public/events/winter_retreat.webp";
import OnigiriImg from "../../../public/events/onigiri.webp";
import CultureNightImg from "../../../public/events/culture_night.webp";
import TaiyakiImg from "../../../public/events/taiyaki.webp";
import BanquetImg from "../../../public/events/banquet.webp";

const EventTypes = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="order-1 mb-6 -ml-4 w-full md:order-1 md:mr-6 md:mb-0">
          <div
            className="border-nsu-red-200 relative flex w-6/10 flex-col rounded-lg border-4 md:w-8/10 md:rounded-2xl md:border-6"
            style={{ boxShadow: "inset 0 0 8px 5px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="ml-8 flex flex-col items-start py-1 md:py-4 lg:ml-10 xl:ml-20">
              <div className="flex flex-col items-start md:items-end">
                <div className="font-urbanist text-nsu-red-200 text-xl font-extrabold md:text-4xl lg:text-4xl xl:text-5xl">
                  NSU Big/Little
                </div>
                <div className="font-urbanist text-nsu-red-200 text-lg font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                  (Fall Quarter)
                </div>
              </div>
            </div>
            <Image
              src={DangoImg}
              alt="Dango Clipart"
              className="absolute top-0 right-0 w-[100px] -translate-y-16 translate-x-12 md:w-[150px] lg:-translate-y-20 lg:translate-x-16 xl:w-[220px] xl:-translate-y-30 xl:translate-x-18"
            />
          </div>
        </div>

        <div className="order-2 md:order-2 md:row-span-2">
          <div className="relative mx-16 flex w-auto justify-center">
            <Image
              src={BigLittle}
              alt="Big Little Reveal Image Shadow"
              className="translate-x-2 translate-y-2 rounded-lg opacity-50 md:translate-x-4 md:translate-y-4"
            />
            <Image
              src={BigLittle}
              alt="Big Little Reveal Image"
              className="absolute z-10 rounded-lg"
            />
          </div>
        </div>

        <p className="text-urbanist order-3 mx-10 py-7 text-center text-xl/8 tracking-wide md:order-3 md:ml-10 md:w-9/10 md:py-10 md:text-2xl/8 lg:w-9/10 lg:text-start lg:text-3xl/14 xl:ml-20 xl:text-4xl/14">
          Join our Big Little program and become part of the UCR NSU family!
          Bigs serve as mentors and friends, while Littles get the opportunity
          to connect and grow within the club. It's the perfect way to meet new
          people and build lasting friendships!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 py-8 md:py-32 lg:grid-cols-2">
        <div className="order-2 md:row-span-2 lg:order-1">
          <div className="relative mx-16 flex justify-center">
            <Image
              src={RetreatImg}
              alt="Winter Retreat Image Shadow"
              className="w-full translate-x-2 translate-y-2 rounded-lg opacity-50 md:translate-x-4 md:translate-y-4"
            />
            <Image
              src={RetreatImg}
              alt="Winter Retreat Image"
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
                    Winter Retreat
                  </div>
                  <div className="font-urbanist text-nsu-red-200 text-lg font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    (Winter Quarter)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={RamenImg}
            alt="Ramen Clipart"
            className="absolute top-0 right-0 w-[100px] -translate-x-8 -translate-y-16 md:w-[150px] lg:-translate-y-20 lg:translate-x-4 xl:w-[220px] xl:-translate-x-12 xl:-translate-y-30"
          />
        </div>

        <p className="text-urbanist order-3 mx-10 py-7 text-center text-xl/8 tracking-wide md:w-9/10 md:py-10 md:text-2xl/8 lg:order-3 lg:w-9/10 lg:text-end lg:text-3xl/14 xl:text-4xl/14">
          Escape to the mountains in Big Bear for a fun-filled weekend at our
          annual Winter Retreat! Enjoy bonding with friends over food, games,
          and cozy vibes. Hit the slopes for some snowboarding or skiing, or
          just relax and take in the winter scenery. Don’t miss out on this
          unforgettable experience!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="order-1 mb-6 -ml-4 w-full md:order-1 md:mr-6 md:mb-0">
          <div
            className="border-nsu-red-200 relative flex w-6/10 flex-col rounded-lg border-4 md:w-8/10 md:rounded-2xl md:border-6"
            style={{ boxShadow: "inset 0 0 8px 5px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="ml-8 flex flex-col items-start py-1 md:py-4 lg:ml-10 xl:ml-20">
              <div className="flex flex-col items-start md:items-end">
                <div className="font-urbanist text-nsu-red-200 text-xl font-extrabold md:text-4xl lg:text-4xl xl:text-5xl">
                  Culture Night
                </div>
                <div className="font-urbanist text-nsu-red-200 text-lg font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                  (Spring Quarter)
                </div>
              </div>
            </div>
            <Image
              src={OnigiriImg}
              alt="Onigiri Clipart"
              className="absolute top-0 right-0 w-[100px] -translate-y-8 translate-x-6 scale-x-[-1] rotate-25 md:w-[150px] lg:-translate-y-10 lg:translate-x-8 xl:w-[200px] xl:-translate-y-15"
            />
          </div>
        </div>

        <div className="order-2 md:order-2 md:row-span-2">
          <div className="relative mx-16 flex w-auto justify-center">
            <Image
              src={CultureNightImg}
              alt="Culture Night Image Shadow"
              className="w-full translate-x-2 translate-y-2 rounded-lg opacity-50 md:translate-x-4 md:translate-y-4"
            />
            <Image
              src={CultureNightImg}
              alt="Culture Night Image"
              className="absolute z-10 w-full rounded-lg"
            />
          </div>
        </div>

        <p className="text-urbanist order-3 mx-10 py-7 text-center text-xl/8 tracking-wide md:order-3 md:ml-10 md:w-9/10 md:py-10 md:text-2xl/8 lg:w-9/10 lg:text-start lg:text-3xl/14 xl:ml-20 xl:text-4xl/14">
          Join our Big Little program and become part of the UCR NSU family!
          Bigs serve as mentors and friends, while Littles get the opportunity
          to connect and grow within the club. It's the perfect way to meet new
          people and build lasting friendships!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 py-8 md:py-32 lg:grid-cols-2">
        <div className="order-2 md:row-span-2 lg:order-1">
          <div className="relative mx-16 flex justify-center">
            <Image
              src={BanquetImg}
              alt="Banquet Image Shadow"
              className="w-full translate-x-2 translate-y-2 rounded-lg opacity-50 md:translate-x-4 md:translate-y-4"
            />
            <Image
              src={BanquetImg}
              alt="Banquet Image"
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
                    Banquet
                  </div>
                  <div className="font-urbanist text-nsu-red-200 text-lg font-extrabold md:text-2xl lg:text-2xl xl:text-3xl">
                    (Spring Quarter)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={TaiyakiImg}
            alt="Taiyaki Clipart"
            className="absolute top-0 right-0 w-[100px] -translate-x-8 -translate-y-16 rotate-50 md:w-[150px] lg:-translate-y-20 lg:translate-x-4 xl:w-[220px] xl:-translate-x-12 xl:-translate-y-30"
          />
        </div>

        <p className="text-urbanist order-3 mx-10 py-7 text-center text-xl/8 tracking-wide md:w-9/10 md:py-10 md:text-2xl/8 lg:order-3 lg:w-9/10 lg:text-end lg:text-3xl/14 xl:text-4xl/14">
          Wrap up the year with our NSU Banquet, a night of celebration,
          reflection, and appreciation for our amazing members. Join us as we
          honor our seniors, relive cherished memories, and recognize the
          incredible friendships formed throughout the year!{" "}
        </p>
      </div>
    </div>
  );
};

export default EventTypes;
