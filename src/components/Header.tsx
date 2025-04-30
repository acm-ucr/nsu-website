import Image from "next/image";
import fanImg from "../../public/assets/fan.webp";

const Header = ({ headerString }: { headerString: string }) => {
  return (
    <div className="relative mt-10 mb-5 flex flex-col items-center justify-center">
      <Image src={fanImg} alt="fan image" className="z-0 size-[25%]"></Image>

      <svg viewBox="0 0 500 1" className="absolute z-1 h-full w-1/4">
        <path
          id="curvedText"
          fill="none"
          stroke=""
          strokeWidth="2"
          d="M10,100 C200,-10 300,-10 490,100"
          className="overflow-visible"
        />
        <text className="fill-[#70161e]  text-[90px] font-bold [letter-spacing:5px]">
          <textPath
            href="#curvedText"
            startOffset="50%"
            textAnchor="middle"
            className=""
          >
            {headerString || "Header"}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Header;
