const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center rounded-lg bg-red-200 p-8">
      <div className="flex w-1/2 items-center justify-center bg-blue-200 p-3 text-lg">
        {props.text1}
      </div>

      <div className="flex flex-row items-center justify-center p-8 text-lg">
        <div className="mx-2.5 w-36 rounded-full bg-blue-400 p-3 text-center">
          {props.text2}
        </div>
        <div className="mx-2.5 w-36 rounded-full bg-blue-400 p-3 text-center">
          {props.text2}
        </div>
      </div>

      <div className="flex w-1/2 items-center justify-center bg-blue-600 p-3 text-lg text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
