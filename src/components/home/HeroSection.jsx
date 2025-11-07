import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    category: 'Electrical Solutions',
    title: 'Reliable & Premium Brands for Safe Homes',
    description: 'Complete electrical systems from leading manufacturers',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80',
    gradient: 'from-[#0b2343]/90 to-[#008c94]/80'
  },
  {
    id: 2,
    category: 'Tiles & Interiors',
    title: 'Elevate Interiors with Premium Tiles & Doors',
    description: 'Transform spaces with elegant flooring and wall solutions',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&q=80',
    gradient: 'from-[#0b2343]/90 to-[#bba14f]/70'
  },
  {
    id: 3,
    category: 'Plumbing Systems',
    title: 'Durable Plumbing, Built to Last',
    description: 'Professional-grade pipes, fittings and plumbing solutions',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80',
    gradient: 'from-[#008c94]/90 to-[#00b8a9]/80'
  },
  {
    id: 4,
    category: 'Sanitaryware & Kitchenware',
    title: 'Comfort, Design & Durability',
    description: 'Premium bathroom and kitchen fixtures for modern living',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80',
    gradient: 'from-[#0b2343]/90 to-[#1a3a5c]/85'
  },
  {
    id: 5,
    category: 'Home Appliances',
    title: 'Smart Appliances for Modern Living',
    description: 'Energy-efficient solutions for contemporary homes',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80',
    gradient: 'from-[#bba14f]/80 to-[#0b2343]/90'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient}`} />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl"
              >
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4 text-[#bba14f]" />
                  <span className="text-white font-medium text-sm tracking-wide">
                    {slides[currentSlide].category}
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl text-gray-100 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  onClick={scrollToProducts}
                  className="px-8 py-4 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Products
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-[#bba14f]'
                : 'w-8 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}