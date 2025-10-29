// import { Link } from "react-router-dom";
// import Pagex from "../components/Pagex";
// import AnimatedSection from "../components/AnimatedSection";

// const services = [
//   {
//     title: "Wedding",
//     desc: "Candid, cinematic, and emotional storytelling of your special day.",
//     link: "/wedding",
//   },
//   {
//     title: "Architecture",
//     desc: "Capturing design, structure, and light in artistic frames.",
//     link: "/architecture",
//   },
// ];

// export default function Services() {
//   return (
//     <Pagex title="Services" subtitle="What I Offer">
//       <AnimatedSection>
//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((s) => (
//             <Link
//               to={s.link}
//               key={s.title}
//               className="bg-bgPrimary/80 border border-zinc-700 p-8 rounded-xl hover:border-accent hover:scale-[1.03] transition-all duration-300 block text-center"
//             >
//               <h4 className="text-2xl font-semibold mb-3 text-accent">{s.title}</h4>
//               <p className="text-textMut mb-3">{s.desc}</p>
//               <span className="text-accent font-medium underline hover:text-white">
//                 Learn More →
//               </span>
//             </Link>
//           ))}
//         </div>
//       </AnimatedSection>
//     </Pagex>
//   );
// }
// src/pages/Services.jsx
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";

import ted from "../assets/ted.jpg";
import ted1 from "../assets/ted1.jpg";
import ted2 from "../assets/ted2.jpg";
import ted3 from "../assets/ted3.jpg";
import ted5 from "../assets/ted5.jpg";
import ad from "../assets/ad.jpg";
import ad1 from "../assets/ad1.jpg";
import ad2 from "../assets/ad2.jpg";
import ad3 from "../assets/ad3.jpg";
import ted9 from "../assets/ted9.jpg"; // ✅ Background image
import ClientsSection from "../components/ClientsSection";

const showcaseImages = [ted, ted1, ted2, ted3, ted5, ad, ad1, ad2, ad3];

const services = [
  {
    title: "Wedding",
    desc: "Candid, cinematic, and emotional storytelling of your special day.",
    link: "/services/wedding",
  },
  {
    title: "Architecture",
    desc: "Capturing design, structure, and light in artistic frames.",
    link: "/services/architecture",
  },
];

export default function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* 🎥 Cinematic Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ted9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      {/* --- Page Content --- */}
      <div className="relative z-10">
        {/* --- 🎞️ Visual Showcase Section --- */}
        <Pagex title="Our Work" subtitle="Visual Showcase">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-purple-400 mb-3">
                Visual Showcase
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A glimpse into the artistry behind our lens — where every frame captures
                emotion, elegance, and timeless beauty.
              </p>
            </div>

            {/* --- Image Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {showcaseImages.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl group shadow-lg hover:shadow-purple-600/40 transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Showcase ${i + 1}`}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <span className="text-white text-lg font-medium">
                      View Shot
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Pagex>

        {/* --- 💍 Services: What I Offer --- */}
        <Pagex title="Services" subtitle="What I Offer">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s) => (
                <Link
                  to={s.link}
                  key={s.title}
                  className="bg-white/10 border border-purple-500/30 p-8 rounded-xl hover:border-purple-400 hover:scale-[1.03] transition-all duration-300 block text-center backdrop-blur-sm"
                >
                  <h4 className="text-2xl font-semibold mb-3 text-purple-400">
                    {s.title}
                  </h4>
                  <p className="text-gray-300 mb-3">{s.desc}</p>
                  <span className="text-purple-400 font-medium underline hover:text-white">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </Pagex>
      </div>

      {/* --- 🖼️ Image Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-purple-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
       {/* --- Clients Section --- */}
      <ClientsSection />
    </div>
  );
}
