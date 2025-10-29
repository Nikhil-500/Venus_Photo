import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";
import { useNavigate } from "react-router-dom";

import weddingImg from "../assets/wedding.jpg";
import ws from "../assets/ws.jpg";
import ws1 from "../assets/ws1.jpg";
import ws2 from "../assets/ws2.jpg";
import ws3 from "../assets/ws3.jpg";
import ws4 from "../assets/ws4.jpg";
import ws5 from "../assets/ws5.jpg";
import ws6 from "../assets/ws6.jpg";

export default function Wedding() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // ✅ Local wedding slider images
  const sliderImages = [ws, ws1, ws2, ws3, ws4, ws5, ws6];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleBookNow = () => {
    navigate("/booknow"); // Go to BookNow page
  };

  return (
    <Pagex>
      {/* --- Hero Photo Slider with Cinematic Effect --- */}
      <section className="relative w-full h-[75vh] overflow-hidden rounded-b-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={sliderImages[index]}
              alt={`Wedding Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              // Ken Burns cinematic motion
              initial={{ scale: 1.1, x: 20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 4, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-purple-400 mb-4"
          >
            Wedding Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 max-w-2xl text-lg"
          >
            Capturing timeless love stories filled with emotion, elegance, and
            unforgettable beauty.
          </motion.p>
        </div>
      </section>

      {/* --- Wedding Info Section --- */}
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center py-16">
          <motion.img
            src={weddingImg}
            alt="Wedding Photography"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.02 }}
          />

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Celebrate Every Emotion
            </h3>
            <p className="text-textMut mb-4">
              From the nervous laughter before the vows to the tears of joy
              during the ceremony, our photography captures every genuine
              emotion in cinematic detail.
            </p>
            <p className="text-textMut mb-6">
              Our goal is to make you relive your special day each time you look
              at your photos — elegant, timeless, and truly personal.
            </p>
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </AnimatedSection>
    </Pagex>
  );
}
