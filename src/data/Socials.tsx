import {
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export const socialLanterns = [
  {
    icon: <FaDiscord className="size-24 md:size-18 lg:size-26 xl:size-34" />,
    href: "/",
    lineHeight: "h-1/8",
  },
  {
    icon: <FaTiktok className="size-24 md:size-18 lg:size-26 xl:size-34" />,
    href: "/",
    ml: "-ml-10 lg:-ml-15",
    lineHeight: "h-1/2",
  },
  {
    icon: <FaInstagram className="size-24 md:size-18 lg:size-26 xl:size-34" />,
    href: "/",
    lineHeight: "h-1/24",
  },
  {
    icon: <FaYoutube className="size-24 md:size-18 lg:size-26 xl:size-34" />,
    href: "/",
    ml: "-ml-10 lg:-ml-15",
    lineHeight: "h-4/6",
  },
  {
    icon: <SiLinktree className="size-24 md:size-18 lg:size-26 xl:size-34" />,
    href: "/",
    ml: "-ml-3 lg:-ml-5",
    lineHeight: "h-1/6",
  },
  {
    icon: <FaLinkedinIn className="size-24 md:size-18 lg:size-23 xl:size-30" />,
    href: "/",
    ml: "-ml-6 lg:-ml-10",
    lineHeight: "h-3/6",
  },
];
