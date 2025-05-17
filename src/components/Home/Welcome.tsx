import Image from "next/image";
import WelcImg from "@/public/hero.webp";

const Welcome = () => {
  return (
    <div>
      <div className="bg-nsu-red-200 flex flex-col place-items-center justify-center md:flex-row">
        <div className="mt-15 mb-15 hidden w-1/2 md:flex">
          <div className="relative mx-auto w-[90%] max-w-xl">
            <Image
              className="relative top-3 left-3 z-0 h-auto w-full opacity-50"
              src={WelcImg}
              alt="Welcome Image Background"
            />
            <Image
              className="absolute z-1 mb-8 h-auto w-full opacity-100"
              src={WelcImg}
              alt="Welcome Image"
              fill
            />
          </div>
        </div>

        <div className="mt-5 mr-10 ml-10 flex flex-col items-center justify-center text-center md:mt-0 md:w-1/2">
          <div className="font-nsu-main text-nsu-gray-100 flex text-center text-xl font-bold md:text-4xl">
            <p>Welcome to Nikkei Student Union!</p>
          </div>

          <div className="relative mt-3 mb-3 flex w-3/4 place-items-center justify-center md:hidden">
            <Image
              className="border-nsu-gray-300 absolute z-1 mt-2 ml-2 w-full rounded-lg border-1 opacity-50"
              src={WelcImg}
              alt="Welcome Image Background"
            />
            <Image
              className="border-nsu-gray-300 z-5 w-full rounded-lg border-1 opacity-100"
              src={WelcImg}
              alt="Welcome Image"
            />
          </div>

          <div className="font-nsu-main text-nsu-gray-100 text-s mr-5 mb-5 ml-5 flex text-center font-light md:mt-10 md:mb-0 md:text-xl">
            <p>
              We are a community of students passionate about celebrating and
              preserving Japansese and Japanese American culture. Whether you're
              looking to connect with others, learn more about Japanese culture,
              or just have fun at our events, NSU is the perfect place to do so!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
