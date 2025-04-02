import Gallery1 from "@/components/photos/Gallery1";
import Gallery2 from "@/components/photos/Gallery2";
import PhotosTitleSection from "@/components/photos/TitleSection";

const Page = () => {
  return (
    <div>
      <PhotosTitleSection />
      <Gallery1 />
      <Gallery2 />
    </div>
  );
};

export default Page;
