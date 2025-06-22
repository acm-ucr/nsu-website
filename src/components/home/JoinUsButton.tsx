import Link from "next/link";

const JoinUsButton = () => {
  return (
    <div className="bg-nsu-red-200 flex w-1/6 items-center justify-center rounded-3xl p-5 duration-150 hover:scale-110">
      <Link href="/404" className="text-5xl font-bold text-white">
        JOIN US
      </Link>
    </div>
  );
};

export default JoinUsButton;
