import BoardGrid from "@/components/board/BoardGrid";
import BoardTitleSection from "@/components/board/TitleSection";
import BoardCard from "@/components/board/BoardCard";
const Page = () => {
  return (
    <div>
      <BoardTitleSection />
      <BoardGrid />
      <BoardCard />
    </div>
  );
};

export default Page;
