"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlick = dynamic(() => import("react-slick"), { ssr: false });

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="h-10 w-10 absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full hover:bg-gray-700 z-10 flex items-center justify-center"
  >
    ➡
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="h-10 w-10 absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full hover:bg-gray-700 z-10 flex items-center justify-center"
  >
    ⬅
  </button>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20 relative w-full overflow-hidden bg-green-600">
      <ReactSlick {...settings}>
        <div className="p-2">
          <div className="h-56 bg-red-500 flex items-center justify-center text-white text-lg font-bold">
            Slide 1
          </div>
        </div>
        <div className="p-2">
          <div className="h-56 bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
            Slide 2
          </div>
        </div>
        <div className="p-2">
          <div className="h-56 bg-green-500 flex items-center justify-center text-white text-lg font-bold">
            Slide 3
          </div>
        </div>
        <div className="p-2">
          <div className="h-56 bg-yellow-500 flex items-center justify-center text-white text-lg font-bold">
            Slide 4
          </div>
        </div>
      </ReactSlick>
    </div>
  );
};

export default Carousel;
