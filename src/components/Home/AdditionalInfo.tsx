const AdditionalInfo = () => {
  return (
    <div className="my-8 flex w-[75%] flex-col items-center xl:w-[50%]">
      <h2 className="font-urbanist text-nsu-red-300 text-md mt-2 mb-4 flex w-[70%] flex-col items-center font-bold md:text-2xl lg:text-3xl xl:text-4xl">
        Additional Information
        <div className="bg-nsu-red-300 mb-2 h-[4px] w-[85%]"></div>
      </h2>

      <div className="bg-nsu-red-300 flex w-full flex-col items-center justify-center rounded-3xl p-4 shadow-[12px_12px_0px_rgba(59,37,44,0.4)] md:w-[90%] lg:p-12">
        <p className="text-nsu-gray-100 font-urbanist mb-2 w-[80%] text-center text-sm md:text-lg lg:mb-6 lg:text-2xl">
          How often does your student organizaton meet?
        </p>
        <p className="text-nsu-gray-100 md:text-md font-urbanist mb-6 text-center text-xs lg:text-xl">
          Every two weeks
        </p>

        <p className="text-nsu-gray-100 font-urbanist mb-2 w-[80%] text-center text-sm md:text-lg lg:mb-6 lg:text-2xl">
          What day and time does your student organization generally meet?
        </p>
        <p className="text-nsu-gray-100 md:text-md font-urbanist text-center text-xs lg:text-xl">
          Thursday 8:00 PM
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
