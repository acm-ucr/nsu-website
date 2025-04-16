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

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="bg-nsu-gray-300 bg-opacity-80 text-nsu-gray-100 relative px-4 py-6 sm:px-8">
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center space-x-3 md:mb-0">
            <Image src={logo} alt="UCN NSU Logo" className="h-auto w-auto" />
          </div>

          <div className="flex flex-col gap-4 text-center md:text-right">
            <div className="">
              <h2 className="text-xl font-bold">CONTACT US!</h2>
              <p className="text-md mt-1">
                900 University Ave.
                <br />
                Riverside, CA 92521
              </p>
            </div>

            <hr />

            <div className="mt-3 flex justify-center space-x-4 md:justify-end">
              <Link href="/" target="_blank">
                <FaDiscord className="size-8" />
              </Link>
              <Link href="/" target="_blank">
                <FaTiktok className="size-8" />
              </Link>
              <Link href="/" target="_blank">
                <FaInstagram className="size-8" />
              </Link>
              <Link href="/" target="_blank">
                <FaYoutube className="size-8" />
              </Link>
              <Link href="/" target="_blank">
                <SiLinktree className="size-8" />
              </Link>
              <Link href="/" target="_blank">
                <FaLinkedinIn className="size-8" />
              </Link>
              <Link href="/" target="_blank">
                <FiMail className="size-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
