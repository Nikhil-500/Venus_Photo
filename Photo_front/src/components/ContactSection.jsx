// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function ContactSection({ onRegister }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const ownerNumber = "919999888777"; // Your WhatsApp number

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       from_name: form.name,
//       from_email: form.email,
//       phone: form.phone,
//       message: form.message || "No message",
//     };

//     // Send via EmailJS
//     emailjs
//       .send(
//         "service_920s4ze",
//         "template_w0j9qxf",
//         templateParams,
//         "rVUZLZTCxCsLz3vFA"
//       )
//       .then(() => {
//         // ✅ Send WhatsApp message automatically via WhatsApp API redirect
//         const whatsappMsg = encodeURIComponent(
//           `New Registration:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`
//         );

//         window.open(`https://wa.me/${ownerNumber}?text=${whatsappMsg}`, "_blank");

//         alert("Thank you for registering!");
//         setLoading(false);
//         setForm({ name: "", email: "", phone: "", message: "" });
//         onRegister && onRegister();
//       })
//       .catch(() => {
//         alert("Failed to submit. Please try again.");
//         setLoading(false);
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-950 text-center"
//     >
//       <h2 className="text-4xl font-extrabold text-purple-400 mb-4">
//         Get in Touch
//       </h2>
//       <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//         Please fill out this form to access our photography portfolio and
//         services.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
//       >
//         <input
//           name="name"
//           required
//           placeholder="Your Name"
//           onChange={handleChange}
//           value={form.name}
//           className="p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
//         />
//         <input
//           name="email"
//           type="email"
//           required
//           placeholder="Your Email"
//           onChange={handleChange}
//           value={form.email}
//           className="p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
//         />
//         <input
//           name="phone"
//           required
//           placeholder="Phone Number"
//           onChange={handleChange}
//           value={form.phone}
//           className="p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 col-span-2"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           onChange={handleChange}
//           value={form.message}
//           className="p-3 bg-gray-800 border border-gray-700 rounded-md h-24 focus:ring-2 focus:ring-purple-500 col-span-2"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="col-span-2 bg-purple-500 text-black font-semibold py-3 rounded-md hover:bg-purple-600 transition-all"
//         >
//           {loading ? "Sending..." : "Register Now"}
//         </button>
//       </form>
//     </section>
//   );
// }
