// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = [
//   "Tile Adhesives",
//   "Grouts",
//   "Sealants",
//   "Waterproofing",
//   "Surface Preparation",
// ];

// export default function Mapei() {
//   return (
//     <div>
//       <Header />

//       <section className="py-10 mt-20 px-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Mapei</h1>

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
//   "Tile Adhesives",
//   "Grouts",
//   "Sealants",
//   "Waterproofing",
//   "Surface Preparation",
// ];

// export default function Mapei() {
//   return (
//     <div className="bg-white">
//       <Header />

//       {/* HERO */}
//       <div className="bg-[#0c2d48] text-white py-20 mt-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pattern-dots"></div>

//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mapei</h1>
//           <p className="text-lg sm:text-xl opacity-90">
//             Global leader in building materials, adhesives, and waterproofing systems.
//           </p>
//         </div>
//       </div>

//       {/* ABOUT SECTION */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">About Mapei</h2>

//         <p className="text-gray-700 leading-relaxed mb-6">
//           Mapei is a world-class manufacturer known for its innovative tile
//           adhesives, grouts, sealants, waterproofing systems, and construction
//           chemicals. With decades of trusted expertise, Mapei products are used
//           in large-scale construction, home interiors, and industrial projects
//           across the globe.
//         </p>

//         <h2 className="text-2xl font-bold mb-4">What We Offer</h2>

//         <p className="text-gray-700 leading-relaxed mb-10">
//           We supply the entire range of Mapei products designed for premium
//           tiling, flooring, surface protection, and durability enhancement. All
//           products meet international construction standards.
//         </p>
//       </section>

//       {/* PRODUCTS */}
//       <section className="py-12 px-4 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-8">Product Range</h2>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {products.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white shadow-md p-6 rounded-xl flex items-center justify-center text-lg font-medium text-gray-800"
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
import logo from "../../assets/mapei.png";

const products = [
  "Tile Adhesives",
  "Grouts",
  "Sealants",
  "Waterproofing",
  "Surface Preparation",
];

export default function Mapei() {
  return (
    <div className="bg-white">
      <Header />

      {/* HERO */}
      <div className="bg-[#0c2d48] text-white py-20 mt-20 relative px-4">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
          
          {/* LOGO */}
          <img
            src={logo}
            alt="Mapei Logo"
            // className="w-36 sm:w-44 md:w-52 object-contain bg-white p-3 rounded-lg shadow-md"
            className="w-28 sm:w-36 md:w-44 object-contain"
          />

          {/* TEXT */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Mapei</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-xl">
              Global leader in building materials, adhesives & waterproofing systems.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Mapei</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Mapei is known for innovative tile adhesives and construction chemicals.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed mb-10">
          We supply the full range of Mapei tiling & waterproofing products.
        </p>
      </section>

      {/* GRID */}
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
