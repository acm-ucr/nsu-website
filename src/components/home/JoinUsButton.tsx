import Link from "next/link";

const JoinUsButton = () => {
  return (
    <div className="bg-nsu-red-200 flex w-1/3 items-center justify-center rounded-3xl p-3 duration-150 hover:scale-110 md:w-1/4 lg:w-1/5 lg:p-5 xl:w-1/6">
      <Link
        href="https://linktr.ee/ucrnsu"
        className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl"
      >
        JOIN US
      </Link>
    </div>
  );
};

export default JoinUsButton;
