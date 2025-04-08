const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-10 rounded-2xl bg-red-200 p-10">
      <div className="w-1/2 bg-blue-200 p-5 text-center text-4xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-10">
        <div className="w-full rounded-4xl bg-blue-400 p-5 text-center text-4xl">
          {props.text2}
        </div>
        <div className="w-full rounded-4xl bg-blue-400 p-5 text-center text-4xl">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="w-1/2 bg-blue-500 p-5 text-center text-4xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
