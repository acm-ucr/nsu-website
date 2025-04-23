import Image from "next/image";
import Link from "next/link";
import NSULogo from "@/public/assets/logo1.webp";

const NavBar = () => {
  return (
    <div className="relative flex w-full flex-row items-center bg-black font-bold">
      <Link href="/" className="flex flex-row items-center">
        <Image src={NSULogo} alt="NSU_LOGO" className="m-2 flex w-auto" />
        <div className="px-4 text-5xl text-white">NSU</div>
      </Link>
      <div className="ml-auto flex flex-row gap-12 text-4xl text-white">
        <Link
          href="/about"
          className="hover:text-nsu-gray-200 no-underline duration-150 hover:scale-110 hover:underline"
        >
          ABOUT
        </Link>
        <Link
          href="/board"
          className="hover:text-nsu-gray-200 no-underline duration-150 hover:scale-110 hover:underline"
        >
          BOARD
        </Link>
        <Link
          href="/event"
          className="hover:text-nsu-gray-200 no-underline duration-150 hover:scale-110 hover:underline"
        >
          EVENTS
        </Link>
        <Link
          href="/gallery"
          className="hover:text-nsu-gray-200 no-underline duration-150 hover:scale-110 hover:underline"
        >
          GALLERY
        </Link>
      </div>
      <Link
        href="/404"
        className="bg-nsu-red-200 mx-6 rounded-[16px] p-4 text-4xl text-white duration-150 hover:scale-110"
      >
        JOIN
      </Link>
    </div>
  );
};

export default NavBar;
