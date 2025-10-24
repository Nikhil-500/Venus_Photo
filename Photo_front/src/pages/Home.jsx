import { motion, AnimatePresence } from "framer-motion";
import Pagex from "../components/Pagex";
import { useEffect, useState } from "react";
import BookForm from "../components/BookForm"; // ✅ import reusable booking form

export default function Home() {
  const [index, setIndex] = useState(0);
  const [showCoupleMore, setShowCoupleMore] = useState(false);
  const [showArchitectureMore, setShowArchitectureMore] = useState(false);

  const slides = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.img
          key={index}
          src={slides[index]}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-heading text-accent mb-4"
          >
            Capturing Life’s Precious Moments
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-textMut max-w-2xl text-lg"
          >
            Welcome to <span className="text-white font-semibold">Muruliraj Photography</span> — capturing timeless love stories, one frame at a time.
          </motion.p>
        </div>
      </section>

      {/* --- Featured Works --- */}
      <Pagex title="Featured Works" subtitle="A glimpse of our most loved moments">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1200&q=80",
          ].map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Portfolio ${i + 1}`}
                className="w-full h-72 object-cover group-hover:brightness-110"
                onError={(e) => (e.target.src = "https://via.placeholder.com/400x300?text=Image+Unavailable")}
              />
            </motion.div>
          ))}
        </div>
      </Pagex>

      {/* --- Couple Photography Blog --- */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-accent mb-12"
        >
          Couple Photography Blog
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          <motion.img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80"
            alt="Couple Blog"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.03 }}
          />
          <motion.div
            className="text-left flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">The Art of Capturing Love</h3>
            <p className="text-textMut mb-4">
              Every couple has their own rhythm — our lens finds it. From candid laughter to emotional vows,
              discover how we freeze those raw, fleeting moments into timeless frames.
            </p>

            <AnimatePresence>
              {showCoupleMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <p className="text-textMut mb-4">
                    We focus on real emotions — the spark between two souls. Each photo session blends
                    creativity and storytelling, ensuring that your love story feels authentic and unforgettable.
                  </p>
                  <p className="text-textMut mb-4">
                    Whether it’s a sunset beach shoot or a cozy indoor setup, our goal is to create magic with light,
                    composition, and connection.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowCoupleMore(!showCoupleMore)}
              className="mt-4 px-6 py-2 bg-accent text-black font-medium rounded-full hover:bg-white transition"
            >
              {showCoupleMore ? "Show Less ↑" : "Read More →"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- Architecture Photography Blog --- */}
      <section className="py-20 bg-bgPrimary text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-accent mb-12"
        >
          Architecture Photography Blog
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="text-left flex flex-col justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">Shaping Beauty Through Structure</h3>
            <p className="text-textMut mb-4">
              Architecture tells stories through symmetry, texture, and light. Explore how we capture the essence
              of buildings — turning stone, steel, and shadow into breathtaking visuals.
            </p>

            <AnimatePresence>
              {showArchitectureMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <p className="text-textMut mb-4">
                    Every angle matters — the play of natural light, the contrast between old and new design,
                    the human touch in grand structures. Our photography turns architecture into art.
                  </p>
                  <p className="text-textMut mb-4">
                    From temples to modern towers, our goal is to make you *feel* the space, not just see it.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowArchitectureMore(!showArchitectureMore)}
              className="mt-4 px-6 py-2 bg-accent text-black font-medium rounded-full hover:bg-white transition"
            >
              {showArchitectureMore ? "Show Less ↑" : "Read More →"}
            </button>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?auto=format&fit=crop&w=1200&q=80"
            alt="Architecture Blog"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px] order-1 md:order-2"
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </section>

      {/* --- Sliding Panel --- */}
      <section className="py-16 bg-black/80 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-accent mb-10"
        >
          Love In Every Frame
        </motion.h2>

        <div className="overflow-hidden relative max-w-7xl mx-auto">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1500] }}
            transition={{
              x: { repeat: Infinity, repeatType: "mirror", duration: 25, ease: "linear" },
            }}
          >
            {[
              "https://images.unsplash.com/photo-1534683251854-94f7e39b3033?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1200&q=80",
            ].map((url, i) => (
              <motion.img
                key={i}
                src={url}
                alt={`Slide ${i}`}
                whileHover={{ scale: 1.05 }}
                className="w-[320px] h-[220px] object-cover rounded-xl shadow-lg transition-all duration-500"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Book Your Date Section (Aligned & Centered) --- */}
      <section className="relative bg-black py-24 text-white flex flex-col items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center"
        >
          Book Your Date
        </motion.h2>

        <div className="max-w-3xl w-full">
          <div className="bg-white/10 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-2xl">
            <BookForm />
          </div>
        </div>
      </section>
    </>
  );
}
