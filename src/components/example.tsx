const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-3/4 flex-col items-center gap-10 rounded-lg bg-red-200 p-10 text-center text-2xl">
      <div className="w-1/2 bg-blue-200 py-5">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-10">
        <div className="w-full rounded-full bg-blue-400 py-5">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 py-5">
          {props.text2}
        </div>
      </div>
      <div className="w-1/2 bg-blue-500 py-5 text-white">{props.text3}</div>
    </div>
  );
};

export default Example;
