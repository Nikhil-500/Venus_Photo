import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Pagex title="About Muruliraj" subtitle="The Story Behind the Lens">
      <AnimatedSection>
        {/* Background subtle gradient effect */}
        <div className="relative isolate">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl"
          />

          {/* Content section */}
          <div className="relative grid md:grid-cols-2 gap-12 items-center py-8">
            {/* --- Left: Image --- */}
            <motion.img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop"
              alt="About Muruliraj"
              className="w-full h-96 rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />

            {/* --- Right: Text --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-300 leading-relaxed"
            >
              <h3 className="text-3xl font-semibold mb-4 text-accent">
                Hi, I’m <span className="text-white">Muruliraj</span>
              </h3>
              <p className="mb-4">
                I’m a <span className="font-semibold text-white">wedding and portrait photographer</span> 
                based in Tamil Nadu. My passion lies in capturing authentic emotions and turning fleeting 
                moments into everlasting memories.
              </p>

              <p className="mb-4">
                Over the past <span className="font-medium text-accent">7+ years</span>, I’ve worked with 
                hundreds of couples, families, and brands across South India. My approach blends documentary-style 
                storytelling with modern artistic flair — natural light, real laughter, and unfiltered love.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a
                  href="/contact"
                  className="inline-block mt-4 px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-purple-600 hover:text-black transition duration-300"
                >
                  Let’s Create Magic Together
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* --- Highlighted quote section --- */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 text-center text-xl italic text-gray-400 max-w-3xl mx-auto"
          >
            “Photography is more than just pictures — it’s about capturing emotions, preserving memories, 
            and telling stories that live forever.”
          </motion.div>
        </div>
      </AnimatedSection>
    </Pagex>
  );
}
