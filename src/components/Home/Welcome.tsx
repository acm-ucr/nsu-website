import Image from "next/image";
import WelcImg from "@/public/hero.webp";

const Welcome = () => {
  return (
    <div>
      <div className="bg-nsu-red-200 mt-100 flex flex-row">
        <div className="mt-10 mb-10 w-1/2">
          <div className="relative mx-auto w-[90%]">
            <Image
              className="absolute z-0 mt-2 ml-4 opacity-50"
              src={WelcImg}
              alt="Welcome Image Background"
              fill
              style={{ objectFit: "cover", zIndex: 0 }}
            />
            <Image
              className="relative z-1 mb-8 opacity-100"
              src={WelcImg}
              alt="Welcome Image"
            />
          </div>
        </div>

        <div className="mr-10 ml-10 flex w-1/2 flex-col items-center justify-center text-center">
          <div className="font-nsu-main text-nsu-gray-100 flex text-center text-4xl font-bold">
            <p>Welcome to Nikkei Student Union!</p>
          </div>
          <div className="font-nsu-main text-nsu-gray-100 mt-10 mr-5 ml-5 flex text-center text-xl font-light">
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
