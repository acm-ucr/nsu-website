import AboutSection1 from "@/components/about/AboutSection1";
import AboutSection2 from "@/components/about/AboutSection2";
import Socials from "@/components/about/Socials";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header headerString="ABOUT" />
      <AboutSection1 />
      <AboutSection2 />
      <Socials />
    </>
  );
};

export default Page;
