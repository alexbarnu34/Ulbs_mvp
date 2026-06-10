import React, { useState, useEffect } from "react";

const ImageSlider = ({ images, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((ct) => (ct < images.length - 1 ? ct + 1 : 0));
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
