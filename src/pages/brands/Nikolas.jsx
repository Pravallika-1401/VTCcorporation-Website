


import React from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import { motion } from "framer-motion";
import logo from "../../assets/nikolas.png";

const products = ["Showers", "Faucets", "Bathroom Accessories", "Wellness Products"];

export default function Nikolas() {
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
            alt="Nikolas Logo"
            className="w-28 sm:w-36 md:w-44 object-contain"
          />

          {/* TEXT */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Nikolas</h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-xl">
              Elegant and luxury bathroom solutions crafted for modern homes.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Nikolas</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Nikolas offers high-end bathroom fixtures with a focus on aesthetics and durability.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">
          We supply luxurious taps, showers, and wellness accessories for stylish spaces.
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
