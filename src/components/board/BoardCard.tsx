"use client";

import React, { useEffect, useRef, useState } from "react";

const SCALE_FACTOR = 1;

const BoardCard = ({
  image = "",
  name = "",
  role = "",
}: {
  image?: string;
  name?: string;
  role?: string;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isMultiLine, setIsMultiLine] = useState(false);
  const [contentH, setContentH] = useState(0);
  const [nsubarH, setNsubarH] = useState(0);

  useEffect(() => {
    if (!textRef.current) return;
    const style = window.getComputedStyle(textRef.current);
    const lineHeight = parseFloat(style.lineHeight);
    const totalHeight = textRef.current.scrollHeight;
    const lines = totalHeight / lineHeight;

    if (lines > 2) {
      setIsMultiLine(true);
      setContentH(totalHeight + 20);
      setNsubarH(totalHeight * SCALE_FACTOR);
    } else {
      setIsMultiLine(false);
    }
  }, [name, role]);

  return (
    <div className="inline-block flex-none overflow-visible p-10 pb-10">
      <div
        className="relative"
        style={{
          width: "10vw",
          maxWidth: "217px",
          aspectRatio: "217 / 304",
        }}
      >
        <div className="outline-nsu-red-200 absolute inset-0 z-10 rounded-md shadow-lg outline-4 outline-solid" />

        <div
          className="absolute z-0 bg-cover bg-center shadow-md"
          style={{
            backgroundImage: `url(${image})`,
            left: "9%",
            top: "5%",
            width: "100%",
            height: "100%",
          }}
        />

        {isMultiLine ? (
          <div
            className="absolute z-20"
            style={{
              bottom: `-${contentH * 0.1}px`,
              left: 0,
              width: "110%",
              height: `${contentH}px`,
              transition: "height 0.3s ease, bottom 0.3s ease",
            }}
          >
            <div
              ref={textRef}
              className="bg-nsu-red-200 absolute z-10 flex w-full flex-col justify-center rounded-md px-2 shadow-[0_12px_24px_rgba(0,0,0,1)]"
              style={{
                top: "30%",
                height: "80%",
                overflowWrap: "break-word",
              }}
            >
              <div className="font-urbanist text-center text-xs font-bold text-white sm:text-xs md:text-sm">
                {name}
              </div>
              <div className="font-urbanist text-center text-xs text-white">
                {role}
              </div>
            </div>

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute z-0 drop-shadow-[0_4px_6px_rgba(0,0,0,1)] filter"
              style={{
                width: "23%",
                height: `${nsubarH}px`,
                left: "-15%",
                bottom: `-${nsubarH * 0.5}px`,
              }}
            >
              <image
                href="assets/nsunamebarflag.svg"
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
            </svg>

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute z-0 rotate-180 drop-shadow-[0_4px_6px_rgba(0,0,0,1)] filter"
              style={{
                width: "23%",
                height: `${nsubarH}px`,
                right: "-15%",
                bottom: `-${nsubarH * 0.5}px`,
              }}
            >
              <image
                href="assets/nsunamebarflag.svg"
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
            </svg>
          </div>
        ) : (
          <div
            className="absolute z-20"
            style={{
              bottom: "-10%",
              left: 0,
              width: "110%",
              height: "20%",
              transition: "height 0.3s ease",
            }}
          >
            <div
              ref={textRef}
              className="bg-nsu-red-200 absolute z-10 flex h-full w-full flex-col justify-center rounded-md px-2 shadow-[0_12px_24px_rgba(0,0,0,1)]"
              style={{ bottom: "20%", overflowWrap: "break-word" }}
            >
              <div className="font-urbanist text-center text-xs font-bold text-white sm:text-xs md:text-sm">
                {name}
              </div>
              <div className="font-urbanist text-center text-xs text-white sm:text-xs md:text-sm">
                {role}
              </div>
            </div>

            <div
              className="absolute z-0 bg-center bg-no-repeat drop-shadow-[0_4px_6px_rgba(0,0,0,1)] filter"
              style={{
                width: "23%",
                height: "90%",
                left: "-15%",
                bottom: "-5%",
                backgroundImage: `url('assets/nsunamebarflag.svg')`,
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                transition: "height 0.3s ease",
              }}
            />

            <div
              className="absolute z-0 rotate-180 bg-center bg-no-repeat drop-shadow-[0_4px_6px_rgba(0,0,0,1)] filter"
              style={{
                width: "23%",
                height: "90%",
                right: "-15%",
                bottom: "-5%",
                backgroundImage: `url('assets/nsunamebarflag.svg')`,
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                transition: "height 0.3s ease",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardCard;
