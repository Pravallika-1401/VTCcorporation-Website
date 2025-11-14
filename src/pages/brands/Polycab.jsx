// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = ["Wires", "Cables", "Switches", "FMEG Products"];

// export default function Polycab() {
//   return (
//     <div>
//       <Header />

//       <section className="py-10 mt-20 px-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
//           Polycab
//         </h1>

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



import React from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import { motion } from "framer-motion";

const products = ["Wires", "Cables", "Switches", "FMEG Products"];

export default function Polycab() {
  return (
    <div className="bg-white">
      <Header />

      {/* HERO */}
      <div className="bg-[#0c2d48] text-white py-20 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Polycab</h1>
          <p className="text-lg sm:text-xl opacity-90">
            India’s leading brand for wires, cables, and electrical accessories.
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Polycab</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Polycab is renowned for manufacturing high-quality electrical wires,
          cables, and FMEG solutions. Their products are engineered for safety,
          efficiency, and long-term performance in residential, commercial, and
          industrial environments.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          We provide the entire Polycab product portfolio including power cables,
          domestic wires, switches, lighting, and FMEG appliances.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Product Range</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {products.map((prod, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md p-6 rounded-xl flex items-center justify-center text-lg font-medium text-gray-800"
            >
              {prod}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
