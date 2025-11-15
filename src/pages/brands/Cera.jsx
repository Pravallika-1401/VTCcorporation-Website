// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = [
//   "Sanitaryware",
//   "Faucets",
//   "Showers",
//   "Bathroom Accessories",
//   "Kitchen Sinks",
// ];

// export default function Cera() {
//   return (
//     <div>
//       <Header />

//       <section className="py-10 mt-20 px-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Cera</h1>

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
//   "Sanitaryware",
//   "Faucets",
//   "Showers",
//   "Bathroom Accessories",
//   "Kitchen Sinks",
// ];

// export default function Cera() {
//   return (
//     <div className="bg-white">
//       <Header />

//       {/* HERO */}
//       <div className="bg-[#0c2d48] text-white py-20 mt-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pattern-dots"></div>

//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cera</h1>
//           <p className="text-lg sm:text-xl opacity-90">
//             Premium sanitaryware & bathroom solutions trusted across India.
//           </p>
//         </div>
//       </div>

//       {/* ABOUT */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">About Cera</h2>
//         <p className="text-gray-700 leading-relaxed mb-6">
//           Cera is one of India’s most trusted sanitaryware brands, offering
//           world-class bathroom fittings and durable wellness solutions. With
//           artistic craftsmanship and advanced manufacturing, Cera continues to
//           provide modern, stylish, and functional designs.
//         </p>

//         <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
//         <p className="text-gray-700 leading-relaxed mb-10">
//           We supply the complete range of Cera sanitaryware, faucets, showers,
//           and bathroom accessories designed for modern homes, commercial
//           environments, and premium interiors.
//         </p>
//       </section>

//       {/* PRODUCTS GRID */}
//       <section className="py-12 px-4 max-w-6xl mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-8">Product Range</h2>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {products.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white shadow-md p-6 rounded-xl h-full flex items-center justify-center text-lg font-medium text-gray-800"
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
import logo from "../../assets/cera.png";

const products = [
  "Sanitaryware",
  "Faucets",
  "Showers",
  "Bathroom Accessories",
  "Kitchen Sinks",
];

export default function Cera() {
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
            alt="Cera Logo"
            // className="w-36 sm:w-44 md:w-52 object-contain bg-white p-3 rounded-lg shadow-md"
            className="w-28 sm:w-36 md:w-44 object-contain"
          />

          {/* TEXT */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Cera</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-xl">
              Premium sanitaryware & bathroom solutions trusted across India.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Cera</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Cera is one of India’s most trusted sanitaryware brands.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed mb-10">
          We supply the complete range of Cera sanitaryware and accessories.
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
              className="bg-white shadow-md p-6 rounded-xl text-lg font-medium text-center"
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
