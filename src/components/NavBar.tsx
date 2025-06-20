"use client";

import Image from "next/image";
import Link from "next/link";
import NSULogo from "@/public/assets/logo1.webp";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAVBAR = [
  {
    href: "/about",
    title: "ABOUT",
  },
  {
    href: "/board",
    title: "BOARD",
  },
  {
    href: "/events",
    title: "EVENTS",
  },
  {
    href: "/gallery",
    title: "GALLERY",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  return (
    <div className="relative flex w-full flex-row items-center bg-black font-bold">
      {/*Desktop*/}
      <div className="hidden w-full md:flex">
        <Link href="/" className="flex flex-row items-center">
          <Image src={NSULogo} alt="NSU_LOGO" className="m-2 w-1/3 lg:w-auto" />
          <div className="px-4 text-3xl text-white lg:text-4xl">NSU</div>
        </Link>
        <div className="ml-auto flex items-center justify-center gap-4 text-2xl text-white lg:gap-8 lg:text-3xl">
          {NAVBAR.map(({ href, title }, index) => (
            <div key={index} className="relative">
              <Link
                href={href}
                className={`${
                  pathName === href
                    ? "text-nsu-red-100 underline"
                    : "hover:text-nsu-gray-200 no-underline duration-150 hover:scale-110 hover:underline"
                }`}
              >
                {title}
              </Link>
            </div>
          ))}
          <Link
            href="/404"
            className="bg-nsu-red-200 mr-6 rounded-lg p-[2%] text-white duration-150 hover:scale-110 lg:rounded-[16px] lg:text-3xl"
          >
            JOIN
          </Link>
        </div>
      </div>

      {/*Mobile*/}
      <div className="flex w-full items-center md:hidden">
        <Link href="/" className="relative flex flex-row items-center">
          <Image src={NSULogo} alt="NSU_LOGO" className="m-2 flex w-1/6" />
          <div className="px-2 text-lg text-white">NSU</div>
        </Link>
        <Menu
          className="mr-2 ml-auto cursor-pointer text-white"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="absolute z-20 mt-54 flex w-full flex-col items-center justify-center bg-black pb-4 text-xl font-medium text-white">
          <Link
            href="/"
            className={`${
              pathName === "/"
                ? "text-nsu-red-100 underline"
                : "hover:text-nsu-gray-200 no-underline duration-150 hover:scale-110 hover:underline"
            }`}
          >
            HOME
          </Link>
          {NAVBAR.map(({ href, title }, index) => (
            <div key={index} className="">
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathName === href
                    ? "text-nsu-red-100 underline"
                    : "hover:text-nsu-gray-200 no-underline duration-150 hover:scale-110 hover:underline"
                }`}
              >
                {title}
              </Link>
            </div>
          ))}
          <Link href="/404">JOIN</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
