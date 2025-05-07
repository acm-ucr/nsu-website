import Image from "next/image";
import Umbrella from "@/public/assets/nsu0.webp";
import Lanterns from "@/public/assets/lanterns.webp";

const Landing = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-2/3 flex-row">
        <div className="absolute w-5/12 md:px-10">
          <Image src={Umbrella} alt="NSU Umbrella" />
        </div>
        <div className="flex flex-col md:space-y-3 md:px-20 md:pt-20">
          <div className="mt-10 ml-5 text-4xl font-extrabold md:ml-30 md:text-8xl">
            <h1
              className="text-nsu-tan-100 absolute z-0 mt-[2px] ml-[2px] md:mt-1 md:ml-1"
              style={{ WebkitTextStroke: "1px #70161e" }}
            >
              Nikkei
            </h1>
            <h1 className="text-nsu-red-200 relative z-10">Nikkei</h1>
          </div>
          <div className="ml-15 text-4xl font-extrabold md:ml-60 md:text-8xl">
            <h1
              className="text-nsu-tan-100 absolute z-0 mt-[2px] ml-[2px] md:mt-1 md:ml-1"
              style={{ WebkitTextStroke: "1px #70161e" }}
            >
              Student
            </h1>
            <h1 className="text-nsu-red-200 relative z-10">Student</h1>
          </div>
          <div className="ml-35 text-4xl font-extrabold md:ml-110 md:text-8xl">
            <h1
              className="text-nsu-tan-100 absolute z-0 mt-[2px] ml-[2px] md:mt-1 md:ml-1"
              style={{ WebkitTextStroke: "1px #70161e" }}
            >
              Union
            </h1>
            <h1 className="text-nsu-red-200 relative z-10">Union</h1>
          </div>
          <div className="text-nsu-black-100 border-nsu-red-200 mt-10 border-b-4 py-2 text-center md:text-[1.68rem]">
            NSU is a diverse Japanese socio-cultural club at UCR.
          </div>
        </div>
      </div>
      <div className="w-1/2 justify-center">
        <Image
          src={Lanterns}
          alt="NSU Lanterns"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Landing;
