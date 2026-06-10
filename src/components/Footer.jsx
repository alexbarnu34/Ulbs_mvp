import { FaFacebook, FaXTwitter, FaYoutube, FaLinkedin, FaInstagram, FaRss } from "react-icons/fa6";
import {FaMapMarkerAlt,  FaPhone,  FaEnvelope , FaGlobe} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#052a63] text-white py-6 mt-10 w-full">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.facebook.com/ULBSibiu/" className="hover:text-gray-300 text-xl"><FaFacebook /></a>
          <a href="https://x.com/ulbsibiu" className="hover:text-gray-300 text-xl"><FaXTwitter /></a>
          <a href="https://www.youtube.com/user/ULBSibiuTV" className="hover:text-gray-300 text-xl"><FaYoutube /></a>
          <a href="https://www.linkedin.com/school/ulbs/" className="hover:text-gray-300 text-xl"><FaLinkedin /></a>
          <a href="https://www.instagram.com/universitatealucianblaga/" className="hover:text-gray-300 text-xl"><FaInstagram /></a>
          <a href="https://www.ulbsibiu.ro/feed/stiri" className="hover:text-gray-300 text-xl"><FaRss /></a>
        </div>

    <div className="flex flex-col md:flex-row justify-between  mx-auto px-2">
        <div className="text-sm text-left px-4 items-center relative mt-10">
          <p>
            <a href="https://www.ulbsibiu.ro/ro/contact/" className=" hover:text-gray-300">Informații Contact ULBS</a> |{" "}
            <a href="https://www.ulbsibiu.ro/ro/sitemap/" className=" hover:text-gray-300">Sitemap ULBS</a> |{" "}
            <a href="https://www.ulbsibiu.ro/ro/browser/" className=" hover:text-gray-300">Cerințe Browser</a> |{" "}
            Pentru sugestii vă rugăm contactaţi <a href="#" className=" hover:text-gray-300">webmaster-ul</a>
          </p>
          <p>
            Copyright © 1998–2025{" "}
            <a href="https://ccom.ulbsibiu.ro/ro/" className=" hover:text-gray-300">Centrul de Comunicații</a> |{" "}
            <a href="https://www.ulbsibiu.ro/ro/disclaimer/" className=" hover:text-gray-300">Termeni de utilizare</a>
          </p>
        </div>

        <div className="text-sm text-left px-4 mt-7 space-y-2 text-gray-300">
           <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-white" />
            <p>Str. Victoriei, nr. 10, Sibiu, România</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-white" />
            <p>+40-269-217.779</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <a href="mailto:dep.calitate@ulbsibiu.ro" className="hover:underline">dep.calitate@ulbsibiu.ro</a>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-white" />
            <a href="http://localhost:5173/" target="_blank" className="hover:underline">http://calitate.ulbsibiu.ro</a>
          </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
