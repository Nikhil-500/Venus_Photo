import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";
import ClientsSection from "../components/ClientsSection";

// ✅ Local images for photo slider
import tt from "../assets/tt.jpg";
import tt1 from "../assets/tt1.jpg";
import tt2 from "../assets/tt2.jpg";
import tt3 from "../assets/tt3.jpg";
import tt4 from "../assets/tt4.jpg";
import tt5 from "../assets/tt5.jpg";
import bb from "../assets/bb.jpg";

// ✅ Example team member images
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

// ✅ Counter Hook (triggers only once when visible)
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

export default function About() {
  const sliderImages = [tt, tt1, tt2, tt3, tt4, tt5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    { name: "Muruli Raj", role: "Founder & Lead Photographer", photo: team1 },
    { name: "Divya", role: "Creative Director", photo: team2 },
    { name: "Rahul", role: "Cinematographer", photo: team3 },
  ];

  // ✅ Animated counter section trigger
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  const reviews = useCountAnimation(1300, 2000, isInView);
  const events = useCountAnimation(5000, 2000, isInView);
  const years = useCountAnimation(7, 2000, isInView);

  return (
    <Pagex>
      <section
        className="relative w-full min-h-screen text-white overflow-hidden"
        style={{
          backgroundImage: `url(${bb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">
          {/* --- Hero Image Slider --- */}
          <section className="relative w-full h-[80vh] overflow-hidden rounded-b-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={sliderImages[index]}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold text-purple-400 mb-4"
              >
                Behind Every Frame
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-gray-300 max-w-2xl text-lg"
              >
                Discover the story, the passion, and the artistry that drives
                every photograph we capture.
              </motion.p>
            </div>
          </section>

          {/* --- Main About Content Section --- */}
          <AnimatedSection>
            <div className="relative isolate py-16">
              <div className="relative grid md:grid-cols-2 gap-12 items-center py-8">
                <motion.img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop"
                  alt="About Muruliraj"
                  className="w-full h-96 rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-700"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                />

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-gray-300 leading-relaxed"
                >
                  <h2 className="text-4xl font-bold text-purple-400 mb-6">
                    About Muruliraj
                  </h2>
                  <p className="text-lg text-gray-400 mb-6 italic">
                    The Story Behind the Lens
                  </p>

                  <h3 className="text-3xl font-semibold mb-4 text-accent">
                    Hi, I’m <span className="text-white">Muruliraj</span>
                  </h3>

                  <p className="mb-4">
                    I’m a{" "}
                    <span className="font-semibold text-white">
                      wedding and portrait photographer
                    </span>{" "}
                    based in Karnataka. My passion lies in capturing authentic
                    emotions and turning fleeting moments into everlasting
                    memories.
                  </p>

                  <p className="mb-4">
                    Over the past{" "}
                    <span className="font-medium text-accent">7+ years</span>, I’ve
                    worked with hundreds of couples, families, and brands across
                    South India. My approach blends documentary-style storytelling
                    with modern artistic flair — natural light, real laughter, and
                    unfiltered love.
                  </p>

                  <a
                    href="/contact"
                    className="inline-block mt-4 px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-purple-600 hover:text-black transition duration-300"
                  >
                    Let’s Create Magic Together
                  </a>
                </motion.div>
              </div>

              {/* --- Highlighted Quote --- */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="mt-16 text-center text-xl italic text-gray-300 max-w-3xl mx-auto"
              >
                “Photography is more than just pictures — it’s about capturing
                emotions, preserving memories, and telling stories that live
                forever.”
              </motion.div>

              {/* --- Meet Our Team --- */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
              >
                <h2 className="text-4xl font-bold text-purple-400 mb-6">
                  Meet Our Team
                </h2>
                <p className="text-gray-400 mb-10">
                  The creative minds behind every stunning frame.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                  {teamMembers.map((member, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 2,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                      className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition"
                    >
                      <motion.img
                        src={member.photo}
                        alt={member.name}
                        className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-2 border-purple-400/40"
                        whileHover={{
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 0.8 },
                        }}
                      />
                      <h3 className="text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        {member.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* --- Trusted by Thousands (Counts trigger on scroll) --- */}
              <motion.div
                ref={countRef}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-28 text-center"
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
                  ✨
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
              </motion.div>
            </div>
          </AnimatedSection>

          {/* --- Clients Section --- */}
          <div className="mt-16 relative z-10">
            <ClientsSection />
          </div>
        </div>
      </section>
    </Pagex>
  );
}
