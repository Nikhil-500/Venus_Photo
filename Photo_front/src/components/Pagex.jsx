import { motion } from "framer-motion";

export default function Pagex({ title, subtitle, children }) {
  return (
    <motion.section
      className="min-h-[80vh] py-20 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-heading text-accent mb-3">{title}</h2>
      {subtitle && <p className="text-textMut mb-10">{subtitle}</p>}
      {children}
    </motion.section>
  );
}
