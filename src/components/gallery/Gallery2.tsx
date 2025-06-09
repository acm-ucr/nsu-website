"use client";

import { motion } from "motion/react";
import Image from "next/image";

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
  const imagesPerRow = 4;
  const rows = Math.ceil(gallery.length / imagesPerRow);

  const AnimateGallery = (isEvenRow: boolean, index: number) => ({
    initial: {
      opacity: 0,
      x: isEvenRow ? 30 : -30,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center md:ml-20 md:items-start">
        <div className="text-nsu-red-200 font-nsu-main text-lg leading-9 font-bold md:mx-5 md:text-2xl">
          Photos from past years
        </div>
        <div className="bg-nsu-red-200 mx-auto my-2 h-[4px] w-7/10 md:mx-0 md:w-3/5"></div>
      </div>

      <div className="mt-5 mb-5">
        {[...Array(rows)].map((_, rowIdx) => {
          const isEvenRow = rowIdx % 2 === 0;
          const rowImages = gallery.slice(
            rowIdx * imagesPerRow,
            rowIdx * imagesPerRow + imagesPerRow,
          );

          return (
            <div
              key={rowIdx}
              className={`mb-1 grid grid-cols-4 gap-1 md:mb-3 md:gap-3 ${isEvenRow ? "mr-5 md:mr-15" : "ml-5 md:ml-15"}`}
            >
              {rowImages.map((src, i) => {
                const globalIndex = rowIdx * imagesPerRow + i;
                const animationVariants = AnimateGallery(
                  isEvenRow,
                  globalIndex,
                );

                return (
                  <motion.div
                    key={globalIndex}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="relative aspect-square"
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${globalIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery2;
