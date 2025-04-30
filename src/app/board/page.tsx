import BoardGrid from "@/components/board/BoardGrid";
import BoardTitleSection from "@/components/board/TitleSection";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div>
      <Header headerString="BOARD" />
      <BoardTitleSection />
      <BoardGrid />
    </div>
  );
}
