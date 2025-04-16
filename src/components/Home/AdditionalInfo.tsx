import '@fontsource/urbanist';
import '@fontsource/urbanist/700.css';

const AdditionalInfo = () => {
  return (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl font-bold font-urbanist text-nsu-red-300 mb-4 mt-2 flex flex-col items-center">
      Additional Information
      <div className="h-[4px] bg-nsu-red-300 w-sm my-2"></div>
    </h2>

    <div className="bg-nsu-red-300 flex flex-col w-2xl items-center justify-center p-12 rounded-3xl shadow-[20px_24px_0px_rgba(59,37,44,0.4)]">
      <p className="text-nsu-gray-100 text-xl font-urbanist text-center">
        How often does your student organization meet?
      </p>
      <p className="text-nsu-gray-100 text-md font-urbanist my-4 text-center">
        Every two weeks
      </p>

      <p className="text-nsu-gray-100 text-xl font-urbanist text-center w-lg">
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
