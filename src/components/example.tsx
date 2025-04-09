const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex flex-col w-3/4 items-center gap-10 bg-red-200 p-10">
      <div className="w-1/2 bg-blue-100 p-5 text-center">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="w-full bg-nsu-red-100 p-5 text-center rounded-full">
          {props.text2}
        </div>
        <div className="w-full bg-nsu-red-100 p-5 text-center rounded-full">
          {props.text2}
        </div>
      </div>
      <div className= "w-1/2 bg-nsu-red-200 p-5 text-nsu-gray-100 text-center text-2xl">
          {props.text3}
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );

  <div/>
};

export default Example;
