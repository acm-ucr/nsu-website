import Image from "next/image";
import Umbrella from "@/public/assets/nsu0.webp";
import Lanterns from "@/public/assets/lanterns.webp";

const Landing = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="relative flex w-2/3 flex-row">
        <div className="absolute w-5/12 px-10">
          <Image src={Umbrella} alt="NSU Umbrella" />
        </div>
        <div className="flex flex-col space-y-3 px-20 pt-20">
          <div className="ml-30">
            <h1
              className="text-nsu-tan-100 absolute top-[0.87em] z-0 ml-1 text-8xl font-extrabold"
              style={{ WebkitTextStroke: "1px #70161e" }}
            >
              Nikkei
            </h1>
            <h1 className="text-nsu-red-200 relative z-10 text-8xl font-extrabold">
              Nikkei
            </h1>
          </div>
          <div className="ml-60">
            <h1
              className="text-nsu-tan-100 absolute top-[1.99em] z-0 ml-1 text-8xl font-extrabold"
              style={{ WebkitTextStroke: "1px #70161e" }}
            >
              Student
            </h1>
            <h1 className="text-nsu-red-200 relative z-10 text-8xl font-extrabold">
              Student
            </h1>
          </div>
          <div className="ml-110">
            <h1
              className="text-nsu-tan-100 absolute top-[3.12em] z-0 ml-1 text-8xl font-extrabold"
              style={{ WebkitTextStroke: "1px #70161e" }}
            >
              Union
            </h1>
            <h1 className="text-nsu-red-200 relative z-10 text-8xl font-extrabold">
              Union
            </h1>
          </div>
          <div className="text-nsu-black-100 border-nsu-red-200 mt-10 border-b-4 py-2 text-center text-[1.68rem]">
            NSU is a diverse Japanese socio-cultural club at UCR.
          </div>
        </div>
      </div>
      <div className="flex w-1/2 justify-center">
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
