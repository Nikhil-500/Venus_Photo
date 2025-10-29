import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Pagex from "../components/Pagex";

// ✅ Local slider images
import st from "../assets/st.jpg";
import st1 from "../assets/st1.jpg";
import st3 from "../assets/st3.jpg";
import std from "../assets/std.jpg";
import std1 from "../assets/std1.jpg";
import std2 from "../assets/std2.jpg";
import prr from "../assets/prr.jpg";
import prr1 from "../assets/prr1.jpg";
import prr2 from "../assets/prr2.jpg";
import prr3 from "../assets/prr3.jpg";
import k2 from "../assets/k2.jpg";
import pr from "../assets/pr.jpg";
import ClientsSection from "../components/ClientsSection";

const sliderImages = [
  { img: st, label: "Starter Shoot" },
  { img: st1, label: "Starter Shoot" },
  { img: st3, label: "Starter Shoot" },
  { img: std, label: "Standard Shoot" },
  { img: std1, label: "Standard Shoot" },
  { img: std2, label: "Standard Shoot" },
  { img: prr, label: "Premium Shoot" },
  { img: prr1, label: "Premium Shoot" },
  { img: prr2, label: "Premium Shoot" },
  { img: prr3, label: "Premium Shoot" },
];

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
    image: pr,
  },
];

export default function Packages() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setIndex((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );

  const handleBookNow = (pkgTitle) => {
    navigate("/booknow", { state: { package: pkgTitle } });
  };

  return (
    <>
      {/* --- 🌅 Hero Slider --- */}
      <section
        className="relative w-full h-[90vh] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={sliderImages[index].img}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent"></div>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <button
            onClick={prevSlide}
            className="text-white/70 hover:text-purple-400 text-4xl font-bold select-none"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="text-white/70 hover:text-purple-400 text-4xl font-bold select-none"
          >
            ›
          </button>
        </div>

        {/* ✅ Shoot Label with Signature Style Font */}
        <motion.div
          key={sliderImages[index].label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-6xl md:text-7xl text-purple-400 font-[Great_Vibes,cursive] tracking-wider drop-shadow-2xl"
          style={{
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "2px",
          }}
        >
          {sliderImages[index].label}
        </motion.div>
      </section>

      {/* --- 📦 Packages Section with Cinematic Fade --- */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative py-24"
        style={{
          backgroundImage: `url(${k2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* cinematic fade overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"
        ></motion.div>

        <div className="relative z-10">
          <Pagex
            title="Our Packages"
            subtitle="Choose the perfect package for your special occasion."
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group backdrop-blur-lg bg-white/10 border border-purple-400/30 rounded-2xl overflow-hidden hover:shadow-purple-400/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden h-52">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {pkg.title}
                    </h3>
                    <p className="text-purple-400 text-3xl font-bold mb-4">
                      {pkg.price}
                    </p>
                    <ul className="text-gray-300 space-y-1 mb-6">
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="text-purple-400">✔</span> {f}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBookNow(pkg.title)}
                      className="mt-2 px-6 py-2 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-400 transition duration-300"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Pagex>
        </div>
      </motion.section>
      {/* --- Clients Section --- */}
      <ClientsSection />
    </>
  );
}
