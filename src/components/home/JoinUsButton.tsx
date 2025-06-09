import Link from "next/link";

const JoinUsButton = () => {
  return (
    <Link href="/JOINNSU">
      <div className="bg-nsu-red-200 flex w-full items-center justify-center rounded-[22px] p-3 duration-150 motion-safe:hover:scale-110">
        <div className="text-3xl font-bold text-white">JOIN US</div>
      </div>
    </Link>
  );
};

export default JoinUsButton;
