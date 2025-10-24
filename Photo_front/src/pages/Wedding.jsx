import { motion } from "framer-motion";
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";
import { useNavigate } from "react-router-dom";

export default function Wedding() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booknow"); // Go to BookNow page
  };

  return (
    <Pagex title="Wedding Photography" subtitle="Capturing timeless love stories">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80"
            alt="Wedding Photography"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.02 }}
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Celebrate Every Emotion
            </h3>
            <p className="text-textMut mb-4">
              From the nervous laughter before the vows to the tears of joy during the ceremony,
              our wedding photography captures every unfiltered emotion in cinematic style.
            </p>
            <p className="text-textMut mb-6">
              Our goal is to make you relive your special day every time you look at your photos —
              natural, elegant, and truly yours.
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
