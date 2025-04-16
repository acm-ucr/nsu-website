import "@fontsource/urbanist";
import "@fontsource/urbanist/700.css";

const AdditionalInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-urbanist text-nsu-red-300 mt-2 mb-4 flex flex-col items-center text-2xl font-bold">
        Additional Information
        <div className="bg-nsu-red-300 my-2 h-[4px] w-sm"></div>
      </h2>

      <div className="bg-nsu-red-300 flex w-2xl flex-col items-center justify-center rounded-3xl p-12 shadow-[20px_24px_0px_rgba(59,37,44,0.4)]">
        <p className="text-nsu-gray-100 font-urbanist text-center text-xl">
          How often does your student organization meet?
        </p>
        <p className="text-nsu-gray-100 text-md font-urbanist my-4 text-center">
          Every two weeks
        </p>

        <p className="text-nsu-gray-100 font-urbanist w-lg text-center text-xl">
          What day and time does your student organization generally meet?
        </p>
        <p className="text-nsu-gray-100 text-md font-urbanist mt-4 text-center">
          Thursday 8:00 PM
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
