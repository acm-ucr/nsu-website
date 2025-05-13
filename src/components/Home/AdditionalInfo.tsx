const AdditionalInfo = () => {
  return (
    <div className="flex flex-col items-center w-[75%] xl:w-[50%] my-8">
      <h2 className="font-urbanist text-nsu-red-300 mt-2 mb-4 w-[70%] flex flex-col items-center text-md md:text-2xl lg:text-3xl xl:text-4xl font-bold">
        Additional Information
        <div className="bg-nsu-red-300 h-[4px] mb-2 w-[85%]"></div>
      </h2>

      <div className="bg-nsu-red-300 flex flex-col w-full md:w-[90%] items-center justify-center rounded-3xl p-4 lg:p-12 shadow-[12px_12px_0px_rgba(59,37,44,0.4)]">
        <p className="text-nsu-gray-100 font-urbanist w-[80%] mb-2 lg:mb-6 text-center text-sm md:text-lg lg:text-2xl">
          How often does your student organizaton meet?
        </p>
        <p className="text-nsu-gray-100 text-xs md:text-md lg:text-xl mb-6 font-urbanist text-center">
          Every two weeks
        </p>

        <p className="text-nsu-gray-100 font-urbanist w-[80%] mb-2 lg:mb-6 text-center text-sm md:text-lg lg:text-2xl">
          What day and time does your student organization generally meet?
        </p>
        <p className="text-nsu-gray-100 text-xs md:text-md lg:text-xl font-urbanist text-center">
          Thursday 8:00 PM
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
