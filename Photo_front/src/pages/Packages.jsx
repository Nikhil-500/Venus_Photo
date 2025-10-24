import Pagex from "../components/Pagex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pr from "../assets/pr.jpg"; // ✅ Local image import

const packages = [
  {
    title: "Starter Shoot",
    price: "₹8,999",
    features: ["2 Hours Session", "10 Edited Photos", "Online Gallery"],
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Standard Shoot",
    price: "₹15,999",
    features: ["5 Hours Session", "25 Edited Photos", "Print-Ready Files"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Premium Shoot",
    price: "₹29,999",
    features: ["Full Day Coverage", "Unlimited Photos", "Photo Album Included"],
    image: pr, // ✅ Local image used here
  },
];

export default function Packages() {
  const navigate = useNavigate();

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <Pagex
      title="Our Packages"
      subtitle="Choose the perfect package for your special occasion."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-bgPrimary/80 border border-zinc-700 rounded-2xl overflow-hidden hover:border-accent hover:shadow-accent/40 hover:shadow-lg transition-all duration-300"
          >
            {/* Image Section */}
            <div className="overflow-hidden h-48">
              <motion.img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {pkg.title}
              </h3>
              <p className="text-accent text-3xl font-bold mb-4">
                {pkg.price}
              </p>
              <ul className="text-textMut space-y-1 mb-6">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-accent">✔</span> {f}
                  </li>
                ))}
              </ul>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookNow(pkg.title)}
                className="mt-2 px-6 py-2 bg-accent text-bgPrimary font-semibold rounded-lg hover:opacity-90 transition duration-300"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </Pagex>
  );
}
