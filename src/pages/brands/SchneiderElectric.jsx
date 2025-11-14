// import React from "react";
// import Header from "../../components/home/Header";
// import Footer from "../../components/home/Footer";
// import { motion } from "framer-motion";

// const products = [
//   "MCB",
//   "RCCB",
//   "Distribution Boards",
//   "Switches",
//   "Electrical Panels",
// ];

// export default function SchneiderElectric() {
//   return (
//     <div>
//       <Header />

//       <section className="py-10 mt-20 px-4 max-w-6xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
//           Schneider Electric
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

const products = [
  "MCB",
  "RCCB",
  "Distribution Boards",
  "Switches",
  "Electrical Panels",
];

export default function SchneiderElectric() {
  return (
    <div className="bg-white">
      <Header />

      {/* ------------------ HERO SECTION ------------------ */}
      <div className="bg-[#0c2d48] text-white py-20 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Schneider Electric
          </h1>

          <p className="text-lg sm:text-xl opacity-90">
            Global leader in electrical protection, automation, and energy management.
          </p>
        </div>
      </div>

      {/* ------------------ BRAND DESCRIPTION ------------------ */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Schneider Electric</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Schneider Electric is a worldwide leader in energy management and
          electrical safety solutions. With decades of innovation, the brand is
          known for delivering highly reliable protection devices, automation
          systems, and power distribution products designed for homes,
          industries, and commercial environments. Their technology ensures
          maximum safety, efficiency, and long-term durability.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          We provide Schneider Electric’s complete range of electrical safety
          and distribution products. These products are engineered to meet
          international standards and ensure top-tier performance. Whether it's
          home electrical protection or industrial control systems, Schneider
          Electric remains one of the most trusted and preferred brands.
        </p>
      </section>

      {/* ------------------ PRODUCTS GRID ------------------ */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Product Range</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md p-6 rounded-xl h-full flex items-center justify-center text-lg font-medium text-gray-800"
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
