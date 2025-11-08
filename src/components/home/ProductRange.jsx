// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Zap, Boxes, Droplet, Sprout, Refrigerator, ArrowRight } from 'lucide-react';
// import { createPageUrl } from '../../utils';

// const categories = [
//   {
//     icon: Zap,
//     title: 'Electrical Solutions',
//     description: 'Switches, wires, MCBs, lights and complete electrical systems from trusted brands',
//     image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
//     gradient: 'from-[#0b2343] to-[#1a3a5c]',
//     brands: ['Schneider', 'Polycab', 'RN']
//   },
//   {
//     icon: Boxes,
//     title: 'Doors,Tiles & Flooring',
//     description: 'Premium ceramic, Doors, marble and designer tiles for walls and floors',
//     image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
//     gradient: 'from-[#bba14f] to-[#d4b870]',
//     brands: ['Century Doors', 'Simpolo', 'Mapei']
//   },
//   {
//     icon: Droplet,
//     title: 'Plumbing Systems',
//     description: 'CPVC pipes, PVC Pipes, valves and complete plumbing solutions',
//     image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
//     gradient: 'from-[#008c94] to-[#00b8a9]',
//     brands: ['Geberit', 'Precision', 'Astral', 'Brp']
//   },
//   {
//     icon: Sprout,
//     title: 'Sanitaryware',
//     description: 'Modern bathroom fittings, kitchen sinks, faucets and accessories',
//     image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
//     gradient: 'from-[#0b2343] to-[#008c94]',
//     brands: ['Cera', 'Franke', 'Kohler', 'Nikolas']
//   },
//   {
//     icon: Refrigerator,
//     title: 'Home Appliances',
//     description: 'Energy-efficient kitchen and home appliances for modern living',
//     image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80',
//     gradient: 'from-[#1a3a5c] to-[#bba14f]',
//     brands: ['Racold', 'Ion Exchange', 'V-Guard', 'Grundfos']
//   }
// ];

// export default function ProductRange() {
//   return (
//     <section id="products" className="py-24 bg-[#eef7fb] relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{ 
//           backgroundImage: 'radial-gradient(circle, #0b2343 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
//             <span className="text-[#008c94] font-semibold text-sm tracking-wider uppercase">
//               Our Product Range
//             </span>
//           </div>
          
//           <h2
//             className="text-4xl sm:text-5xl font-bold text-[#0b2343] mb-6"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             Premium Solutions for Every Need
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             From foundation to finishing, we provide comprehensive building materials 
//             and home solutions from industry-leading brands
//           </p>
//         </motion.div>

//         {/* Product Categories Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                
//                 {/* Icon */}
//                 <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
//                   <category.icon className="w-8 h-8 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-[#0b2343] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
//                   {category.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {category.description}
//                 </p>

//                 {/* Brand Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {category.brands.map((brand) => (
//                     <span
//                       key={brand}
//                       className="px-3 py-1 bg-[#eef7fb] text-[#0b2343] text-xs font-medium rounded-full"
//                     >
//                       {brand}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Learn More Link */}
//                 <Link
//                   to={createPageUrl('Products')}
//                   className="flex items-center gap-2 text-[#008c94] font-semibold group-hover:gap-3 transition-all duration-300"
//                 >
//                   <span>Learn More</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>

//               {/* Hover Border Effect */}
//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#bba14f] rounded-2xl transition-colors duration-300 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Brand Partners Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 bg-white rounded-2xl p-12 shadow-lg"
//         >
//           <div className="text-center mb-8">
//             <h3
//               className="text-3xl font-bold text-[#0b2343] mb-3"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Authorized Distributor
//             </h3>
//             <p className="text-gray-600">
//               Partnering with 40+ leading brands to bring you authentic, premium products
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
//             {['Schneider', 'Polycab', 'RN','Century Doors', 'Simpolo', 'Mapei','Geberit', 'Precision', 'Astral', 'Brp','Cera', 'Franke', 'Kohler', 'Nikolas','Racold', 'Ion Exchange', 'V-Guard', 'Grundfos'].map((brand) => (
//               <div
//                 key={brand}
//                 className="flex items-center justify-center p-4 bg-[#eef7fb] rounded-lg hover:bg-gray-100 transition-colors duration-300"
//               >
//                 <span className="text-[#0b2343] font-semibold text-sm">{brand}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }













// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Zap, Boxes, Droplet, Sprout, Refrigerator, ArrowRight } from 'lucide-react';
// import { createPageUrl } from '../../utils';


// // Brand Logos
// import polycab from "../assets/polycab.png";
// import schneider from "../assets/schneider.png";
// import precision from "../assets/precision.png";
// import astral from "../assets/astral.png";
// import geberit from "../assets/geberit.png";
// import century from "../assets/century.png";
// import simpol from "../assets/simpolo.png";
// import mapei from "../assets/mapei.png";
// import kohler from "../assets/kohler.png";
// import franke from "../assets/franke.png";
// import cera from "../assets/cera.png";
// import racold from "../assets/racold.png";
// import ionexchange from "../assets/ionexchange.png";
// import vguard from "../assets/vguard.png";
// import grundfos from "../assets/grundfos.png";
// import brp from "../assets/brp.png";
// import rn from "../assets/rn.png";
// import nikolas from "../assets/nikolas.png";

// const categories = [
//   {
//     icon: Zap,
//     title: 'Electrical Solutions',
//     description: 'Switches, wires, MCBs, lights and complete electrical systems from trusted brands',
//     image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
//     gradient: 'from-[#0b2343] to-[#1a3a5c]',
//     brands: ['Schneider', 'Polycab', 'RN']
//   },
//   {
//     icon: Boxes,
//     title: 'Doors,Tiles & Flooring',
//     description: 'Premium ceramic, Doors, marble and designer tiles for walls and floors',
//     image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
//     gradient: 'from-[#bba14f] to-[#d4b870]',
//     brands: ['Century Doors', 'Simpolo', 'Mapei']
//   },
//   {
//     icon: Droplet,
//     title: 'Plumbing Systems',
//     description: 'CPVC pipes, PVC Pipes, valves and complete plumbing solutions',
//     image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
//     gradient: 'from-[#008c94] to-[#00b8a9]',
//     brands: ['Geberit', 'Precision', 'Astral', 'Brp']
//   },
//   {
//     icon: Sprout,
//     title: 'Sanitaryware',
//     description: 'Modern bathroom fittings, kitchen sinks, faucets and accessories',
//     image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
//     gradient: 'from-[#0b2343] to-[#008c94]',
//     brands: ['Cera', 'Franke', 'Kohler', 'Nikolas']
//   },
//   {
//     icon: Refrigerator,
//     title: 'Home Appliances',
//     description: 'Energy-efficient kitchen and home appliances for modern living',
//     image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80',
//     gradient: 'from-[#1a3a5c] to-[#bba14f]',
//     brands: ['Racold', 'Ion Exchange', 'V-Guard', 'Grundfos']
//   }
// ];

// export default function ProductRange() {
//   return (
//     <section id="products" className="py-24 bg-[#eef7fb] relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{ 
//           backgroundImage: 'radial-gradient(circle, #0b2343 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
//             <span className="text-[#008c94] font-semibold text-sm tracking-wider uppercase">
//               Our Product Range
//             </span>
//           </div>
          
//           <h2
//             className="text-4xl sm:text-5xl font-bold text-[#0b2343] mb-6"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             Premium Solutions for Every Need
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             From foundation to finishing, we provide comprehensive building materials 
//             and home solutions from industry-leading brands
//           </p>
//         </motion.div>

//         {/* Product Categories Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                
//                 {/* Icon */}
//                 <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
//                   <category.icon className="w-8 h-8 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-[#0b2343] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
//                   {category.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   {category.description}
//                 </p>

//                 {/* Brand Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {category.brands.map((brand) => (
//                     <span
//                       key={brand}
//                       className="px-3 py-1 bg-[#eef7fb] text-[#0b2343] text-xs font-medium rounded-full"
//                     >
//                       {brand}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Learn More Link */}
//                 <Link
//                   to={createPageUrl('Products')}
//                   className="flex items-center gap-2 text-[#008c94] font-semibold group-hover:gap-3 transition-all duration-300"
//                 >
//                   <span>Learn More</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>

//               {/* Hover Border Effect */}
//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#bba14f] rounded-2xl transition-colors duration-300 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Brand Partners Section with Marquee */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 bg-white rounded-2xl p-12 shadow-lg"
//         >
//           <div className="text-center mb-8">
//             <h3
//               className="text-3xl font-bold text-[#0b2343] mb-3"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Authorized Distributor
//             </h3>
//             <p className="text-gray-600">
//               Partnering with 40+ leading brands to bring you authentic, premium products
//             </p>
//           </div>

//           {/* Marquee Effect */}
//           <div className="relative overflow-hidden">
//             <div className="flex animate-marquee space-x-12">
//               {[
//                 'Schneider', 'Polycab', 'RN', 'Century Doors', 'Simpolo', 'Mapei',
//                 'Geberit', 'Precision', 'Astral', 'Brp', 'Cera', 'Franke', 
//                 'Kohler', 'Nikolas', 'Racold', 'Ion Exchange', 'V-Guard', 'Grundfos'
//               ].map((brand) => (
//                 <div
//                   key={brand}
//                   className="flex items-center justify-center min-w-[150px] bg-[#eef7fb] rounded-lg p-4 shadow-sm"
//                 >
//                   {/* Replace text with <img src={logo} alt={brand} className="h-12 object-contain" /> when you add logos */}
//                   <span className="text-[#0b2343] font-semibold text-sm">{brand}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Marquee animation style */}
//           <style>{`
//             @keyframes marquee {
//               0% { transform: translateX(0%); }
//               100% { transform: translateX(-50%); }
//             }
//             .animate-marquee {
//               display: flex;
//               width: max-content;
//               animation: marquee 25s linear infinite;
//             }
//           `}</style>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Boxes, Droplet, Sprout, Refrigerator, ArrowRight } from 'lucide-react';
import { createPageUrl } from '../../utils';

// Brand Logos
// import polycab from "../assets/polycab.png";
// import schneider from "../assets/schneider.png";
// import precision from "../assets/precision.png";
// import astral from "../assets/astral.png";
// import geberit from "../assets/geberit.png";
// import century from "../assets/century.png";
// import simpol from "../assets/simpolo.png";
// import mapei from "../assets/mapei.png";
// import kohler from "../assets/kohler.png";
// import franke from "../assets/franke.png";
// import cera from "../assets/cera.png";
// import racold from "../assets/racold.png";
// import ionexchange from "../assets/ionexchange.png";
// import vguard from "../assets/vguard.png";
// import grundfos from "../assets/grundfos.png";
// import brp from "../assets/brp.png";
// import rn from "../assets/rn.png";
// import nikolas from "../assets/nikolas.png";

// import polycab from "../../assets/polycab.png";
// import schneider from "../../assets/schneider.png";
// import precision from "../../assets/precision.png";
// import astral from "../../assets/astral.png";
// import geberit from "../../assets/geberit.png";
// import century from "../../assets/century.png";
// import simpol from "../../assets/simpolo.png";
// import mapei from "../../assets/mapei.png";
// import kohler from "../../assets/kohler.png";
// import franke from "../../assets/franke.png";
// import cera from "../../assets/cera.png";
// import racold from "../../assets/racold.png";
// import ionexchange from "../../assets/ionexchange.png";
// import vguard from "../../assets/vguard.png";
// import grundfos from "../../assets/grundfos.png";
// import brp from "../../assets/brp.png";
// import rn from "../../assets/rn.png";
// import nikolas from "../../assets/nikolas.png";

import Electricals from "../../assets/E1.png";
import Doors from "../../assets/Doors.png";
import Plumbing from "../../assets/P1.png";
import Sanitary from "../../assets/s1.png";
import Appliance from "../../assets/A1.png";

const categories = [
  {
    icon: Zap,
    title: 'Electrical Solutions',
    description: 'Switches, wires, MCBs, lights and complete electrical systems from trusted brands',
    // image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    image: Electricals,
    gradient: 'from-[#0b2343] to-[#1a3a5c]',
    brands: ['Schneider', 'Polycab', 'RN']
  },
  {
    icon: Boxes,
    title: 'Doors,Tiles & Flooring',
    description: 'Premium ceramic, Doors, marble and designer tiles for walls and floors',
    // image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
    image: Doors,
    gradient: 'from-[#bba14f] to-[#d4b870]',
    brands: ['Century Doors', 'Simpolo', 'Mapei']
  },
  {
    icon: Droplet,
    title: 'Plumbing Systems',
    description: 'CPVC pipes, PVC Pipes, valves and complete plumbing solutions',
    // image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
    image: Plumbing,
    gradient: 'from-[#008c94] to-[#00b8a9]',
    brands: ['Geberit', 'Precision', 'Astral', 'Brp']
  },
  {
    icon: Sprout,
    title: 'Sanitaryware',
    description: 'Modern bathroom fittings, kitchen sinks, faucets and accessories',
    // image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
    image: Sanitary,
    gradient: 'from-[#0b2343] to-[#008c94]',
    brands: ['Cera', 'Franke', 'Kohler', 'Nikolas']
  },
  {
    icon: Refrigerator,
    title: 'Home Appliances',
    description: 'Energy-efficient kitchen and home appliances for modern living',
    // image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80',
    image: Appliance,
    gradient: 'from-[#1a3a5c] to-[#bba14f]',
    brands: ['Racold', 'Ion Exchange', 'V-Guard', 'Grundfos']
  }
];

// Brand logo mapping
// const brandLogos = [
//   { name: 'Schneider', logo: schneider },
//   { name: 'Polycab', logo: polycab },
//   { name: 'RN', logo: rn },
//   { name: 'Century Doors', logo: century },
//   { name: 'Simpolo', logo: simpol },
//   { name: 'Mapei', logo: mapei },
//   { name: 'Geberit', logo: geberit },
//   { name: 'Precision', logo: precision },
//   { name: 'Astral', logo: astral },
//   { name: 'Brp', logo: brp },
//   { name: 'Cera', logo: cera },
//   { name: 'Franke', logo: franke },
//   { name: 'Kohler', logo: kohler },
//   { name: 'Nikolas', logo: nikolas },
//   { name: 'Racold', logo: racold },
//   { name: 'Ion Exchange', logo: ionexchange },
//   { name: 'V-Guard', logo: vguard },
//   { name: 'Grundfos', logo: grundfos },
// ];

export default function ProductRange() {
  return (
    <section id="products" className="py-24 bg-[#eef7fb] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #0b2343 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-[#008c94] font-semibold text-sm tracking-wider uppercase">
              Our Product Range
            </span>
          </div>
          
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0b2343] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premium Solutions for Every Need
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From foundation to finishing, we provide comprehensive building materials 
            and home solutions from industry-leading brands
          </p>
        </motion.div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0b2343] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Brand Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.brands.map((brand) => (
                    <span
                      key={brand}
                      className="px-3 py-1 bg-[#eef7fb] text-[#0b2343] text-xs font-medium rounded-full"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  to={createPageUrl('Products')}
                  className="flex items-center gap-2 text-[#008c94] font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#bba14f] rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Brand Partners Section with Marquee
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-12 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3
              className="text-3xl font-bold text-[#0b2343] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Authorized Distributor
            </h3>
            <p className="text-gray-600">
              Partnering with 40+ leading brands to bring you authentic, premium products
            </p>
          </div>

          Marquee Effect with Logos
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {brandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center min-w-[150px] bg-[#eef7fb] rounded-lg p-4 shadow-sm"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

           Marquee animation style 
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
          `}</style>
        </motion.div> */}
      </div>
    </section>
  );
}
