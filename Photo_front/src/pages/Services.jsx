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
import Pagex from "../components/Pagex";
import AnimatedSection from "../components/AnimatedSection";

const services = [
  {
    title: "Wedding",
    desc: "Candid, cinematic, and emotional storytelling of your special day.",
    link: "/services/wedding", // ✅ Updated path
  },
  {
    title: "Architecture",
    desc: "Capturing design, structure, and light in artistic frames.",
    link: "/services/architecture", // ✅ Updated path
  },
];

export default function Services() {
  return (
    <Pagex title="Services" subtitle="What I Offer">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Link
              to={s.link}
              key={s.title}
              className="bg-bgPrimary/80 border border-zinc-700 p-8 rounded-xl hover:border-accent hover:scale-[1.03] transition-all duration-300 block text-center"
            >
              <h4 className="text-2xl font-semibold mb-3 text-accent">{s.title}</h4>
              <p className="text-textMut mb-3">{s.desc}</p>
              <span className="text-accent font-medium underline hover:text-white">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </AnimatedSection>
    </Pagex>
  );
}
