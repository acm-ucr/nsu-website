import Gallery1 from "@/components/gallery/Gallery1";
import Gallery2 from "@/components/gallery/Gallery2";
import Header from "@/components/Header";

const Page = () => {
  return (
    <div>
      <Header headerString="GALLERY" />
      <Gallery1 />
      <Gallery2 />
    </div>
  );
};

export default Page;
