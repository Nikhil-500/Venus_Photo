import Pagex from "../components/Pagex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import wed4Img from "../assets/wed4.jpg";
import wedsImg from "../assets/weds.jpg";


const weddingPackages = [
  {
    title: "Silver Wedding",
    price: "₹25,000",
    features: [
      "4 Hours Photography Coverage",
      "50 Edited Photos",
      "Highlight Reel (2-3 mins)",
      "Online Gallery Access",
    ],
  },
  {
    title: "Gold Wedding",
    price: "₹45,000",
    features: [
      "Full Day Coverage",
      "150 Edited Photos",
      "Cinematic Video (10 mins)",
      "Photo Album Included",
    ],
  },
  {
    title: "Platinum Wedding",
    price: "₹75,000",
    features: [
      "2 Days Coverage (Pre & Wedding Day)",
      "Unlimited Photos",
      "Full Wedding Film (20-25 mins)",
      "Drone Shots + Premium Album",
    ],
  },
];

export default function WeddingPackage() {
  const navigate = useNavigate();

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${wed4Img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl font-bold text-accent mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Wedding Packages
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Capture every emotion from your big day with our tailored packages.
          </motion.p>
        </div>
      </div>

      {/* Package Cards */}
      <Pagex>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {weddingPackages.map((pkg) => (
            <motion.div
              key={pkg.title}
              className="bg-bgPrimary/80 border border-zinc-700 rounded-xl p-6 text-center hover:border-accent transition shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={wedsImg}
                alt="Wedding package"
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
