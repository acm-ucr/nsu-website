import Image from "next/image";
import Umbrella from "@/public/assets/nsu0.webp";
import Lanterns from "@/public/assets/lanterns.webp";

const Landing = () => {
  return (
    <div className="relative flex w-full justify-center px-5 py-10">
      <div className="relative flex w-2/3 flex-row items-center">
        <div className="relative w-1/2">
          <Image src={Umbrella} alt="NSU Umbrella" />
        </div>
        <div className="relative space-y-3 pt-10">
          <div className="text-nsu-red-100 ml-20 text-4xl font-extrabold">
            Nikkei
          </div>
          <div className="text-nsu-red-100 ml-40 text-4xl font-extrabold">
            Student
          </div>
          <div className="text-nsu-red-100 ml-60 text-4xl font-extrabold">
            Union
          </div>
          <div className="text-nsu-black-100 border-nsu-red-100 mt-8 ml-2 border-b-4 py-2 pt-2 text-lg">
            NSU is a diverse Japanese socio-cultural club at UCR.
          </div>
        </div>
      </div>
      <div className="flex w-1/2 justify-center">
        <Image
          src={Lanterns}
          alt="NSU Lanterns"
          className="w-full max-w-sm object-contain"
        />
      </div>
    </div>
  );
};

export default Landing;
