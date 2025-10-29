import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import ClientsSection from "../components/ClientsSection";
import cdd from "../assets/cdd.mp4";

// ✅ Local images
import a2 from "../assets/a2.jpg";
import k1 from "../assets/k1.jpg";
import k2 from "../assets/k2.jpg";
import cr from "../assets/cr.jpg";
import kkImg from "../assets/kk.jpg";

// ✅ Counter Hook
function useCountAnimation(target, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

export default function Home() {
  const navigate = useNavigate();

  const youtubeVideos = [
    "https://www.youtube.com/embed/iwuvrOvWObA",
    "https://www.youtube.com/embed/E_zqPZ1ibaI",
    "https://www.youtube.com/embed/TkHixdX0r7Y",
    "https://www.youtube.com/embed/E7nniGubbyI",
    "https://www.youtube.com/embed/-CZTRmv9KgE",
  ];

  // ✅ Client reviews data
  const clientReviews = [
    {
      name: "Aarav Sharma",
      role: "Wedding Client",
      review:
        "The entire experience was seamless and heartwarming. Every photo feels alive — perfectly capturing our wedding emotions.",
      rating: 5,
    },
    {
      name: "Priya Menon",
      role: "Event Organizer",
      review:
        "Professional, punctual, and highly creative. The team delivered outstanding visuals that elevated our brand event beautifully.",
      rating: 5,
    },
    {
      name: "Karthik Reddy",
      role: "Corporate Shoot",
      review:
        "From concept to delivery, they exceeded expectations. Attention to detail and lighting was truly world-class.",
      rating: 4,
    },
    {
      name: "Divya Nair",
      role: "Family Portrait Session",
      review:
        "A truly talented team. The photographs captured our family's joy and personality perfectly. Highly recommend!",
      rating: 5,
    },
  ];

  // ✅ Reviews carousel logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + clientReviews.length) % clientReviews.length
    );

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // slower transition
    return () => clearInterval(timer);
  }, []);

  // ✅ Counter Section Scroll Trigger
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  const reviews = useCountAnimation(1300, 2000, isInView);
  const events = useCountAnimation(5000, 2000, isInView);
  const years = useCountAnimation(7, 2000, isInView);

  return (
    <>
      {/* --- 🎥 Hero Section with Background Video --- */}
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
        <video
          src={cdd}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center text-center md:text-right px-6 md:px-20 z-10 space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-heading text-purple-400 mb-2"
          >
            Capturing Life’s Precious Moments
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 max-w-2xl text-lg md:text-right"
          >
            Welcome to{" "}
            <span className="text-white font-semibold">
              Muruliraj Photography
            </span>{" "}
            — capturing timeless love stories, one frame at a time.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={() => navigate("/services")}
            className="mt-4 px-8 py-3 bg-white text-black text-lg font-semibold rounded-md shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            Explore Services →
          </motion.button>
        </div>
      </section>

      {/* --- 🟣 Crafting Timeless Visual Stories --- */}
      <section className="py-20 bg-gray-950 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-purple-400 mb-4"
        >
          Crafting Timeless Visual Stories
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-10 px-4">
          At <span className="text-purple-400">Muruliraj Photography</span>,
          every frame narrates a story — from emotional weddings to grand
          corporate events and cinematic portraits.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { title: "Eternal Love Stories", img: a2 },
            { title: "Professional Portraits", img: cr },
            { title: "Creative Frames", img: k1 },
            { title: "Cinematic Campaigns", img: k2 },
            { title: "Celebrations & Moments", img: kkImg },
            { title: "Lens & Light Rentals", img: cr },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/70 p-4 rounded-xl shadow-lg hover:shadow-purple-700/30 transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[250px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 💬 Client Reviews --- */}
      <section className="relative py-20 bg-black text-center overflow-hidden">
        <h2
          className="text-5xl font-extrabold mb-14 text-purple-400"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "1px",
          }}
        >
          What Our Clients Say
        </h2>

        <div className="relative max-w-6xl mx-auto overflow-hidden px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 border border-purple-500/10 rounded-2xl p-10 shadow-2xl max-w-3xl mx-auto">
                <p
                  className="text-lg text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  “{clientReviews[currentIndex].review}”
                </p>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {clientReviews[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-500 italic">
                  {clientReviews[currentIndex].role}
                </p>
                <div className="text-yellow-400 mt-3 text-base">
                  {"★".repeat(clientReviews[currentIndex].rating)}{" "}
                  {"☆".repeat(5 - clientReviews[currentIndex].rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-4xl text-purple-400 hover:text-white transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-4xl text-purple-400 hover:text-white transition"
          >
            ›
          </button>
        </div>
      </section>

      {/* --- 🎬 Featured Works --- */}
      <section className="py-20 bg-black text-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-purple-400 mb-10"
        >
          Featured Works 🎬
        </motion.h2>

        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1600] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {youtubeVideos.concat(youtubeVideos).map((url, idx) => (
              <div
                key={idx}
                className="min-w-[340px] md:min-w-[480px] h-[260px] bg-black rounded-xl overflow-hidden shadow-xl border border-purple-600/30"
              >
                <iframe
                  src={url}
                  title={`Video ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 🌟 Trusted by Thousands --- */}
      <motion.section
        ref={countRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gray-950 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-8">
          Trusted by Thousands
        </h2>

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="text-5xl mb-10"
        >
          🌟
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
          <div>
            <h3 className="text-3xl font-bold text-white">
              {reviews.toLocaleString()}+
            </h3>
            <p className="text-gray-400 mt-2">Reviews</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">
              {events.toLocaleString()}+
            </h3>
            <p className="text-gray-400 mt-2">Events Covered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">{years}+</h3>
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>
        </div>
      </motion.section>

      {/* --- 📅 Book Your Date Section --- */}
      <section className="relative bg-black py-24 text-white px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 text-left"
            >
              Book Your Date
            </motion.h2>
            <BookForm />
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* --- Clients Section --- */}
      <ClientsSection />
    </>
  );
}
