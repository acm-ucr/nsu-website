import BoardGrid from "@/components/board/BoardGrid";
import BoardTitleSection from "@/components/board/TitleSection";
import BoardCard from "@/components/board/BoardCard";
const Page = () => {
  return (
    <div>
      <BoardTitleSection />
      <BoardGrid />
      <BoardCard
        image="/board/president.webp"
        name="Cade Jordan"
        role="VICE PRESIDENT"
      />
    </div>
  );
};

export default Page;
