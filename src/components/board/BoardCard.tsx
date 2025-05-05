"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

// Only accept statically imported images via StaticImageData
interface BoardCardProps {
  image: StaticImageData;
  name: string;
  role: string;
}

const BoardCard = ({ image, name, role }: BoardCardProps) => {
  return (
    <div className="inline-block flex-none overflow-visible p-10 pb-10">
      <div className="relative m-auto aspect-[217/304] w-[28vw] max-w-[217px] md:w-[20vw] lg:w-[16vw]">
        <div className="outline-nsu-red-200 absolute inset-0 z-10 rounded-md shadow-lg outline-3 outline-solid" />

        <div className="absolute top-[5%] left-[9%] z-0 h-full w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-md object-cover shadow-md"
          />
        </div>

        <div className="absolute bottom-[-10%] left-0 z-20 h-[20%] w-[110%]">
          <div className="bg-nsu-red-200 absolute top-[5%] z-10 flex h-auto w-full flex-col justify-center rounded-md px-2 break-words shadow-[0_12px_24px_rgba(0,0,0,1)]">
            <div className="font-urbanist text-center text-xs font-bold text-white md:text-sm lg:text-2xl">
              {name}
            </div>
            <div className="font-urbanist text-center text-xs text-white sm:text-xs md:text-sm">
              {role}
            </div>
          </div>

          <div className="absolute bottom-[-5%] left-[-15%] z-0 h-[90%] w-[23%] bg-[url('/assets/nsunamebarflag.svg')] bg-contain bg-bottom bg-no-repeat drop-shadow-[0_4px_6px_rgba(0,0,0,1)] filter" />
          <div className="absolute right-[-15%] bottom-[-5%] z-0 h-[90%] w-[23%] rotate-180 bg-[url('/assets/nsunamebarflag.svg')] bg-contain bg-bottom bg-no-repeat drop-shadow-[0_4px_6px_rgba(0,0,0,1)] filter" />
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
