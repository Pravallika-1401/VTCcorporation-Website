import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, Handshake, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We guarantee authentic products from authorized manufacturers with proper certifications',
    color: 'from-[#0b2343] to-[#1a3a5c]'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated support team ensuring your satisfaction from inquiry to after-sales service',
    color: 'from-[#bba14f] to-[#d4b870]'
  },
  {
    icon: Handshake,
    title: 'Trust & Transparency',
    description: 'Honest pricing, clear communication, and reliable delivery commitments',
    color: 'from-[#008c94] to-[#00b8a9]'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'Staying updated with latest products and technologies in building materials',
    color: 'from-[#0b2343] to-[#008c94]'
  }
];

const milestones = [
  { year: '2008', event: 'VTC Corporation Founded', description: 'Started with 5 brand partnerships' },
  { year: '2012', event: 'Regional Expansion', description: 'Expanded operations across Andhra Pradesh' },
  { year: '2016', event: 'Digital Transformation', description: 'Launched online ordering system' },
  { year: '2020', event: '40+ Brand Partners', description: 'Became authorized distributor for 40+ brands' },
  { year: '2024', event: 'Market Leader', description: '2500+ satisfied clients and growing' }
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    description: '20+ years in building materials industry'
  },
  {
    name: 'Priya Sharma',
    role: 'Sales Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    description: 'Expert in client relationship management'
  },
  {
    name: 'Arun Reddy',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    description: 'Specializes in supply chain and logistics'
  },
  {
    name: 'Sneha Patel',
    role: 'Technical Advisor',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    description: 'Product specialist with engineering background'
  }
];

export default function AboutUs() {
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
              About VTC Corporation
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Building dreams with premium materials and exceptional service since 2008
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0b2343] to-[#1a3a5c] rounded-2xl p-10 text-white"
            >
              <Target className="w-16 h-16 mb-6 text-[#bba14f]" />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Mission
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                To provide high-quality building materials and home solutions at competitive prices, 
                backed by expert guidance and reliable service. We aim to be the trusted partner for 
                contractors, builders, and homeowners in creating spaces that last generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#008c94] to-[#00b8a9] rounded-2xl p-10 text-white"
            >
              <Eye className="w-16 h-16 mb-6 text-[#bba14f]" />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Vision
              </h2>
              <p className="text-gray-100 leading-relaxed text-lg">
                To become South India's most trusted and innovative building materials distributor, 
                setting industry standards in quality, service, and sustainability. We envision a 
                future where every construction project has access to world-class materials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#eef7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold text-[#0b2343] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2343] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold text-[#0b2343] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              15+ years of excellence and growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0b2343] via-[#008c94] to-[#bba14f] hidden lg:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                    <span className="text-3xl font-bold text-[#bba14f]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-[#0b2343] mt-2 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-[#bba14f] rounded-full border-4 border-white shadow-lg" />
                </div>
                
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#eef7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold text-[#0b2343] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2343]/90 to-transparent" />
                </div>
                <div className="p-6 -mt-20 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#bba14f] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#0b2343] to-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose VTC Corporation?
            </h2>
            <p className="text-xl text-gray-300">
              Experience the difference that quality and service make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Authorized distributor for 40+ premium brands',
              'Competitive pricing with flexible payment options',
              'Expert technical consultation and product guidance',
              'Timely delivery across Andhra Pradesh',
              'Comprehensive after-sales support',
              'Quality assurance and genuine products guarantee'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-[#bba14f] flex-shrink-0 mt-1" />
                <p className="text-gray-200 leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}