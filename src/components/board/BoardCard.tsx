import React from 'react';

const BoardCard = ({ image = '/board/president.webp' }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-transparent">
      <div
        className="relative"
        style={{
          width: '15vw',
          maxHeight: '304',
          maxWidth: '217px',       
          aspectRatio: '217 / 304',
        }}
      >
        <div className="absolute inset-0 z-10">
          {/* Outline div */}
          <div className="absolute inset-0 outline-4 outline-solid outline-nsu-red-200 rounded-md shadow-md"></div>

          <div
            className="absolute bottom-0 left-0 shadow-md bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('assets/nsubar1.svg')`,
              // Adjust width and height as needed
              width: '50px',
              height: '50px'
            }}
          ></div>
        </div>

        <div
          className="absolute inset-0 shadow-md bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${image})`,
            transform: 'translate(20px, 20px)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default BoardCard;
