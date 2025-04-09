const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex flex-col w-2/3 items-center gap-5 bg-red-200 p-10">
      <div className="w-1/2 bg-blue-200 p-5 text-center text-2xl">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="w-full bg-blue-400 p-5 text-center text-2xl rounded-full">{props.text2}</div>
        <div className="w-full bg-blue-400 p-5 text-center text-2xl rounded-full">{props.text2}</div>
      </div>
      <div className="w-1/2 bg-blue-700 p-5 text-center text-white text-2xl">{props.text3}</div>
    </div>
  );
};

export default Example;
