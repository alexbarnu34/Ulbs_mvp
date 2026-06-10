import { useState } from "react";
import logo from "../images/LOGO-ULBS_orizontal_negativ.png";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#001b66] rounded-2xl shadow-2xl p-8 text-center max-w-sm animate-fadeIn relative animate-fadeIn">
        <img
          src={logo}
          alt="ULBS Logo"
          className="h-16 mx-auto mb-4 object-contain"
        />
        <h2 className="text-xl font-semibold text-white mb-2">
          Bine ați venit pe pagina Serviciul "Asigurarea Calității" (S.A.C.)!
        </h2>
        <p className="text-white text-sm mb-4">
          Mulțumim că vizitați site-ul nostru. Ne bucurăm să vă avem aici!
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
        >
          Închide
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
