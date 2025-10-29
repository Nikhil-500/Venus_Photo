import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPinterestP,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappNumber = "+919999888777"; // Replace with your WhatsApp number

  return (
    <footer className="relative bg-black/85 text-white border-t border-zinc-800 py-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left">
        {/* --- Left Section --- */}
        <div className="md:col-span-2">
          <p className="text-purple-500 text-lg font-semibold">
            Muruliraj Photography
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mt-2">
            Experience the artistry of <span className="text-accent">Wedding and Architecture</span> photography — where every frame
            reflects elegance, precision, and emotion. We capture timeless moments
            with professional finesse and creative excellence.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/murulirajclicks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaBehance />
            </a>
            <a
              href="https://www.youtube.com/@murulirajclicks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* --- Middle Section --- */}
        <div>
          <h3 className="text-lg font-semibold text-purple-500 mb-3">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/services/wedding" className="hover:text-purple-400 transition">
                Wedding
              </Link>
            </li>
            <li>
              <Link to="/services/architecture" className="hover:text-purple-400 transition">
                Architecture
              </Link>
            </li>
          </ul>

          {/* Contact Info */}
          <div className="mt-5 text-purple-500 font-semibold">
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg block hover:underline"
            >
              {whatsappNumber}
            </a>
            <a href="mailto:muruliraj5@gmail.com" className="text-sm text-purple-400 hover:underline">
              muruliraj5@gmail.com
            </a>
          </div>
        </div>

        {/* --- Right Section (Google Map) --- */}
        <div>
          <h3 className="text-lg font-semibold text-purple-500 mb-3">Find Us</h3>

          {/* Right - Google Map */}
          <div className="w-full h-[300px] rounded-xl overflow-hidden border border-purple-600/30">
            <iframe
              title="Muruliraj Photography Location"
              src="https://www.google.com/maps?q=Muruliraj+Photography&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="border-t border-zinc-800 mt-8 pt-4 text-center text-sm text-gray-400">
        © {year} Muruliraj Photography. All Rights Reserved.
      </div>
    </footer>
  );
}
