import Link from "next/link";
import { socialLanterns } from "@/data/Socials";

const Socials = () => {
  return (
    // add px-4 on mobile
    <div className="my-16 flex w-full flex-col items-center px-4 md:px-0">
      <div className="text-nsu-red-200 text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl">
        SOCIALS
      </div>

      <div className="border-nsu-red-200 mt-6 w-full border-t-4 md:w-4/5 md:border-t-5 lg:border-t-6" />

      {/* desktop */}
      <div className="relative hidden flex-wrap justify-center md:flex md:h-110 md:w-[90%] lg:h-150 lg:w-[80%]">
        {socialLanterns.map(({ icon, href, ml, lineHeight }, i) => (
          <div key={i} className={`flex w-1/7 flex-col items-center ${ml}`}>
            <div
              className={`${lineHeight} border-r-4 lg:border-r-5 xl:border-r-6`}
            />
            <div className="border-nsu-red-200 -mb-0.5 h-1/35 w-1/3 rounded-full border-4 lg:-mb-1 lg:border-5" />
            <div className="border-nsu-red-200 flex aspect-square w-full items-center justify-center rounded-[2.5rem] border-4 lg:rounded-[3.5rem] lg:border-5 xl:rounded-[4.5rem]">
              <Link
                className="text-nsu-red-300 flex items-center duration-150 hover:scale-110"
                href={href}
                target="_blank"
              >
                {icon}
              </Link>
            </div>
            <div className="border-nsu-red-200 -mt-0.5 h-1/35 w-1/3 rounded-full border-4 lg:-mt-1 lg:border-5" />
          </div>
        ))}
      </div>

      {/* mobile (smaller gap, smaller icons) */}
      <div className="grid w-full grid-cols-2 gap-6 md:hidden">
        {socialLanterns.map(({ icon, href }, i) => (
          <div key={i} className="flex justify-center">
            <Link
              className="text-nsu-red-300 flex items-center text-2xl duration-150 hover:scale-110"
              href={href}
              target="_blank"
            >
              {icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
