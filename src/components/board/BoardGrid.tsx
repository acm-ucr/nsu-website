import BoardCard from "@/components/board/BoardCard";
import President from "@/public/board/president.webp";
import VP from "@/public/board/vp.webp";
import INC_REP from "@/public/board/inc_rep.webp";
import TREASURER from "@/public/board/treasurer.webp";
import SECRETARY from "@/public/board/secratary.webp";
import SOCIAL from "@/public/board/social.webp";
import EVENT from "@/public/board/event.webp";
import CULTURE from "@/public/board/culture.webp";
import CULTURE_NIGHT1 from "@/public/board/culture_night1.webp";
import CULTURE_NIGHT2 from "@/public/board/culture_night2.webp";
import PR from "@/public/board/pr.webp";
import SPORTS from "@/public/board/sports.webp";
import FUNDRAISING from "@/public/board/fundraising.webp";
import COMMUNITY_OUTREACH from "@/public/board/community_outreach.webp";
import HISTORIAN1 from "@/public/board/historian1.webp";
import HISTORIAN2 from "@/public/board/historian2.webp";

const BoardGrid = () => {
  return (
    <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <BoardCard image={President} name="Cade Jordan" role="PRESIDENT" />
      <BoardCard image={VP} name="Cassidy Yin" role="VICE PRESIDENT" />
      <BoardCard
        image={INC_REP}
        name="Reid Ikeda"
        role="INTERCOLLEGIATE NIKKEI (INC) REPRESENTATIVE"
      />
      <BoardCard image={TREASURER} name="Layna Lapikas" role="TREASURER" />
      <BoardCard image={SECRETARY} name="Nolan Cha" role="SECRETARY" />
      <BoardCard image={SOCIAL} name="Cole Miller" role="SOCIAL CHAIR" />
      <BoardCard image={EVENT} name="Olivia Maehara" role="EVENT COORDINATOR" />
      <BoardCard image={CULTURE} name="Jaydon Yuki" role="CULTURE CHAIR" />
      <BoardCard
        image={CULTURE_NIGHT1}
        name="Ashley Isa"
        role="CO-CULTURE NIGHT CHAIR"
      />
      <BoardCard
        image={CULTURE_NIGHT2}
        name="Kyoka Hiroshima"
        role="CO-CULTURE NIGHT CHAIR"
      />
      <BoardCard image={PR} name="Shelly Park" role="PUBLIC RELATIONS CHAIR" />
      <BoardCard
        image={SPORTS}
        name="Maddison Osako"
        role="SPORTS COORDINATOR"
      />
      <BoardCard
        image={FUNDRAISING}
        name="Blake Sakamoto"
        role="FUNDRAISING CHAIR"
      />
      <BoardCard
        image={COMMUNITY_OUTREACH}
        name="Kiana Sinn"
        role="COMMUNITY OUTREACH"
      />
      <BoardCard image={HISTORIAN1} name="Shelby Park" role="CO-HISTORIAN" />
      <BoardCard image={HISTORIAN2} name="Matthew Nakano" role="CO-HISTORIAN" />
    </div>
  );
};

export default BoardGrid;
