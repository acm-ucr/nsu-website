import Image from "next/image";
import About from "@/public/about/about1.webp";

const AboutSection2 = () => {
  return (
    <section className="bg-nsu-tan-100 relative flex flex-col items-start p-8 py-16">
      <div className="relative z-1 w-2/5">
        <Image
          src={About}
          alt="About Section 2 Main Image"
          className="relative z-2 rounded-[1/2vw]"
        />

        <Image
          src={About}
          alt="Ghost Image"
          className="absolute top-3 left-3 z-1 rounded-[1/2vw] opacity-40"
        />
      </div>
    </section>
  );
};

export default AboutSection2;
