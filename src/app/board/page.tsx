import BoardGrid from "@/components/board/BoardGrid";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div>
      <Header headerString="BOARD" />
      <BoardGrid />
    </div>
  );
}
