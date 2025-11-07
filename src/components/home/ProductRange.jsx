import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Boxes, Droplet, Sprout, Refrigerator, ArrowRight } from 'lucide-react';
import { createPageUrl } from '../../utils';

const categories = [
  {
    icon: Zap,
    title: 'Electrical Solutions',
    description: 'Switches, wires, MCBs, lights and complete electrical systems from trusted brands',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    gradient: 'from-[#0b2343] to-[#1a3a5c]',
    brands: ['Havells', 'Polycab', 'Finolex', 'Anchor']
  },
  {
    icon: Boxes,
    title: 'Tiles & Flooring',
    description: 'Premium ceramic, vitrified, marble and designer tiles for walls and floors',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
    gradient: 'from-[#bba14f] to-[#d4b870]',
    brands: ['Kajaria', 'Somany', 'Nitco', 'Johnson']
  },
  {
    icon: Droplet,
    title: 'Plumbing Systems',
    description: 'CPVC pipes, PVC fittings, valves and complete plumbing solutions',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
    gradient: 'from-[#008c94] to-[#00b8a9]',
    brands: ['Ashirvad', 'Supreme', 'Astral', 'Prince']
  },
  {
    icon: Sprout,
    title: 'Sanitaryware',
    description: 'Modern bathroom fittings, kitchen sinks, faucets and accessories',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
    gradient: 'from-[#0b2343] to-[#008c94]',
    brands: ['Cera', 'Parryware', 'Hindware', 'Jaquar']
  },
  {
    icon: Refrigerator,
    title: 'Home Appliances',
    description: 'Energy-efficient kitchen and home appliances for modern living',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80',
    gradient: 'from-[#1a3a5c] to-[#bba14f]',
    brands: ['LG', 'Samsung', 'Whirlpool', 'Voltas']
  }
];

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

        {/* Brand Partners Section */}
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Havells', 'Polycab', 'Kajaria', 'Cera', 'Ashirvad', 'Supreme', 'Jaquar', 'Finolex', 'Anchor', 'Hindware', 'Somany', 'Astral'].map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center p-4 bg-[#eef7fb] rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="text-[#0b2343] font-semibold text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}