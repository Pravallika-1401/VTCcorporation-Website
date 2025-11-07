import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '15+', color: 'from-[#bba14f] to-[#d4b870]' },
  { icon: Building2, label: 'Brand Partners', value: '40+', color: 'from-[#008c94] to-[#00b8a9]' },
  { icon: Users, label: 'Happy Clients', value: '2500+', color: 'from-[#0b2343] to-[#1a3a5c]' },
  { icon: TrendingUp, label: 'Projects Delivered', value: '5000+', color: 'from-[#bba14f] to-[#008c94]' }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="VTC Corporation Building"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2343]/80 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#bba14f] to-[#d4b870] rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#0b2343]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Trusted Since 2008
                    </p>
                    <p className="text-gray-600">Leading Building Materials Distributor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
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
                  <p className="text-3xl font-bold text-[#0b2343] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}