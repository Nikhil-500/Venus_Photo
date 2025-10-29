import { useState } from "react";
import { motion } from "framer-motion";
import dr from "../assets/dr.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setForm({ name: "", email: "", phone: "", message: "" });
        setStatus({
          loading: false,
          success:
            "✅ Message sent successfully! We'll contact you soon via Email or WhatsApp.",
          error: null,
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("❌ Send failed:", error);
      setStatus({
        loading: false,
        success: null,
        error:
          "❌ Failed to send message. Please check your internet or try again later.",
      });
    }
  };

  return (
    <section
      className="relative text-white py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${dr})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* --- Overlay --- */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* --- Layout --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
        {/* --- Left: Contact Form --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 border border-purple-500/30 p-8 rounded-2xl shadow-2xl backdrop-blur-md hover:shadow-purple-400/30 transition-all duration-500"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-8">
            Have questions or want to book a session? Fill out the form below,
            and we’ll reach out to you via Email or WhatsApp.
          </p>

          {/* --- Form --- */}
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition"
            />

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition"
            />

            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (+91...)"
              className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition"
            />

            <textarea
              required
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 focus:outline-none transition resize-none"
            />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              disabled={status.loading}
              className={`py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                status.loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-purple-500 hover:bg-purple-400 text-black"
              }`}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status.success && (
              <p className="text-green-400 mt-2 text-center">{status.success}</p>
            )}
            {status.error && (
              <p className="text-rose-400 mt-2 text-center">{status.error}</p>
            )}
          </form>
        </motion.div>

        {/* --- Right: Map + Info --- */}
        <div className="relative space-y-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-[450px] rounded-2xl overflow-hidden border border-purple-600/30 shadow-xl"
          >
            <iframe
              title="Muruli Raj Photography Location"
              src="https://www.google.com/maps?q=Muruliraj+Photography&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="grayscale hover:grayscale-0 transition duration-700"
            ></iframe>
          </motion.div>

          {/* Address Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-lg border border-purple-400/20 rounded-xl p-6 text-right shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-2">
              Muruli Raj Photography
            </h3>
            <p className="text-gray-300 mb-1">
              📍 Venkateshwara Badavane, Harangi Rd, Kushalnagar, Karnataka
              571234
            </p>
            <p className="text-gray-400">
              📞 +91 9035311565 &nbsp; | &nbsp; ✉️ muruliraj5@gmail.com
            </p>
            <p className="text-gray-500 text-sm mt-1">Mon – Sat, 9 AM – 6 PM</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
