import Gallery1 from "@/components/photos/Carousel";
import Gallery2 from "@/components/photos/Gallery2";
import PhotosTitleSection from "@/components/photos/TitleSection";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div>
      <Header headerString="GALLERY" />
      <PhotosTitleSection />
      <Gallery1 />
      <Gallery2 />
    </div>
  );
};

export default Page;
