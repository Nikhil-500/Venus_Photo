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

  // ✅ Dummy Twilio-style WhatsApp number
  const whatsappNumber = "+14155552671"; // Example: Twilio Sandbox number

  return (
    <footer className="relative bg-black/85 text-white border-t border-zinc-800 py-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* --- Left Section --- */}
        <div>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <p className="text-purple-500 text-lg font-semibold">
              Muruliraj Photography
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the artistry of{" "}
              <span className="text-accent">Wedding and Architecture</span>{" "}
              photography — where every frame reflects elegance, precision, and
              emotion. We capture timeless moments with professional finesse and
              creative excellence.
            </p>

            {/* --- Social Icons --- */}
            <div className="flex justify-center md:justify-start gap-4 mt-3 text-xl">
              {/* ✅ WhatsApp with Twilio-style link */}
              <a
                href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-purple-500 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-purple-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-purple-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:text-purple-500 transition"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="hover:text-purple-500 transition"
              >
                <FaBehance />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-purple-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* --- Middle Section (Navigation) --- */}
        <div>
          <h3 className="text-lg font-semibold text-purple-500 mb-3">
            Navigation
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                to="/services/wedding"
                className="hover:text-purple-400 transition"
              >
                Wedding
              </Link>
            </li>
            <li>
              <Link
                to="/services/architecture"
                className="hover:text-purple-400 transition"
              >
                Architecture
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Right Section (Quick Links) --- */}
        <div>
          <h3 className="text-lg font-semibold text-purple-500 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/career" className="hover:text-purple-400 transition">
                Career
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-purple-400 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-purple-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/payment-cancellation"
                className="hover:text-purple-400 transition"
              >
                Payment & Cancellation
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-purple-400 transition">
                Pricing
              </Link>
            </li>
          </ul>

          {/* --- Contact Info --- */}
          <div className="mt-5 text-purple-500 font-semibold">
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg block hover:underline"
            >
              {whatsappNumber}
            </a>
            <a
              href="mailto:muruliraj5@gmail.com"
              className="text-sm text-purple-400 hover:underline"
            >
              muruliraj5@gmail.com
            </a>
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
