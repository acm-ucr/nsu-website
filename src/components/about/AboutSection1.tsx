import Image from "next/image";
import AboutImg2 from "../../../public/about/about2.webp";

const AboutSection1 = () => {
  return (
    <div>
      <div className="bg-nsu-red-200 my-2 h-[4px] w-1/2"></div>
      <div>
        <p className="font-nsu-main text-nsu-gray-300 mx-8 mt-5 w-3/4 text-base leading-5 tracking-normal">
          Nikkei Student Union (NSU) is a socio-cultural organization devoted to
          promoting, preserving, and educating the surrounding community and
          college-aged youth about the history of Japanese and Japanese
          Americans through cultural events and social activities.
        </p>
      </div>
      <div className="mt-6">
        <div className="relative mx-auto flex w-4/10 justify-center">
          <Image
            className="absolute z-0 mt-2 ml-4 opacity-50"
            src={AboutImg2}
            alt="About1 Image Background"
          />
          <Image
            className="z-1 mb-8 opacity-100"
            src={AboutImg2}
            alt="About1 Image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
