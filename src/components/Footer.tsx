import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo2.webp";
import footerBG from "@/public/assets/footer-background.webp";
import { FaInstagram, FaDiscord, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src={footerBG}
          alt="Background silhouette"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative bg-nsu-gray-300 bg-opacity-80 text-nsu-gray-100 py-6 px-4 sm:px-8">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image
              src={logo}
              alt="UCN NSU Logo"
              className="h-auto w-auto"
            />
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-xl font-semibold">CONTACT US!</h2>
            <p className="text-sm mt-1">
              900 University Ave.<br />
              Riverside, CA 92521
            </p>

            <div className="flex justify-center md:justify-end space-x-4 mt-3">
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
