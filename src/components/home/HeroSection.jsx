// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion'; 

// import Electricals from "../../assets/E1.png";
// import Doors from "../../assets/Doors.png";
// import Plumbing from "../../assets/P1.png";
// import Sanitary from "../../assets/s1.png";
// import Appliance from "../../assets/A1.png";

// const slides = [
//   {
//     id: 1,
//     category: 'Electrical Solutions',
//     title: 'Reliable & Premium Brands for Safe Homes',
//     description: 'Complete electrical systems from leading manufacturers',
//     // image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80',
//     image: Electricals,
//     // gradient: 'from-[#0b2343]/90 to-[#008c94]/80'
//   },
//   {
//     id: 2,
//     category: 'Tiles & Interiors',
//     title: 'Elevate Interiors with Premium Tiles & Doors',
//     description: 'Transform spaces with elegant flooring and wall solutions',
//     // image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&q=80',
//     image: Doors,
//     // gradient: 'from-[#0b2343]/90 to-[#bba14f]/70'
//   },
//   {
//     id: 3,
//     category: 'Plumbing Systems',
//     title: 'Durable Plumbing, Built to Last',
//     description: 'Professional-grade pipes, fittings and plumbing solutions',
//     // image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80',
//     image: Plumbing,
//     // gradient: 'from-[#008c94]/70 to-[#00b8a9]/60'
//   },
//   {
//     id: 4,
//     category: 'Sanitaryware & Kitchenware',
//     title: 'Comfort, Design & Durability',
//     description: 'Premium bathroom and kitchen fixtures for modern living',
//     // image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80',
//     image: Sanitary,
//     // gradient: 'from-[#0b2343]/90 to-[#1a3a5c]/85'
//   },
//   {
//     id: 5,
//     category: 'Home Appliances',
//     title: 'Smart Appliances for Modern Living',
//     description: 'Energy-efficient solutions for contemporary homes',
//     // image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80',
//     image : Appliance,
//     // gradient: 'from-[#bba14f]/80 to-[#0b2343]/50'
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const scrollToProducts = () => {
//     const element = document.getElementById('products');
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="hero" className="relative mt-18 md:mt-22 lg:mt-26 h-screen w-full overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//           />
          
//           {/* Gradient Overlay */}
//           {/* <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient}`} /> */}

//           {/* Content */}
//           <div className="relative h-full flex items-center">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="max-w-3xl"
//               >
//                 {/* Category Badge */}
//                 {/* <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6"
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                   <span className="text-white font-medium text-sm tracking-wide">
//                     {slides[currentSlide].category}
//                   </span>
//                 </motion.div> */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full mb-6 shadow-md"
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                   <span className="text-white font-semibold text-sm tracking-wide">
//                     {slides[currentSlide].category}
//                   </span>
//                 </motion.div>

//                 {/* Main Heading */}
//                 {/* <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                 >
//                   {slides[currentSlide].title}
//                 </motion.h1> */}
//                  <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//                   style={{ fontFamily: "'Playfair Display', serif", textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}
//                 >
//                   {slides[currentSlide].title}
//                 </motion.h1>

//                 {/* Description */}
//                 {/* <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="text-xl text-gray-100 mb-8 leading-relaxed"
//                 >
//                   {slides[currentSlide].description}
//                 </motion.p> */}
//                  <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="text-xl text-gray-800 mb-8 leading-relaxed font-semibold"
//                   style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8)' }}
//                 >
//                   {slides[currentSlide].description}
//                 </motion.p>

//                 {/* CTA Button */}
//                 <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   onClick={scrollToProducts}
//                   className="px-8 py-4 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   Explore Products
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={28} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-12 bg-[#bba14f]'
//                 : 'w-8 bg-white/50 hover:bg-white/70'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion'; 

// // import Electricals from "../../assets/E1.png";
// import Doors from "../../assets/Doors.png";
// import Plumbing from "../../assets/P1.png";
// // import Sanitary from "../../assets/s1.png";
// // import Appliance from "../../assets/A1.png";
// import Astralimage1 from "../../assets/Astralimage1.png";
// import Astralimage2 from "../../assets/Astralimage2.png";
// import Ceraimg from "../../assets/ceraimg.jpeg";

// const slides = [
//   {
//     id: 1,
//     category: 'Astral Pipes',
//     title: 'Strong & Leak-Proof Plumbing for Every Home',
//     description: 'High-quality CPVC, PVC and UPVC pipes engineered for long-lasting performance.',
//     image: Astralimage1,
//   },
//   {
//     id: 2,
//     category: 'Astral Pipes',
//     title: 'Trusted Pipe Systems for Reliable Water Flow',
//     description: 'Premium-grade pipes designed to ensure durability, safety and smooth water distribution.',
//     image: Astralimage2,
//   },
//   {
//     id: 3,
//     category: 'Cera',
//     title: 'Modern Sanitaryware for Elegant Bathrooms',
//     description: 'Stylish faucets, basins and bathroom solutions crafted with precision and comfort.',
//     image: Ceraimg,
//   },
//   // {
//   //   id: 1,
//   //   category: 'Electrical Solutions',
//   //   title: 'Reliable & Premium Brands for Safe Homes',
//   //   description: 'Complete electrical systems from leading manufacturers',
//   //   image: Electricals,
//   // },
//   {
//     id: 4,
//     category: 'Tiles & Interiors',
//     title: 'Elevate Interiors with Premium Tiles & Doors',
//     description: 'Transform spaces with elegant flooring and wall solutions',
//     image: Doors,
//   },
//   {
//     id: 5,
//     category: 'Plumbing Systems',
//     title: 'Durable Plumbing, Built to Last',
//     description: 'Professional-grade pipes, fittings and plumbing solutions',
//     image: Plumbing,
//   },
//   // {
//   //   id: 4,
//   //   category: 'Sanitaryware & Kitchenware',
//   //   title: 'Comfort, Design & Durability',
//   //   description: 'Premium bathroom and Sanitaryware Appliances for modern living',
//   //   image: Sanitary,
//   // },
//   // {
//   //   id: 5,
//   //   category: 'Home Appliances',
//   //   title: 'Smart Appliances for Modern Living',
//   //   description: 'Energy-efficient solutions for contemporary homes',
//   //   image: Appliance,
//   // },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const scrollToProducts = () => {
//     const element = document.getElementById('products');
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       // className="relative pt-24 md:pt-28 lg:pt-32 h-screen w-full overflow-hidden"
//       className="relative pt-24 md:pt-28 lg:pt-32 h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           {/* <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//           /> */}
//           <div
//   className={`absolute inset-0 ${
//     slides[currentSlide].category === "Cera"
//       ? "bg-contain bg-center bg-no-repeat"
//       : "bg-cover bg-center bg-no-repeat"
//   }`}
//   style={{
//     backgroundImage: `url(${slides[currentSlide].image})`,
//     backgroundColor: slides[currentSlide].category === "Cera" ? "#0f222b" : "transparent",
//   }}
// ></div>

//           {/* Content */}
//           <div className="relative h-full flex items-center">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="max-w-3xl"
//               >
//                 {/* Category Badge */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full mb-6 shadow-md"
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                   <span className="text-white font-semibold text-sm tracking-wide">
//                     {slides[currentSlide].category}
//                   </span>
//                 </motion.div>

//                 {/* Main Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//                   style={{ fontFamily: "'Playfair Display', serif", textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}
//                 >
//                   {slides[currentSlide].title}
//                 </motion.h1>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="text-xl text-gray-800 mb-8 leading-relaxed font-semibold"
//                   style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8)' }}
//                 >
//                   {slides[currentSlide].description}
//                 </motion.p>

//                 {/* CTA Button */}
//                 <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   onClick={scrollToProducts}
//                   className="px-8 py-4 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   Explore Products
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-blue/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={28} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-blue/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-12 bg-[#bba14f]'
//                 : 'w-8 bg-white/50 hover:bg-white/70'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion'; 

// // import Doors from "../../assets/Doors.png";
// // import Doors from "../../assets/door1.png";
// // import Plumbing from "../../assets/P1.png";
// // import Astralimage1 from "../../assets/Astralimage1.png";
// // import Astralimage2 from "../../assets/Astralimage2.png";
// // import Ceraimg from "../../assets/ceraimg.jpeg";

// import Doors from "../../assets/slide5.png";
// import Plumbing from "../../assets/slide3.png";
// import Astralimage1 from "../../assets/slide1.png";
// import Astralimage2 from "../../assets/slide2.png";
// import Ceraimg from "../../assets/slide4.png";


// const slides = [
//   {
//     id: 1,
//     category: 'Astral Pipes',
//     title: 'Strong & Leak-Proof Plumbing for Every Home',
//     description: 'High-quality CPVC, PVC and UPVC pipes engineered for long-lasting performance.',
//     image: Astralimage1,
//   },
//   {
//     id: 2,
//     category: 'Astral Pipes',
//     title: 'Trusted Pipe Systems for Reliable Water Flow',
//     description: 'Premium-grade pipes designed to ensure durability, safety and smooth water distribution.',
//     image: Astralimage2,
//   },
//   {
//     id: 3,
//     category: 'Cera',
//     title: 'Modern Sanitaryware for Elegant Bathrooms',
//     description: 'Stylish faucets, basins and bathroom solutions crafted with precision and comfort.',
//     image: Ceraimg,
//   },
//   {
//     id: 4,
//     category: 'Tiles & Interiors',
//     title: 'Elevate Interiors with Premium Tiles & Doors',
//     description: 'Transform spaces with elegant flooring and wall solutions',
//     image: Doors,
//   },
//   {
//     id: 5,
//     category: 'Plumbing Systems',
//     title: 'Durable Plumbing, Built to Last',
//     description: 'Professional-grade pipes, fittings and plumbing solutions',
//     image: Plumbing,
//   },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const scrollToProducts = () => {
//     const element = document.getElementById('products');
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-52 h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           {/* <div
//             className={`absolute inset-0 ${
//               slides[currentSlide].category === "Cera"
//                 ? "bg-contain bg-center bg-no-repeat"
//                 : "bg-cover bg-center bg-no-repeat"
//             }`}
//             style={{
//               backgroundImage: `url(${slides[currentSlide].image})`,
//               backgroundColor: slides[currentSlide].category === "Cera" ? "#0f222b" : "transparent",
//             }}
//           ></div> */}
//           <div className="absolute inset-0 flex items-center justify-center bg-[#0f222b]">
//   <img
//     src={slides[currentSlide].image}
//     alt=""
//     className="w-full h-full object-contain"
//   />
// </div>


//           {/* Content */}
//           <div className="relative h-full flex items-center align-center">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="max-w-3xl"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full mb-6 shadow-md"
//                 >
//                   {/* Sparkle animation */}
//                   <motion.div
//                     initial={{ scale: 0, rotate: -90, opacity: 0 }}
//                     animate={{ scale: [0, 1.3, 1], rotate: 0, opacity: 1 }}
//                     transition={{
//                       duration: 0.6,
//                       ease: "easeOut",
//                       delay: 0.1,
//                     }}
//                   >
//                     <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                   </motion.div>

//                   {/* Category text */}
//                   <motion.span
//                     initial={{ opacity: 0, x: -5 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.5 }}
//                     className="text-white font-semibold text-sm tracking-wide"
//                   >
//                     {slides[currentSlide].category}
//                   </motion.span>
//                 </motion.div>

//                 {/* Category
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full mb-6 shadow-md"
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                   <span className="text-white font-semibold text-sm tracking-wide">
//                     {slides[currentSlide].category}
//                   </span>
//                 </motion.div> */}

//                 {/* Title
//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
//                   style={{ fontFamily: "'Playfair Display', serif", textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}
//                 >
//                   {slides[currentSlide].title}
//                 </motion.h1> */}

//                 {/* Description */}
//                 {/* <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="text-xl text-gray-800 mb-8 leading-relaxed font-semibold"
//                   style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.8)' }}
//                 >
//                   {slides[currentSlide].description}
//                 </motion.p> */}

//                 {/* CTA */}
//                 {/* <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   onClick={scrollToProducts}
//                   className="px-8 py-4 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   Explore Products
//                 </motion.button> */}
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={28} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-12 bg-[#bba14f]'
//                 : 'w-8 bg-black/40 hover:bg-black/60'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion'; 

// // import Doors from "../../assets/Doors.png";
// import Doors from "../../assets/door1.png";
// import Plumbing from "../../assets/P1.png";
// import Astralimage1 from "../../assets/Astralimage1.png";
// import Astralimage2 from "../../assets/Astralimage2.png";
// import Ceraimg from "../../assets/ceraimg.jpeg";

// // import Doors from "../../assets/slide5.png";
// // import Plumbing from "../../assets/slide3.png";
// // import Astralimage1 from "../../assets/slide1.png";
// // import Astralimage2 from "../../assets/slide2.png";
// // import Ceraimg from "../../assets/slide4.png";

// const slides = [
//   {
//     id: 1,
//     category: 'Astral Pipes',
//     title: 'Strong & Leak-Proof Plumbing for Every Home',
//     description: 'High-quality CPVC, PVC and UPVC pipes engineered for long-lasting performance.',
//     image: Astralimage1,
//   },
//   {
//     id: 2,
//     category: 'Astral Pipes',
//     title: 'Trusted Pipe Systems for Reliable Water Flow',
//     description: 'Premium-grade pipes designed to ensure durability, safety and smooth water distribution.',
//     image: Astralimage2,
//   },
//   {
//     id: 3,
//     category: 'Cera',
//     title: 'Modern Sanitaryware for Elegant Bathrooms',
//     description: 'Stylish faucets, basins and bathroom solutions crafted with precision and comfort.',
//     image: Ceraimg,
//   },
//   {
//     id: 4,
//     category: 'Tiles & Interiors',
//     title: 'Elevate Interiors with Premium Tiles & Doors',
//     description: 'Transform spaces with elegant flooring and wall solutions',
//     image: Doors,
//   },
//   {
//     id: 5,
//     category: 'Plumbing Systems',
//     title: 'Durable Plumbing, Built to Last',
//     description: 'Professional-grade pipes, fittings and plumbing solutions',
//     image: Plumbing,
//   },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const scrollToProducts = () => {
//     const element = document.getElementById('products');
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-52 h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* -------------------------------------------- */}
//           {/* UPDATED IMAGE CONTAINER (UNIFORM RESPONSIVE) */}
//           {/* -------------------------------------------- */}
//           <div className="absolute inset-0 bg-[#0f222b]">
//             <img
//               src={slides[currentSlide].image}
//               alt=""
//               className="w-full h-full object-cover object-center"
//             />
//           </div>

//           {/* ------------------------------------------------ */}
//           {/* UPDATED – MOVE SPARKLE + CATEGORY TO TOP-LEFT    */}
//           {/* ------------------------------------------------ */}
//           <div className="absolute top-24 left-6 sm:top-32 sm:left-10 z-20">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="max-w-3xl"
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full mb-6 shadow-md"
//               >
//                 <motion.div
//                   initial={{ scale: 0, rotate: -90, opacity: 0 }}
//                   animate={{ scale: [0, 1.3, 1], rotate: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.6,
//                     ease: "easeOut",
//                     delay: 0.1,
//                   }}
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                 </motion.div>

//                 <motion.span
//                   initial={{ opacity: 0, x: -5 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                   className="text-white font-semibold text-sm tracking-wide"
//                 >
//                   {slides[currentSlide].category}
//                 </motion.span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={28} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-12 bg-[#bba14f]'
//                 : 'w-8 bg-black/40 hover:bg-black/60'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion'; 

// // import Doors from "../../assets/Doors.png";
// import Doors from "../../assets/door1.png";
// import Plumbing from "../../assets/P1.png";
// import Astralimage1 from "../../assets/Astralimage1.png";
// import Astralimage2 from "../../assets/Astralimage2.png";
// import Ceraimg from "../../assets/ceraimg.jpeg";

// // import Doors from "../../assets/slide5.png";
// // import Plumbing from "../../assets/slide3.png";
// // import Astralimage1 from "../../assets/slide1.png";
// // import Astralimage2 from "../../assets/slide2.png";
// // import Ceraimg from "../../assets/slide4.png";

// const slides = [
//   {
//     id: 1,
//     category: 'Astral Pipes',
//     title: 'Strong & Leak-Proof Plumbing for Every Home',
//     description: 'High-quality CPVC, PVC and UPVC pipes engineered for long-lasting performance.',
//     image: Astralimage1,
//   },
//   {
//     id: 2,
//     category: 'Astral Pipes',
//     title: 'Trusted Pipe Systems for Reliable Water Flow',
//     description: 'Premium-grade pipes designed to ensure durability, safety and smooth water distribution.',
//     image: Astralimage2,
//   },
//   {
//     id: 3,
//     category: 'Cera',
//     title: 'Modern Sanitaryware for Elegant Bathrooms',
//     description: 'Stylish faucets, basins and bathroom solutions crafted with precision and comfort.',
//     image: Ceraimg,
//   },
//   {
//     id: 4,
//     category: 'Tiles & Interiors',
//     title: 'Elevate Interiors with Premium Tiles & Doors',
//     description: 'Transform spaces with elegant flooring and wall solutions',
//     image: Doors,
//   },
//   {
//     id: 5,
//     category: 'Plumbing Systems',
//     title: 'Durable Plumbing, Built to Last',
//     description: 'Professional-grade pipes, fittings and plumbing solutions',
//     image: Plumbing,
//   },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const scrollToProducts = () => {
//     const element = document.getElementById('products');
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-52 h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* =============================== */}
//           {/* RESPONSIVE IMAGE — FINAL FIX     */}
//           {/* =============================== */}
//           <div className="absolute inset-0 bg-[#0f222b]">
//             <img
//               src={slides[currentSlide].image}
//               alt=""
//               className={`
//                 w-full h-full object-center
                
//                 /* Mobile → show full image */
//                 object-contain

//                 /* Desktop → clean hero fill (except Cera) */
//                 sm:${slides[currentSlide].category === "Cera"
//                   ? "object-contain"
//                   : "object-cover"
//                 }

//                 md:${slides[currentSlide].category === "Cera"
//                   ? "object-contain"
//                   : "object-cover"
//                 }
//               `}
//             />
//           </div>

//           {/* SPARKLE + CATEGORY (same as your code) */}
//           <div className="absolute top-24 left-6 sm:top-32 sm:left-10 z-20">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="max-w-3xl"
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full mb-6 shadow-md"
//               >
//                 <motion.div
//                   initial={{ scale: 0, rotate: -90, opacity: 0 }}
//                   animate={{ scale: [0, 1.3, 1], rotate: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.6,
//                     ease: "easeOut",
//                     delay: 0.1,
//                   }}
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                 </motion.div>

//                 <motion.span
//                   initial={{ opacity: 0, x: -5 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                   className="text-white font-semibold text-sm tracking-wide"
//                 >
//                   {slides[currentSlide].category}
//                 </motion.span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* ARROWS */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={28} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* INDICATORS */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-12 bg-[#bba14f]'
//                 : 'w-8 bg-black/40 hover:bg-black/60'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion'; 

// import Doors from "../../assets/door1.png";
// import Plumbing from "../../assets/P1.png";
// import Astralimage1 from "../../assets/Astralimage1.png";
// import Astralimage2 from "../../assets/Astralimage2.png";
// import Ceraimg from "../../assets/ceraimg.jpeg";

// const slides = [
//   {
//     id: 1,
//     category: 'Astral Pipes',
//     title: 'Strong & Leak-Proof Plumbing for Every Home',
//     description: 'High-quality CPVC, PVC and UPVC pipes engineered for long-lasting performance.',
//     image: Astralimage1,
//   },
//   {
//     id: 2,
//     category: 'Astral Pipes',
//     title: 'Trusted Pipe Systems for Reliable Water Flow',
//     description: 'Premium-grade pipes designed to ensure durability, safety and smooth water distribution.',
//     image: Astralimage2,
//   },
//   {
//     id: 3,
//     category: 'Cera',
//     title: 'Modern Sanitaryware for Elegant Bathrooms',
//     description: 'Stylish faucets, basins and bathroom solutions crafted with precision and comfort.',
//     image: Ceraimg,
//   },
//   {
//     id: 4,
//     category: 'Tiles & Interiors',
//     title: 'Elevate Interiors with Premium Tiles & Doors',
//     description: 'Transform spaces with elegant flooring and wall solutions',
//     image: Doors,
//   },
//   {
//     id: 5,
//     category: 'Plumbing Systems',
//     title: 'Durable Plumbing, Built to Last',
//     description: 'Professional-grade pipes, fittings and plumbing solutions',
//     image: Plumbing,
//   },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const scrollToProducts = () => {
//     const element = document.getElementById('products');
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative 
//       pt-28 sm:pt-36 md:pt-44 lg:pt-48 
//       h-[75vh] sm:h-[85vh] md:h-[90vh] lg:h-screen 
//       w-full overflow-hidden"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >

//           {/* IMAGE (FINAL RESPONSIVE UPDATE) */}
//           <div className="absolute inset-0 bg-[#0f222b]">
//             <img
//               src={slides[currentSlide].image}
//               alt=""
//               className={`w-full h-full object-center 
//                 object-contain
//                 sm:${slides[currentSlide].category === "Cera" ? "object-contain" : "object-cover"}
//                 md:${slides[currentSlide].category === "Cera" ? "object-contain" : "object-cover"}
//               `}
//             />
//           </div>

//           {/* SPARKLE + CATEGORY */}
//           <div className="absolute 
//             top-24 sm:top-28 md:top-36 
//             left-5 sm:left-10 
//             z-20"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="max-w-xl sm:max-w-2xl"
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="inline-flex items-center gap-2 
//                 px-3 sm:px-4 py-1.5 sm:py-2 
//                 bg-[#0b2343]/90 backdrop-blur-md 
//                 rounded-full mb-4 sm:mb-6 shadow-md"
//               >
//                 <motion.div
//                   initial={{ scale: 0, rotate: -90, opacity: 0 }}
//                   animate={{ scale: [0, 1.3, 1], rotate: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.6,
//                     ease: "easeOut",
//                     delay: 0.1,
//                   }}
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                 </motion.div>

//                 <motion.span
//                   initial={{ opacity: 0, x: -5 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                   className="text-white font-semibold text-sm tracking-wide"
//                 >
//                   {slides[currentSlide].category}
//                 </motion.span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 sm:left-6 
//         top-1/2 -translate-y-1/2 
//         p-2 sm:p-3 
//         bg-black/30 backdrop-blur-md 
//         rounded-full text-white 
//         hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={28} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-3 sm:right-6 
//         top-1/2 -translate-y-1/2 
//         p-2 sm:p-3 
//         bg-black/30 backdrop-blur-md 
//         rounded-full text-white 
//         hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 
//       left-1/2 -translate-x-1/2 
//       flex gap-2 sm:gap-3 
//       z-10"
//       >
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-8 sm:w-12 bg-[#bba14f]'
//                 : 'w-5 sm:w-8 bg-black/40 hover:bg-black/60'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion'; 

// import Doors from "../../assets/door1.png";
// import Plumbing from "../../assets/P1.png";
// import Astralimage1 from "../../assets/Astralimage1.png";
// import Astralimage2 from "../../assets/Astralimage2.png";
// import Ceraimg from "../../assets/ceraimg.jpeg";

// const slides = [
//   {
//     id: 1,
//     category: 'Astral Pipes',
//     title: 'Strong & Leak-Proof Plumbing for Every Home',
//     description: 'High-quality CPVC, PVC and UPVC pipes engineered for long-lasting performance.',
//     image: Astralimage1,
//   },
//   {
//     id: 2,
//     category: 'Astral Pipes',
//     title: 'Trusted Pipe Systems for Reliable Water Flow',
//     description: 'Premium-grade pipes designed to ensure durability, safety and smooth water distribution.',
//     image: Astralimage2,
//   },
//   {
//     id: 3,
//     category: 'Cera',
//     title: 'Modern Sanitaryware for Elegant Bathrooms',
//     description: 'Stylish faucets, basins and bathroom solutions crafted with precision and comfort.',
//     image: Ceraimg,
//   },
//   {
//     id: 4,
//     category: 'Tiles & Interiors',
//     title: 'Elevate Interiors with Premium Tiles & Doors',
//     description: 'Transform spaces with elegant flooring and wall solutions',
//     image: Doors,
//   },
//   {
//     id: 5,
//     category: 'Plumbing Systems',
//     title: 'Durable Plumbing, Built to Last',
//     description: 'Professional-grade pipes, fittings and plumbing solutions',
//     image: Plumbing,
//   },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <section
//       id="hero"
//       className="relative 
//         pt-28 sm:pt-32 md:pt-40 lg:pt-44 
//         h-[80vh] sm:h-[82vh] md:h-[85vh] lg:h-[88vh] xl:h-[90vh]
//         w-full overflow-hidden"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >

//           {/* BG IMAGE */}
//           {/* <div className="absolute inset-0 bg-[#0f222b]">
//             <img
//               src={slides[currentSlide].image}
//               alt=""
//               className="
//                 w-full h-full 
//                 object-contain 
//                 md:object-cover 
//                 lg:object-cover
//                 mx-auto
//               "
//             />
//           </div> */}
//            {/* <div className="absolute inset-0 bg-[#0f222b]">
//             <img
//               src={slides[currentSlide].image}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div> */}
//           {/* BG IMAGE */}
//           {/* <div className="absolute inset-0 bg-[#0f222b] flex items-center justify-center">
//             <img
//               src={slides[currentSlide].image}
//               alt=""
//               className="w-full h-50vh object-contain"
//             />
//           </div> */}
//            <div className="relative bg-[#0f222b]">
//             <img
//               src={slides[currentSlide].image}
//               alt=""
//               className="w-full h-auto object-contain"
//             />
//           </div>

//           {/* SPARKLE + CATEGORY */}
//           <div
//             className="absolute 
//             top-24 sm:top-28 md:top-36 lg:top-40
//             left-5 sm:left-10 
//             z-20"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="max-w-xl sm:max-w-2xl"
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="inline-flex items-center gap-2 
//                   px-3 sm:px-4 py-1.5 sm:py-2 
//                   bg-[#0b2343]/90 backdrop-blur-md 
//                   rounded-full mb-4 sm:mb-6 shadow-md"
//               >
//                 <motion.div
//                   initial={{ scale: 0, rotate: -90, opacity: 0 }}
//                   animate={{ scale: [0, 1.3, 1], rotate: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.6,
//                     ease: "easeOut",
//                     delay: 0.1,
//                   }}
//                 >
//                   <Sparkles className="w-4 h-4 text-[#bba14f]" />
//                 </motion.div>

//                 <motion.span
//                   initial={{ opacity: 0, x: -5 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.5 }}
//                   className="text-white font-semibold text-sm tracking-wide"
//                 >
//                   {slides[currentSlide].category}
//                 </motion.span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* PREVIOUS BUTTON */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 sm:left-6 
//           top-1/2 -translate-y-1/2 
//           p-2 sm:p-3 
//           bg-black/30 backdrop-blur-md 
//           rounded-full text-white 
//           hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={28} />
//       </button>

//       {/* NEXT BUTTON */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-3 sm:right-6 
//           top-1/2 -translate-y-1/2 
//           p-2 sm:p-3 
//           bg-black/30 backdrop-blur-md 
//           rounded-full text-white 
//           hover:bg-black/50 transition-all duration-300 z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* INDICATORS */}
//       <div
//         className="absolute bottom-6 
//           left-1/2 -translate-x-1/2 
//           flex gap-2 sm:gap-3 
//           z-10"
//       >
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`
//               h-1.5 rounded-full transition-all duration-300 
//               ${
//                 index === currentSlide
//                   ? "w-8 sm:w-12 bg-[#bba14f]"
//                   : "w-5 sm:w-8 bg-black/40 hover:bg-black/60"
//               }
//             `}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }






import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// import Doors from "../../assets/4.png";
// import Plumbing from "../../assets/3.png";
// import Astralimage1 from "../../assets/5.png";
// import Astralimage2 from "../../assets/2.png";
// import Ceraimg from "../../assets/ceraimg.jpeg";

import Doors from "../../assets/door1.png";
import Plumbing from "../../assets/P1.png";
import Astralimage1 from "../../assets/Astralimage1.png";
import Astralimage2 from "../../assets/img2.jpg";
import Ceraimg from "../../assets/ceraimg.jpeg";

const slides = [
  {
    id: 1,
    category: 'Astral Pipes',
    title: 'Strong & Leak-Proof Plumbing for Every Home',
    description: 'High-quality CPVC, PVC and UPVC pipes engineered for long-lasting performance.',
    image: Astralimage1
  },
  {
    id: 2,
    category: 'Astral Pipes',
    title: 'Trusted Pipe Systems for Reliable Water Flow',
    description: 'Premium-grade pipes designed to ensure durability, safety and smooth water distribution.',
    image: Astralimage2
  },
  {
    id: 3,
    category: 'Cera',
    title: 'Modern Sanitaryware for Elegant Bathrooms',
    description: 'Stylish faucets, basins and bathroom solutions crafted with precision and comfort.',
    image: Ceraimg
  },
  {
    id: 4,
    category: 'Tiles & Interiors',
    title: 'Elevate Interiors with Premium Tiles & Doors',
    description: 'Transform spaces with elegant flooring and wall solutions',
    image: Doors
  },
  {
    id: 5,
    category: 'Plumbing Systems',
    title: 'Durable Plumbing, Built to Last',
    description: 'Professional-grade pipes, fittings and plumbing solutions',
    image: Plumbing
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative w-full bg-[#0f222b] mt-20">
      <div className="relative w-full">

        {/* Background Image Container */}
        <div
          className="
            relative w-full
            h-[20vh]        /* Better mobile */
            sm:h-[50vh]    /* Small screens */
            md:h-[60vh]    /* Tablet */
            lg:h-[65vh]    /* Desktop — UNCHANGED */
            xl:h-[70vh]    /* Large Desktop — UNCHANGED */
          "
        >
          <img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].category}
            className="w-full h-full object-cover transition-opacity duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-6 left-4 sm:top-8 sm:left-6 md:left-10 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-[#bba14f]" />
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
              {slides[currentSlide].category}
            </span>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="
            absolute left-3 sm:left-4 md:left-6
            top-1/2 -translate-y-1/2
            p-2 sm:p-3
            bg-black/40 backdrop-blur-md rounded-full text-white
            hover:bg-black/60 transition duration-300
            z-20
          "
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="sm:size-28" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="
            absolute right-3 sm:right-4 md:right-6
            top-1/2 -translate-y-1/2
            p-2 sm:p-3
            bg-black/40 backdrop-blur-md rounded-full text-white
            hover:bg-black/60 transition duration-300
            z-20
          "
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="sm:size-28" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${index === currentSlide
                  ? 'w-8 sm:w-12 bg-[#bba14f]'
                  : 'w-4 sm:w-8 bg-white/40 hover:bg-white/60'
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
