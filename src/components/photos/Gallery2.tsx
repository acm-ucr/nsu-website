const Gallery2 = () => {
  return (
    <div>
      <div className="ml-15 flex flex-col">
        <div>
          <p className="text-nsu-red-200 font-nsu-main text-2xl leading-9 font-bold tracking-normal">
            Photos from some yr/event
          </p>
        </div>
        <div className="bg-nsu-red-200 my-2 mr-auto h-[4px] w-3/5"></div>
      </div>
      <div className="mt-5 mb-5">
        {[...Array(5)].map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`mb-3 grid grid-cols-5 gap-3 ${rowIdx % 2 !== 0 ? "ml-15" : "mr-15"}`}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-400"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
