// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = [
//   "PVC Pipes",
//   "CPVC Pipes",
//   "UPVC Pipes",
//   "Fittings",
//   "Agricultural Pipes",
// ];

// export default function RN() {
//   return (
//     <div>
//       <Header />

//       <section className="py-10 mt-20 px-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">RN</h1>

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
//   "PVC Pipes",
//   "CPVC Pipes",
//   "UPVC Pipes",
//   "Fittings",
//   "Agricultural Pipes",
// ];

// export default function RN() {
//   return (
//     <div className="bg-white">
//       <Header />

//       {/* HERO */}
//       <div className="bg-[#0c2d48] text-white py-20 mt-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pattern-dots"></div>

//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">RN</h1>
//           <p className="text-lg sm:text-xl opacity-90">
//             Durable and affordable piping systems trusted across India.
//           </p>
//         </div>
//       </div>

//       {/* ABOUT SECTION */}
//       <section className="py-12 px-4 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">About RN Pipes</h2>

//         <p className="text-gray-700 leading-relaxed mb-6">
//           RN manufactures long-lasting and cost-effective pipes for household,
//           agricultural, and industrial use. Their engineering ensures strong
//           resistance, leak-proof installation, and reliable performance.
//         </p>

//         <h2 className="text-2xl font-bold mb-4">What We Offer</h2>

//         <p className="text-gray-700 leading-relaxed mb-10">
//           We offer RN’s full range of PVC, UPVC, CPVC, and agricultural pipes
//           along with high-quality fittings suitable for modern plumbing systems.
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
import logo from "../../assets/rn.png";

const products = [
  "PVC Pipes",
  "CPVC Pipes",
  "UPVC Pipes",
  "Fittings",
  "Agricultural Pipes",
];

export default function RN() {
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
            alt="RN Logo"
            // className="w-36 sm:w-44 md:w-52 object-contain bg-white p-3 rounded-lg shadow-md"
            className="w-24 sm:w-36 md:w-44 object-contain"
          />

          {/* TEXT */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">RN</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-xl">
              Durable and affordable piping systems trusted across India.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About RN Pipes</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          RN manufactures long-lasting and cost-effective pipes.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed mb-10">
          We supply PVC, UPVC, CPVC, and agricultural pipes.
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
