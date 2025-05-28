import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
import nekoImg from "../../public/assets/nsu9.webp";
import kitsuneImg from "../../public/assets/nsu10.webp";
import inuImg from "../../public/assets/nsu11.webp";

const NotFound = () => {
  return (
    <div className="relative mt-40 mb-40 flex w-full flex-col items-center justify-center">
      <div className="absolute z-5 mt-105 duration-150 motion-safe:hover:scale-110">
        <Button variant="notfound" className="rounded-3xl p-11">
          <Link href="/">
            <div className="flex w-full text-4xl">HOME</div>
          </Link>
        </Button>
      </div>

      <Image src={inuImg} className="absolute mb-120 ml-[33%]" alt="dog icon" />

      <div className="border-nsu-red-200 relative w-[70%] overflow-hidden rounded-lg border-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="mt-10 flex w-full flex-col place-items-center">
          <Image
            src={nekoImg}
            className="absolute mt-36 ml-[80%]"
            alt="cat icon"
          />
          <Image
            src={kitsuneImg}
            className="absolute mt-54 mr-[80%]"
            alt="fox icon"
          />

          <div className="flex flex-col items-center justify-center">
            <div className="relative flex justify-center item-center">
            <h1
              className="relative text-nsu-tan-100 text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
              style={{ WebkitTextStroke: "1px #70161e; transform: translate(-2px, -2px);" }}
            >
              404
             </h1>
            <h1 className="absolute text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-nsu-red-200 text-center">404</h1>
            </div>
          </div>

          <h2 className="text-nsu-red-300 mb-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center px-2 whitespace-nowrap">
            page not found
          </h2> 
        </div>
      </div>
    </div>
    );
  }
export default NotFound;