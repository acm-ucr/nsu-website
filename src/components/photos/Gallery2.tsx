const gallery = [
  "/photos/CIMG1842.webp",
  "/photos/CIMG1845.webp",
  "/photos/CIMG1854.webp",
  "/photos/CIMG1869.webp",
  "/photos/CIMG1887.webp",
  "/photos/CIMG1897.webp",
  "/photos/CIMG1972.webp",
  "/photos/CIMG1974.webp",
  "/photos/CIMG1980.webp",
  "/photos/CIMG1982.webp",
  "/photos/CIMG1988.webp",
  "/photos/CIMG2022.webp",
  "/photos/CIMG2144.webp",
  "/photos/CIMG2169.webp",
  "/photos/CIMG2174.webp",
  "/photos/CIMG2185.webp",
  "/photos/CIMG2281.webp",
  "/photos/DSC00045.webp",
  "/photos/DSC00060.webp",
  "/photos/DSC00082.webp",
  "/photos/DSC00092.webp",
  "/photos/DSC00114.webp",
  "/photos/DSC00894.webp",
  "/photos/DSC00912.webp",
  "/photos/DSC00916.webp",
  "/photos/DSC00942.webp",
  "/photos/DSC00967.webp",
  "/photos/DSC00987.webp",
  "/photos/DSC01199.webp",
  "/photos/DSC01783.webp",
  "/photos/DSC01814.webp",
  "/photos/fam_wars.webp",
  "/photos/IMG_1008.webp",
  "/photos/IMG_1025.webp",
  "/photos/IMG_6175.webp",
  "/photos/IMG_6328.webp",
  "/photos/IMG_6339.webp",
  "/photos/IMG_6343.webp",
  "/photos/IMG_7395.webp",
  "/photos/reveal.webp",
];

const Gallery2 = () => {
  const imagesPerRow = 5;
  const rows = Math.ceil(gallery.length / imagesPerRow);

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
        {[...Array(rows)].map((_, rowIdx) => (
          <div
            key={rowIdx}
            className={`mb-3 grid grid-cols-5 gap-3 ${rowIdx % 2 !== 0 ? "ml-15" : "mr-15"}`}
          >
            {gallery
              .slice(
                rowIdx * imagesPerRow,
                rowIdx * imagesPerRow + imagesPerRow,
              )
              .map((src, i) => (
                <img
                  key={rowIdx * imagesPerRow + i}
                  src={src}
                  alt={`Gallery image ${rowIdx * imagesPerRow + i + 1}`}
                  className="aspect-square object-cover"
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
