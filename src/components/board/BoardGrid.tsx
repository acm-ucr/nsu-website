import BoardCard from "@/components/board/BoardCard";
import { BOARD } from "@/data/Board";

const BoardGrid = () => {
  return (
    <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {BOARD.map((item, index) => (
        <BoardCard
          key={index}
          image={item.image}
          name={item.name}
          role={item.role}
        />
      ))}
    </div>
  );
};

export default BoardGrid;
