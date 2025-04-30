import AboutSection1 from "@/components/about/AboutSection1";
import AboutSection2 from "@/components/about/AboutSection2";
import Socials from "@/components/about/Socials";
import AboutTitleSection from "@/components/about/TitleSection";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div>
      <Header headerString="ABOUT" />
      <AboutTitleSection />
      <AboutSection1 />
      <AboutSection2 />
      <Socials />
    </div>
  );
};

export default Page;
