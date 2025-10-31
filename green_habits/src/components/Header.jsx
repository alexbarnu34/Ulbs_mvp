import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import logo from "../images/LOGO-ULBS_orizontal_negativ.png";
import cover1 from "../images/COVER-site-1.jpg";
import cover2 from "../images/COVER-site-2.jpg";

const Header = () => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const images = [cover1,cover2];

  return (
    <header className="w-full">
      {/* Bara albă cu logo */}
      <div className="flex justify-between items-center bg-blue-700 p-4 shadow-md">
        <img src={logo} alt="ULBS Logo" className="h-16 md:h-20 object-contain" />
        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-blue-700">Asigurarea calității</a>
          <a href="#" className="text-gray-700 hover:text-blue-700"> Documente S.M.</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Ranking ULBS</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Evaluare CD</a>
          
          <div
          className="relative"
          onMouseEnter={() => setIsMoreOpen(true)}
          onMouseLeave={() => setIsMoreOpen(false)}
            >
          <button className="text-gray-700 hover:text-blue-600 transition">
            More ▾
          </button>

          {isMoreOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-2 z-50">
              <a href="#" className="block px-3 py-2 hover:bg-gray-100"> Documente directoare asigurarea calității</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">Documente directoare control intern managerial</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100"> Proceduri PCUe</a>
            </div>
          )}
        </div>
        </nav>
      </div>

      {/* Slider imagini sub logo */}
      <ImageSlider images={images} interval={5000} />
    </header>
  );
};

export default Header;
