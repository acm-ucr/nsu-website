import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo2.webp";
import footerBG from "@/public/assets/footer-background.webp";
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
      <div className="absolute inset-0">
        <Image
          src={footerBG}
          alt="Background silhouette"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="bg-nsu-gray-300 bg-opacity-80 text-nsu-gray-100 relative px-4 py-6 sm:px-8">
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center space-x-3 md:mb-0">
            <Image src={logo} alt="UCN NSU Logo" className="h-auto w-auto" />
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-xl font-semibold">CONTACT US!</h2>
            <p className="mt-1 text-sm">
              900 University Ave.
              <br />
              Riverside, CA 92521
            </p>

            <div className="mt-3 flex justify-center space-x-4 md:justify-end">
              <Link href="/" target="_blank">
                <FaDiscord />
              </Link>
              <Link href="/" target="_blank">
                <FaTiktok />
              </Link>
              <Link href="/" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="/" target="_blank">
                <FaYoutube />
              </Link>
              <Link href="/" target="_blank">
                <SiLinktree />
              </Link>
              <Link href="/" target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link href="/" target="_blank">
                <FiMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
