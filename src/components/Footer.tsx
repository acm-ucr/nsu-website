"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo2.webp";
import {
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  const [discordHover, setDiscordHover] = useState(false);
  const [tiktokHover, setTiktokHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [youtubeHover, setYoutubeHover] = useState(false);
  const [linktreeHover, setLinktreeHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);

  const iconHover = [
    "h-8",
    "w-8",
    "transform",
    "transition-transform",
    "duration-200",
  ].join(" ");

  const discordHoverClass = [
    iconHover,
    discordHover ? "scale-110" : "scale-100",
  ].join(" ");
  const tiktokHoverClass = [
    iconHover,
    tiktokHover ? "scale-110" : "scale-100",
  ].join(" ");
  const instagramHoverClass = [
    iconHover,
    instagramHover ? "scale-110" : "scale-100",
  ].join(" ");
  const youtubeHoverClass = [
    iconHover,
    youtubeHover ? "scale-110" : "scale-100",
  ].join(" ");
  const linktreeHoverClass = [
    iconHover,
    linktreeHover ? "scale-110" : "scale-100",
  ].join(" ");
  const linkedinHoverClass = [
    iconHover,
    linkedinHover ? "scale-110" : "scale-100",
  ].join(" ");
  const emailHoverClass = [
    iconHover,
    emailHover ? "scale-110" : "scale-100",
  ].join(" ");

  return (
    <footer className="relative w-full">
      <div className="h-55 w-full bg-[url('/assets/footer.svg')] bg-[length:450px] bg-clip-content bg-top bg-repeat-x contrast-150 [-ms-interpolation-mode:nearest-neighbor] [image-rendering:crisp-edges]" />

      <div className="bg-nsu-gray-300 bg-opacity-80 text-nsu-gray-100 relative px-4 py-6 sm:px-8">
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center space-x-3 md:mb-0">
            <Image src={logo} alt="UCR NSU Logo" className="h-auto w-auto" />
          </div>

          <div className="flex flex-col gap-4 text-center md:text-right">
            <div>
              <h2 className="text-xl font-bold">CONTACT US!</h2>
              <p className="text-md mt-1">
                900 University Ave.
                <br />
                Riverside, CA 92521
              </p>
            </div>

            <hr className="border-nsu-gray-100 opacity-50" />

            <div className="mt-3 flex justify-center space-x-4 md:justify-end">
              <div
                onMouseEnter={() => setDiscordHover(true)}
                onMouseLeave={() => setDiscordHover(false)}
              >
                <Link href="/" target="_blank" aria-label="Discord">
                  <FaDiscord className={discordHoverClass} />
                </Link>
              </div>

              <div
                onMouseEnter={() => setTiktokHover(true)}
                onMouseLeave={() => setTiktokHover(false)}
              >
                <Link href="/" target="_blank" aria-label="TikTok">
                  <FaTiktok className={tiktokHoverClass} />
                </Link>
              </div>

              <div
                onMouseEnter={() => setInstagramHover(true)}
                onMouseLeave={() => setInstagramHover(false)}
              >
                <Link href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram className={instagramHoverClass} />
                </Link>
              </div>

              <div
                onMouseEnter={() => setYoutubeHover(true)}
                onMouseLeave={() => setYoutubeHover(false)}
              >
                <Link href="/" target="_blank" aria-label="YouTube">
                  <FaYoutube className={youtubeHoverClass} />
                </Link>
              </div>

              <div
                onMouseEnter={() => setLinktreeHover(true)}
                onMouseLeave={() => setLinktreeHover(false)}
              >
                <Link href="/" target="_blank" aria-label="Linktree">
                  <SiLinktree className={linktreeHoverClass} />
                </Link>
              </div>

              <div
                onMouseEnter={() => setLinkedinHover(true)}
                onMouseLeave={() => setLinkedinHover(false)}
              >
                <Link href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedinIn className={linkedinHoverClass} />
                </Link>
              </div>

              <div
                onMouseEnter={() => setEmailHover(true)}
                onMouseLeave={() => setEmailHover(false)}
              >
                <Link href="mailto:someone@example.com" aria-label="Email">
                  <FiMail className={emailHoverClass} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
