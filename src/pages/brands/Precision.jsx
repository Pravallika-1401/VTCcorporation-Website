// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = ["Valves", "Fittings", "Industrial Pipes", "Irrigation Systems"];

// export default function Precision() {
//   return (
//     <div>
//       <Header />

//       <section className="py-10 mt-20 px-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Precision</h1>

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

// const products = ["Valves", "Fittings", "Industrial Pipes", "Irrigation Systems"];

// export default function Precision() {
//   return (
//     <div className="bg-white">
//       <Header />

//       {/* HERO */}
//       <div className="bg-[#0c2d48] text-white py-20 mt-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pattern-dots"></div>

//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">Precision</h1>
//           <p className="text-lg sm:text-xl opacity-90">
//             Trusted brand for industrial-grade valves, fittings & piping solutions.
//           </p>
//         </div>
//       </div>

//       {/* ABOUT SECTION */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">About Precision</h2>

//         <p className="text-gray-700 leading-relaxed mb-6">
//           Precision is known for delivering strong, durable, and highly efficient
//           industrial valves, pipes, and irrigation systems designed to withstand
//           tough environments and ensure long-term reliability.
//         </p>

//         <h2 className="text-2xl font-bold mb-4">What We Offer</h2>

//         <p className="text-gray-700 leading-relaxed mb-10">
//           We supply a full range of Precision industrial products ideal for
//           agriculture, manufacturing, water management, and large-scale
//           infrastructure projects.
//         </p>
//       </section>

//       {/* PRODUCT RANGE */}
//       <section className="py-12 px-4 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-8">Product Range</h2>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {products.map((prod, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white shadow-md p-6 rounded-xl flex items-center justify-center text-lg font-medium text-gray-800"
//             >
//               {prod}
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
import logo from "../../assets/precision.png";

const products = ["Valves", "Fittings", "Industrial Pipes", "Irrigation Systems"];

export default function Precision() {
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
            alt="Precision Logo"
            // className="w-36 sm:w-44 md:w-52 object-contain bg-white p-3 rounded-lg shadow-md"
            className="w-28 sm:w-36 md:w-44 object-contain"
          />

          {/* TEXT */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Precision</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-xl">
              Trusted brand for industrial-grade valves, fittings & piping systems.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Precision</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Precision delivers durable industrial valves, pipes, and irrigation systems.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed mb-10">
          We supply a full range of Precision industrial products.
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
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md p-6 rounded-xl text-center text-lg font-medium"
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
