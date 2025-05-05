import Image from "next/image";
import About from "@/public/about/about1.webp";
import RedFish from "@/public/assets/nsu4.webp";
import BlackFish from "@/public/assets/nsu12.webp";
import Tree from "@/public/assets/nsu5.webp";

const AboutSection2 = () => {
  return (
    <div>
      <div className="bg-nsu-red-200 my-2 mt-10 ml-auto h-[4px] w-1/2"></div>
      <section className="bg-nsu-tan-100 relative flex flex-col items-start p-8">
        <div className="ml-auto w-3/4 text-right">
          <p className="font-nsu-main text-nsu-gray-300 text-3xl leading-9 tracking-normal">
            We host bi-weekly General Meetings where our NSU community gathers
            to learn more about Japanese American Culture, participate in
            engaging games and icebreaker activities, as well as hear more about
            upcoming events open to General Members.
          </p>
        </div>

        <div className="relative z-1 mt-20 mb-40 ml-[10%] w-2/5 max-w-xl min-w-[300px]">
          <div className="absolute top-[-40%] left-[-35%] z-0 w-[50%] min-w-[40px]">
            <Image src={BlackFish} alt="Black Fish" className="h-auto w-full" />
          </div>

          <div className="absolute top-[60%] right-[-38%] z-0 w-[50%] min-w-[40px]">
            <Image src={RedFish} alt="Red Fish" className="h-auto w-full" />
          </div>

          <Image
            src={About}
            alt="About Section 2 Main Image"
            className="relative z-2 rounded-[1/2vw]"
          />

          <Image
            src={About}
            alt="Ghost Image"
            className="absolute top-3 left-3 z-1 rounded-[1/2vw] opacity-50"
          />
        </div>

        <div className="absolute -right-30 mt-20">
          <Image src={Tree} alt="Tree" className="w-4/5" />
        </div>

        <div className="absolute -right-70 mt-100">
          <Image src={Tree} alt="Tree" className="w-3/5 rotate-300" />
        </div>
      </section>
    </div>
  );
};

export default AboutSection2;
