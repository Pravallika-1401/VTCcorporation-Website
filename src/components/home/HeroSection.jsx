
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


import { getMultipleObjects } from "../../cosmic";

import Doors from "../../assets/hi4.png";
import Plumbing from "../../assets/hi1.png";
import Astralimage1 from "../../assets/hi3.png";
import Astralimage2 from "../../assets/hi5.png";
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
  const [heroSlides, setHeroSlides] = useState([]);
  useEffect(() => {
  loadHero();
}, []);




async function loadHero() {
  const data = await getMultipleObjects("hero-slides");
  if (!data || data.length === 0) return;

  const formattedSlides = data.map((item, index) => ({
    id: index,
    category: item.category,
    title: item.title,
    description: item.description,
    image: item.image?.url || item.image 
  }));

  setHeroSlides(formattedSlides);
}


useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) =>
      (prev + 1) % (heroSlides.length > 0 ? heroSlides.length : slides.length)
    );
  }, 5000);
  return () => clearInterval(timer);
}, [heroSlides]);




  const nextSlide = () => {
   

  setCurrentSlide((prev) => (prev + 1) % (heroSlides.length || slides.length));


  };

  const prevSlide = () => {

    setCurrentSlide((prev) =>
    (prev - 1 + (heroSlides.length || slides.length)) % (heroSlides.length || slides.length)
  );


  };
if ((heroSlides.length === 0) && slides.length === 0) return null;

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
            src={(heroSlides.length > 0 ? heroSlides : slides)[currentSlide].image}
            alt={(heroSlides.length > 0 ? heroSlides : slides)[currentSlide].category}
            className="w-full h-full object-cover transition-opacity duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-6 left-4 sm:top-8 sm:left-6 md:left-10 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0b2343]/90 backdrop-blur-md rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-[#bba14f]" />
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
              {(heroSlides.length > 0 ? heroSlides : slides)[currentSlide].category}
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
          {(heroSlides.length > 0 ? heroSlides : slides).map((_, index) => (
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
