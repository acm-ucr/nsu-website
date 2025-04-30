import BoardGrid from "@/components/board/BoardGrid";
import BoardTitleSection from "@/components/board/TitleSection";
import BoardCard from "@/components/board/BoardCard";
import presidentImage from "@/public/board/president.webp";
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
