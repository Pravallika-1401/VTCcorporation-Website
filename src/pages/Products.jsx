import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Boxes, Droplet, Sprout, Refrigerator, ArrowRight, Search, Filter } from 'lucide-react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import { createPageUrl } from '../utils';

import polycab from "../assets/polycab.png";
import schneider from "../assets/schneider.png";
import precision from "../assets/precision.png";
import astral from "../assets/astral.png";
import geberit from "../assets/geberit.png";
import century from "../assets/century.png";
import simpol from "../assets/simpolo.png";
import mapei from "../assets/mapei.png";
import kohler from "../assets/kohler.png";
import franke from "../assets/franke.png";
import cera from "../assets/cera.png";
import racold from "../assets/racold.png";
import ionexchange from "../assets/ionexchange.png";
import vguard from "../assets/vguard.png";
import grundfos from "../assets/grundfos.png";
import brp from "../assets/brp.png";
import rn from "../assets/rn.png";
import nikolas from "../assets/nikolas.png";

import Electricals from "../assets/E1.png";
import Doors from "../assets/Doors.png";
import Plumbing from "../assets/P1.png";
import Sanitary from "../assets/s1.png";
import Appliance from "../assets/A1.png";
import { link } from 'framer-motion/client';


const categories = [
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical Solutions',
    description: 'Complete range of switches, wires, MCBs, lighting solutions and electrical accessories',
    // image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    image: Electricals,
    gradient: 'from-[#0b2343] to-[#1a3a5c]',
    brands: ['Schneider', 'Polycab', 'RN'],
    products: ['Modular Switches', 'Electrical Wires', 'MCBs & DBs', 'LED Lights', 'Fans', 'Stabilizers']
  },
  {
    id: 'tiles',
    icon: Boxes,
    title: 'Doors,Tiles & Flooring',
    description: 'Premium ceramic, vitrified, marble tiles and designer flooring solutions',
    // image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
    image: Doors,
    gradient: 'from-[#bba14f] to-[#d4b870]',
    brands: ['Century Doors', 'Simpolo', 'Mapei'],
    products: ['Vitrified Tiles', 'Ceramic Tiles', 'Marble Tiles', 'Wall Tiles', 'Parking Tiles', 'Wooden Flooring']
  },
  {
    id: 'plumbing',
    icon: Droplet,
    title: 'Plumbing Systems',
    description: 'High-quality CPVC pipes, PVC fittings, valves and complete plumbing infrastructure',
    // image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80',
    image: Plumbing,
    gradient: 'from-[#008c94] to-[#00b8a9]',
    brands: ['Geberit', 'Precision', 'Astral', 'Brp'],
    products: ['CPVC Pipes', 'PVC Pipes', 'Pipe Fittings', 'Valves', 'Water Tanks', 'Drainage Systems']
  },
  {
    id: 'sanitaryware',
    icon: Sprout,
    title: 'Sanitaryware & Bath Fittings',
    description: 'Modern bathroom fixtures, kitchen sinks, faucets and premium bath accessories',
    // image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    image: Sanitary,
    gradient: 'from-[#0b2343] to-[#008c94]',
    brands: ['Cera', 'Franke', 'Kohler', 'Nikolas'],
    // brands: [
    // { name: 'Geberit', link: '/brochures/Ceraproducts.pdf' },
    // ],
    products: ['Wash Basins', 'Water Closets', 'Kitchen Sinks', 'Faucets', 'Showers', 'Bath Accessories']
  },
  {
    id: 'appliances',
    icon: Refrigerator,
    title: 'Home Appliances',
    description: 'Energy-efficient kitchen and home appliances from leading brands',
    // image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    image: Appliance,
    gradient: 'from-[#1a3a5c] to-[#bba14f]',
    brands: ['Racold', 'Ion Exchange', 'V-Guard', 'Grundfos'],
    products: ['Refrigerators', 'Washing Machines', 'Air Conditioners', 'Microwave Ovens', 'Water Heaters', 'Chimneys']
  }
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-[#eef7fb]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b2343] to-[#1a3a5c] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Products
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
              Comprehensive range of premium building materials from trusted manufacturers
            </p>

            {/* Search Bar */}
            {/* <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-[#bba14f] text-gray-700 shadow-lg"
                />
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-[#0b2343] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0b2343] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`} />
                  
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3
                      className="text-3xl font-bold text-white mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Brand Tags */}
                  {/* <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Featured Brands:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.map(brand => (
                        <span
                          key={brand}
                          className="px-3 py-1 bg-[#eef7fb] text-[#0b2343] text-sm font-medium rounded-full"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Featured Brands:</h4>
                          <div className="flex flex-wrap gap-3 items-center">
                            {category.brands.map((brand) => {
                              const brandLogos = {
                                Polycab: polycab,
                                Schneider: schneider,
                                Precision: precision,
                                Astral: astral,
                                Geberit: geberit,
                                Century: century,
                                Simpolo: simpol,
                                Mapei: mapei,
                                Kohler: kohler,
                                Franke: franke,
                                Cera: cera,
                                Racold: racold,
                                "Ion Exchange": ionexchange,
                                "V-Guard": vguard,
                                Grundfos: grundfos,
                                Brp: brp,
                                RN: rn,
                                Nikolas: nikolas,
                                "Century Doors": century,
                              };

                              const logoSrc = brandLogos[brand];

                              return (
                                <div
                                  key={brand}
                                  className="bg-[#eef7fb] rounded-full px-4 py-2 flex items-center justify-center shadow-sm"
                                >
                                  {logoSrc ? (
                                    <img
                                      src={logoSrc}
                                      alt={brand}
                                      className="h-8 w-auto object-contain"
                                    />
                                  ) : (
                                    <span className="text-[#0b2343] text-sm font-medium">{brand}</span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>


                  {/* Product List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Product Range:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.products.map(product => (
                        <div key={product} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#008c94] rounded-full" />
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  {/* <Link
                    to={createPageUrl(`ProductDetail?category=${category.id}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0b2343] to-[#008c94] text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b2343] to-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Need Help Choosing the Right Products?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our technical experts are here to guide you through product selection, 
              specifications, and bulk ordering
            </p>
            <Link
              to={createPageUrl('Home') + '#contact'}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}