// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = [
//   "CPVC Pipes",
//   "PVC Pipes",
//   "UPVC Pipes",
//   "SWR Pipes",
//   "Plumbing Fittings",
// ];

// export default function Astral() {
//   return (
//     <div>
//       <Header />

//       <section className="py-10 mt-20 px-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Astral</h1>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {products.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white shadow-md p-6 rounded-xl h-full flex items-center justify-center text-lg font-medium"
//             >
//               {item}
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       <Footer />
//     </div>
//   );
// }



// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = [
//   "CPVC Pipes",
//   "PVC Pipes",
//   "UPVC Pipes",
//   "SWR Pipes",
//   "Plumbing Fittings",
// ];

// export default function Astral() {
//   return (
//     <div className="bg-white">
//       <Header />

//       {/* HERO SECTION */}
//       <div className="bg-[#0c2d48] text-white py-20 mt-20 relative">
//         <div className="absolute inset-0 opacity-10 pattern-dots"></div>
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">Astral</h1>
//           <p className="text-lg sm:text-xl opacity-90">
//             Leading manufacturer of premium piping and plumbing systems.
//           </p>
//         </div>
//       </div>

//       {/* ABOUT SECTION */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">About Astral</h2>
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           Astral is known for delivering high-quality piping and plumbing
//           solutions for residential, commercial, and industrial applications.
//         </p>

//         <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
//         <p className="text-gray-700 mb-10 leading-relaxed">
//           Our range includes durable and reliable piping products built using
//           advanced technology to ensure safety and performance.
//         </p>
//       </section>

//       {/* PRODUCT GRID */}
//       <section className="py-12 px-4 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-8">Product Range</h2>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {products.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white shadow-md p-6 rounded-xl text-center text-lg font-medium"
//             >
//               {item}
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       <Footer />
//     </div>
//   );
// }





import React from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import { motion } from "framer-motion";
import logo from "../../assets/astral.png";

const products = [
  "CPVC Pipes",
  "PVC Pipes",
  "UPVC Pipes",
  "SWR Pipes",
  "Plumbing Fittings",
];

export default function Astral() {
  return (
    <div className="bg-white">
      <Header />

      {/* HERO SECTION */}
      <div className="bg-[#0c2d48] text-white py-20 mt-20 relative flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>

        <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          {/* LOGO */}
          <img
            src={logo}
            alt="Astral Logo"
            className="w-28 sm:w-36 md:w-44 object-contain"
          />

          {/* TITLE */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Astral</h1>
            <p className="text-lg sm:text-xl opacity-90">
              Leading manufacturer of premium piping and plumbing systems.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Astral</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Astral is known for delivering high-quality piping and plumbing
          solutions for residential, commercial, and industrial applications.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Our range includes durable and reliable piping products built using
          advanced technology to ensure safety and performance.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Product Range</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md p-6 rounded-xl text-center text-lg font-medium"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
