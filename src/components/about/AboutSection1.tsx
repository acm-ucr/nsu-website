import Image from "next/image";
import AboutImg2 from "../../../public/about/about2.webp";

const AboutSection1 = () => {
  return (
    <div>
      <div className="bg-nsu-red-200 my-2 h-[4px] w-1/2"></div>
    <div>
      <p className="font-nsu-main w-3/4 mt-5 mx-8 text-nsu-gray-300 text-base leading-5 tracking-normal">
        Nikkei Student Union (NSU) is a socio-cultural organization devoted to promoting, preserving, and educating the surrounding community and college-aged youth about the history of Japanese and Japanese Americans through cultural events and social activities.
      </p>
    </div>
    <div className="mt-7">
      <div className="flex justify-center mx-auto w-1/2 relative">
        <Image className="z-0 absolute opacity-50 mt-2 ml-4" src={AboutImg2} alt="About1 Image Background"/>
        <Image className="z-1 opacity-100 mb-9" src={AboutImg2} alt="About1 Image"/>
      </div>
    </div>
    </div>
  );
};

export default AboutSection1;
