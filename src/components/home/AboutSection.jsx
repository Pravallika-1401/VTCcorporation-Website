// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, Users, Building2, TrendingUp } from 'lucide-react';

// //Brands log
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

// // Trusted Logos
// import varun from "../../assets/varun.png";
// import mvvbuilders from "../../assets/mvvbuilders.png";
// import karlan from "../../assets/karlan.png";
// import navaratna from "../../assets/navaratna.png";
// import abhiram from "../../assets/abhiram.png";
// import chalamaji from "../../assets/chalamaji.png";
// import apgovt from "../../assets/apgovt.png";
// import lansum from "../../assets/lansum.png";
// import radisson from "../../assets/radisson.png";
// import mkbuilders from "../../assets/mkbuilders.png";
// import iim from "../../assets/iim.png";

//  const trusted = [
//     varun, mvvbuilders, karlan, navaratna, abhiram, chalamaji,
//     apgovt, lansum, radisson, mkbuilders, iim,
//   ];


// // Brand logo mapping
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

// const stats = [
//   { icon: Award, label: 'Years of Excellence', value: '15+', color: 'from-[#bba14f] to-[#d4b870]' },
//   { icon: Building2, label: 'Brand Partners', value: '40+', color: 'from-[#008c94] to-[#00b8a9]' },
//   { icon: Users, label: 'Happy Clients', value: '2500+', color: 'from-[#0b2343] to-[#1a3a5c]' },
//   { icon: TrendingUp, label: 'Projects Delivered', value: '5000+', color: 'from-[#bba14f] to-[#008c94]' }
// ];

// export default function AboutSection() {
//   return (
//     <section id="about" className="py-24 bg-white relative overflow-hidden">
//       {/* Trusted By */}
//       <h2 className="text-center text-3xl font-semibold text-[#0b2343] mt-16 mb-5">
//         Trusted By
//       </h2>

//       <div className="overflow-hidden py-6">
//         <div className="marquee flex items-center gap-12">
//           {[...trusted, ...trusted].map((logo, i) => (
//             <img key={i} src={logo} className="h-14 object-contain opacity-90 hover:opacity-100 transition" />
//           ))}
//         </div>
//       </div>
//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#0b2343]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bba14f]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left: Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 // src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
//                  src="/src/assets/vtcoffice.png"
//                 alt="VTC Corporation Building"
//                 className="w-full h-[600px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0b2343]/80 to-transparent" />
              
//               {/* Floating Card */}
//               <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-xl">
//                 <div className="flex items-center gap-4">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#bba14f] to-[#d4b870] rounded-lg flex items-center justify-center">
//                     <Award className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-2xl font-bold text-[#0b2343]" style={{ fontFamily: "'Playfair Display', serif" }}>
//                       Trusted Since 2008
//                     </p>
//                     <p className="text-gray-600">Leading Building Materials Distributor</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative accent */}
//             <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#008c94] to-[#00b8a9] rounded-2xl -z-10 opacity-20" />
//           </motion.div>

//           {/* Right: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="inline-block px-4 py-2 bg-[#eef7fb] rounded-full mb-6">
//               <span className="text-[#008c94] font-semibold text-sm tracking-wider uppercase">
//                 About VTC Corporation
//               </span>
//             </div>

//             <h2
//               className="text-4xl sm:text-5xl font-bold text-[#0b2343] mb-6 leading-tight"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Building Trust, Delivering Excellence
//             </h2>

//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               VTC Corporation is a trusted distributor of building materials and home solutions across Andhra Pradesh. 
//               With 15+ years of service and partnerships with 40+ top brands, we deliver premium products and reliable 
//               after-sales support to contractors, builders, and homeowners.
//             </p>

//             <p className="text-lg text-gray-600 mb-12 leading-relaxed">
//               Our comprehensive range includes electrical systems, premium tiles, plumbing solutions, sanitaryware, 
//               and modern home appliances. We pride ourselves on quality assurance, competitive pricing, and exceptional 
//               customer service that has made us the preferred choice for thousands of projects.
//             </p>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//                 >
//                   <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
//                     <stat.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <p className="text-3xl font-bold text-[#0b2343] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
//                     {stat.value}
//                   </p>
//                   <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
            
//           </motion.div>
          
//         </div>
//         {/* Brand Partners Section with Marquee */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                   className="mt-20 bg-white rounded-2xl p-12 shadow-lg"
//                 >
//                   <div className="text-center mb-8">
//                     <h3
//                       className="text-3xl font-bold text-[#0b2343] mb-3"
//                       style={{ fontFamily: "'Playfair Display', serif" }}
//                     >
//                       Authorized Distributor
//                     </h3>
//                     <p className="text-gray-600">
//                       Partnering with 40+ leading brands to bring you authentic, premium products
//                     </p>
//                   </div>
        
//                   {/* Marquee Effect with Logos */}
//                   <div className="relative overflow-hidden">
//                     <div className="flex animate-marquee space-x-12">
//                       {brandLogos.map((brand) => (
//                         <div
//                           key={brand.name}
//                           className="flex items-center justify-center min-w-[150px] bg-[#eef7fb] rounded-lg p-4 shadow-sm"
//                         >
//                           <img
//                             src={brand.logo}
//                             alt={brand.name}
//                             className="h-12 w-auto object-contain"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
        
//                   {/* Marquee animation style */}
//                   <style>{`
//                     @keyframes marquee {
//                       0% { transform: translateX(0%); }
//                       100% { transform: translateX(-50%); }
//                     }
//                     .animate-marquee {
//                       display: flex;
//                       width: max-content;
//                       animation: marquee 25s linear infinite;
//                     }
//                   `}</style>
//                 </motion.div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, Users, Building2, TrendingUp } from 'lucide-react';

// //Brands log
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

// // Trusted Logos
// import varun from "../../assets/varun.png";
// import mvvbuilders from "../../assets/mvvbuilders.png";
// import karlan from "../../assets/karlan.png";
// import navaratna from "../../assets/navaratna.png";
// import abhiram from "../../assets/abhiram.png";
// import chalamaji from "../../assets/chalamaji.png";
// import apgovt from "../../assets/apgovt.png";
// import lansum from "../../assets/lansum.png";
// import radisson from "../../assets/radisson.png";
// import mkbuilders from "../../assets/mkbuilders.png";
// import iim from "../../assets/iim.png";

// const trusted = [
//   varun, mvvbuilders, karlan, navaratna, abhiram, chalamaji,
//   apgovt, lansum, radisson, mkbuilders, iim,
// ];

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

// const stats = [
//   { icon: Award, label: 'Years of Excellence', value: '15+', color: 'from-[#bba14f] to-[#d4b870]' },
//   { icon: Building2, label: 'Brand Partners', value: '40+', color: 'from-[#008c94] to-[#00b8a9]' },
//   { icon: Users, label: 'Happy Clients', value: '2500+', color: 'from-[#0b2343] to-[#1a3a5c]' },
//   { icon: TrendingUp, label: 'Projects Delivered', value: '5000+', color: 'from-[#bba14f] to-[#008c94]' }
// ];

// export default function AboutSection() {
//   return (
//     <section id="about" className="py-24 bg-white relative overflow-hidden">
//       {/* Trusted By */}
//       <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 bg-white rounded-2xl p-12 shadow-lg  border border-gray-200 mx-auto mb-[40px] max-w-7xl px-8"
//           // className="mt-10 bg-white rounded-2xl p-12 shadow-lg border border-gray-200 mr-[30px] ml-[30px] mb-[20px]"

//         >
//       <h2 className="text-center text-3xl font-semibold text-[#0b2343] mt-10 mb-5">
//         Trusted By
//       </h2>

//       <div className="overflow-hidden py-6 px-8">
//         <div className="marquee flex items-center justify-center gap-12">
//           {[...trusted, ...trusted].map((logo, i) => (
//             <img
//               key={i}
//               src={logo}
//               className="h-14 object-contain opacity-90 hover:opacity-100 transition"
//             />
//           ))}
//         </div>
//       </div>
//       </motion.div>

//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#0b2343]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bba14f]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left: Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="/src/assets/vtcoffice.png"
//                 alt="VTC Corporation Building"
//                 className="w-full h-[600px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0b2343]/80 to-transparent" />

//               <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-xl">
//                 <div className="flex items-center gap-4">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#bba14f] to-[#d4b870] rounded-lg flex items-center justify-center">
//                     <Award className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <p
//                       className="text-2xl font-bold text-[#0b2343]"
//                       style={{ fontFamily: "'Playfair Display', serif" }}
//                     >
//                       Trusted Since 2008
//                     </p>
//                     <p className="text-gray-600">Leading Building Materials Distributor</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#008c94] to-[#00b8a9] rounded-2xl -z-10 opacity-20" />
//           </motion.div>

//           {/* Right: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="inline-block px-4 py-2 bg-[#eef7fb] rounded-full mb-6">
//               <span className="text-[#008c94] font-semibold text-sm tracking-wider uppercase">
//                 About VTC Corporation
//               </span>
//             </div>

//             <h2
//               className="text-4xl sm:text-5xl font-bold text-[#0b2343] mb-6 leading-tight"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Building Trust, Delivering Excellence
//             </h2>

//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               VTC Corporation is a trusted distributor of building materials and home solutions across Andhra Pradesh. 
//               With 15+ years of service and partnerships with 40+ top brands, we deliver premium products and reliable 
//               after-sales support to contractors, builders, and homeowners.
//             </p>

//             <p className="text-lg text-gray-600 mb-12 leading-relaxed">
//               Our comprehensive range includes electrical systems, premium tiles, plumbing solutions, sanitaryware, 
//               and modern home appliances. We pride ourselves on quality assurance, competitive pricing, and exceptional 
//               customer service that has made us the preferred choice for thousands of projects.
//             </p>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//                 >
//                   <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
//                     <stat.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <p
//                     className="text-3xl font-bold text-[#0b2343] mb-1"
//                     style={{ fontFamily: "'Playfair Display', serif" }}
//                   >
//                     {stat.value}
//                   </p>
//                   <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Brand Partners Section with Marquee */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           // className="mt-20 bg-white rounded-2xl p-12 shadow-lg"
//           className="mt-20 bg-white rounded-2xl p-12 shadow-lg  border border-gray-200 mx-auto max-w-7xl px-8"
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

//           {/* Marquee Effect with Logos */}
//           <div className="relative overflow-hidden px-8">
//             <div className="flex animate-marquee space-x-12 justify-center">
//               {brandLogos.map((brand) => (
//                 <div
//                   key={brand.name}
//                   className="flex items-center justify-center min-w-[150px] bg-[#eef7fb] rounded-lg p-4 shadow-sm"
//                 >
//                   <img
//                     src={brand.logo}
//                     alt={brand.name}
//                     className="h-12 w-auto object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

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
import { Award, Users, Building2, TrendingUp } from 'lucide-react';

//Brands log
import polycab from "../../assets/polycab.png";
import schneider from "../../assets/schneider.png";
import precision from "../../assets/precision.png";
import astral from "../../assets/astral.png";
import geberit from "../../assets/geberit.png";
import century from "../../assets/century.png";
import simpol from "../../assets/simpolo.png";
import mapei from "../../assets/mapei.png";
import kohler from "../../assets/kohler.png";
import franke from "../../assets/franke.png";
import cera from "../../assets/cera.png";
import racold from "../../assets/racold.png";
import ionexchange from "../../assets/ionexchange.png";
import vguard from "../../assets/vguard.png";
import grundfos from "../../assets/grundfos.png";
import brp from "../../assets/brp.png";
import rn from "../../assets/rn.png";
import nikolas from "../../assets/nikolas.png";

// Trusted Logos
import varun from "../../assets/varun.png";
import mvvbuilders from "../../assets/mvvbuilders.png";
import karlan from "../../assets/karlan.png";
import navaratna from "../../assets/navaratna.png";
import abhiram from "../../assets/abhiram.png";
import chalamaji from "../../assets/chalamaji.png";
import apgovt from "../../assets/apgovt.png";
import lansum from "../../assets/lansum.png";
import radisson from "../../assets/radisson.png";
import mkbuilders from "../../assets/mkbuilders.png";
import iim from "../../assets/iim.png";

const trusted = [
  varun, mvvbuilders, karlan, navaratna, abhiram, chalamaji,
  apgovt, lansum, radisson, mkbuilders, iim,
];

const brandLogos = [
  { name: 'Schneider', logo: schneider },
  { name: 'Polycab', logo: polycab },
  { name: 'RN', logo: rn },
  { name: 'Century Doors', logo: century },
  { name: 'Simpolo', logo: simpol },
  { name: 'Mapei', logo: mapei },
  { name: 'Geberit', logo: geberit },
  { name: 'Precision', logo: precision },
  { name: 'Astral', logo: astral },
  { name: 'Brp', logo: brp },
  { name: 'Cera', logo: cera },
  { name: 'Franke', logo: franke },
  { name: 'Kohler', logo: kohler },
  { name: 'Nikolas', logo: nikolas },
  { name: 'Racold', logo: racold },
  { name: 'Ion Exchange', logo: ionexchange },
  { name: 'V-Guard', logo: vguard },
  { name: 'Grundfos', logo: grundfos },
];

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '15+', color: 'from-[#bba14f] to-[#d4b870]' },
  { icon: Building2, label: 'Brand Partners', value: '40+', color: 'from-[#008c94] to-[#00b8a9]' },
  { icon: Users, label: 'Happy Clients', value: '2500+', color: 'from-[#0b2343] to-[#1a3a5c]' },
  { icon: TrendingUp, label: 'Projects Delivered', value: '5000+', color: 'from-[#bba14f] to-[#008c94]' }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden pt-0">
      {/* Trusted By */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 mx-auto mb-[40px] max-w-7xl px-8"
      >
        {/* <h2 className="text-center text-3xl font-semibold text-[#0b2343] mt-10 mb-5">
          Trusted By
        </h2> */}
        <h2
          className="text-center text-4xl sm:text-5xl font-bold text-[#0b2343] mt-10 mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Trusted By
        </h2>


        <div className="overflow-hidden py-6 px-8">
          <div className="marquee flex items-center justify-center gap-12">
            {[...trusted, ...trusted].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-14 object-contain opacity-90 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0b2343]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bba14f]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/vtcoffice.png"
                alt="VTC Corporation Building"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2343]/80 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#bba14f] to-[#d4b870] rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-[#0b2343]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Trusted Since 1996
                    </p>
                    <p className="text-gray-600">Leading Building Materials Distributor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#008c94] to-[#00b8a9] rounded-2xl -z-10 opacity-20" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-[#eef7fb] rounded-full mb-6">
              <span className="text-[#008c94] font-semibold text-sm tracking-wider uppercase">
                About VTC Corporation
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-bold text-[#0b2343] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Building Trust, Delivering Excellence
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              VTC Corporation is a trusted distributor of building materials and home solutions across Andhra Pradesh. 
              With 15+ years of service and partnerships with 40+ top brands, we deliver premium products and reliable 
              after-sales support to contractors, builders, and homeowners.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our comprehensive range includes electrical systems, premium tiles, plumbing solutions, sanitaryware, 
              and modern home appliances. We pride ourselves on quality assurance, competitive pricing, and exceptional 
              customer service that has made us the preferred choice for thousands of projects.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p
                    className="text-3xl font-bold text-[#0b2343] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Brand Partners Section with Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 mx-auto max-w-7xl px-8"
        >
          <div className="text-center mb-8">
            <h3
              // className="text-3xl font-bold text-[#0b2343] mb-3"
              // style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-center text-4xl sm:text-5xl font-bold text-[#0b2343] mt-10 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Authorized Distributor
            </h3>
            <p className="text-gray-600">
              Partnering with 40+ leading brands to bring you authentic, premium products
            </p>
          </div>

          {/* Marquee Effect with Logos */}
          <div className="relative overflow-hidden px-8">
            <div className="flex animate-marquee space-x-12 justify-center">
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
        </motion.div>
      </div>
    </section>
  );
}
