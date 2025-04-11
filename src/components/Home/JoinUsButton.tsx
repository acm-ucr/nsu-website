import Link from "next/link";

const JoinUsButton = () => {
  return (
    <div className="bg-nsu-red-200 flex w-full items-center rounded-lg p-3 duration-150 motion-safe:hover:scale-110">
      <Link href="/JOINNSU" className="text-3xl font-bold text-white">
        JOIN US
      </Link>
    </div>
  );
};

export default JoinUsButton;
