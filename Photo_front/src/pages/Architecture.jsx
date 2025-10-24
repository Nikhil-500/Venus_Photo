import { motion } from "framer-motion";
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";
import { useNavigate } from "react-router-dom";
import architectureImg from "../assets/architecture.jpg";


export default function Architecture() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booknow"); // ✅ Go to BookNow page
  };

  return (
    <Pagex title="Architecture Photography" subtitle="Where structure meets art">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              Framing Design & Light
            </h3>
            <p className="text-textMut mb-4">
              We highlight the beauty of structures through geometry, perspective, and the magic of light.
              From ancient temples to modern architecture — we turn design into emotion.
            </p>
            <p className="text-textMut mb-6">
              Whether it’s architectural interiors or exteriors, every image reflects balance,
              rhythm, and timeless artistry.
            </p>
            <button
              onClick={handleBookNow}
              className="px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Book Now
            </button>
          </div>

          <motion.img
            src={architectureImg}
            alt="Architecture Photography"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </AnimatedSection>
    </Pagex>
  );
}
