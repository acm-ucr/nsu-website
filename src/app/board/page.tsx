import BoardGrid from "@/components/board/BoardGrid";
import BoardTitleSection from "@/components/board/TitleSection";
import BoardCard from "@/components/board/BoardCard";
import presidentImage from "@/public/board/president.webp";

export default function Page() {
  return (
    <div>
      <BoardTitleSection />
      <BoardGrid />
      <BoardCard
        image={presidentImage}
        name="Cade Jordan"
        role="VICE PRESIDENT"
      />
    </div>
  );
}
