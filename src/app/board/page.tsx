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
      <BoardCard
        image="/board/inc_rep.webp"
        name="Reid Ikeda"
        role="INTERCOLLEGIATE NIKKEI (INC) REPRESENTATIVE"
      />
    </div>
  );
};

export default Page;
