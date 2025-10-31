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
      <div className="flex justify-between items-center bg-[#001b66] p-4 shadow-md">
        <img src={logo} alt="ULBS Logo" className="h-16 md:h-20 object-contain" />
        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="text-white hover:text-blue-700">Asigurarea calității</a>
          <a href="#" className="text-white hover:text-blue-700"> Documente S.M.</a>
          <a href="#" className="text-white hover:text-blue-700">Ranking ULBS</a>
          <a href="#" className="text-white hover:text-blue-700">Evaluare CD</a>
          
          <div
          className="relative"
          onMouseEnter={() => setIsMoreOpen(true)}
          onMouseLeave={() => setIsMoreOpen(false)}
            >
          <button className="text-white hover:text-blue-700 transition">
            More ▾
          </button>

          {isMoreOpen && (
             <div
               className="absolute right-0 top-full mt-0,75 transform translate-x-[16px] w-64 min-w-[16rem] bg-[#001b66] text-white border-t border-blue-900 shadow-inner animate-slideDown z-50 rounded-lg"
               onMouseEnter={() => setIsMoreOpen(true)}
               onMouseLeave={() => setIsMoreOpen(false)}
             >
              <div className="flex flex-col md:flex-col justify-center gap-2 p-3">
                <a href="#" className="block px-4 py-2 rounded-md hover:bg-blue-800 transition"> Documente directoare asigurarea calității</a>
                <a href="#" className="block px-4 py-2 rounded-md hover:bg-blue-800 transition">Documente directoare control intern managerial</a>
                <a href="#" className="block px-4 py-2 rounded-md hover:bg-blue-800 transition"> Proceduri PCUe</a>
              </div>  
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
