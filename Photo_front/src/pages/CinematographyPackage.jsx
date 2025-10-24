import Pagex from "../components/Pagex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import vid1Video from "../assets/vid1.mp4";
import imgImg from "../assets/img.jpg";

const cinematographyPackages = [
  {
    title: "Short Film",
    price: "₹20,000",
    features: [
      "2-3 Min Cinematic Film",
      "Color Correction & Grading",
      "Music Licensing Included",
      "HD Quality Delivery",
    ],
  },
  {
    title: "Event Highlight",
    price: "₹35,000",
    features: [
      "5-8 Min Highlight Video",
      "Multi-Camera Setup",
      "Custom Background Score",
      "Social Media Reel Edit",
    ],
  },
  {
    title: "Full Feature",
    price: "₹60,000",
    features: [
      "Full Day Filming",
      "Cinematic Storytelling",
      "Drone & Gimbal Shots",
      "Professional Editing + Trailer",
    ],
  },
];

export default function CinematographyPackage() {
  const navigate = useNavigate();

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
      <div className="relative bg-black text-white overflow-hidden">
        {/* ✅ Hero Section with Video Background */}
        <div className="relative h-[60vh] overflow-hidden">
          {/* 🎥 Background Video */}
          <video
            src={vid1Video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl font-bold text-accent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Cinematography Packages
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tell your story through motion with our cinematic videography
            services.
          </motion.p>
        </div>
      </div>

      {/* Package Cards */}
      <Pagex>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cinematographyPackages.map((pkg) => (
            <motion.div
              key={pkg.title}
              className="bg-bgPrimary/80 border border-zinc-700 rounded-xl p-6 text-center hover:border-accent transition shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={imgImg}
                alt="Cinematography package"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-accent text-3xl font-bold mb-4">{pkg.price}</p>
              <ul className="text-textMut space-y-1 mb-4">
                {pkg.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleBookNow(pkg.title)}
                className="mt-4 px-5 py-2 bg-accent text-bgPrimary font-semibold rounded-lg hover:opacity-90 transition"
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </Pagex>
    </div>
  );
}
