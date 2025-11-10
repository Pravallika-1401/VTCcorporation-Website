import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, Handshake, TrendingUp, Shield, CheckCircle, Heart, Lightbulb, Clock } from 'lucide-react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import vtcoffice from "../../assets/vtcoffice.png";

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '15+', color: 'from-[#bba14f] to-[#d4b870]' },
  { icon: Users, label: 'Happy Clients', value: '2500+', color: 'from-[#008c94] to-[#00b8a9]' },
  { icon: TrendingUp, label: 'Projects Delivered', value: '5000+', color: 'from-[#0b2343] to-[#1a3a5c]' }
];

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We guarantee authentic products from authorized manufacturers with proper certifications and quality checks',
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

const commitments = [
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'Our success is measured by your satisfaction. We go the extra mile to ensure every client receives personalized attention and solutions tailored to their specific needs.'
  },
  {
    icon: Lightbulb,
    title: 'Expert Guidance',
    description: 'Our team of technical experts provides professional consultation on product selection, installation methods, and material specifications for optimal results.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We understand the importance of project timelines. Our efficient logistics network ensures on-time delivery across Andhra Pradesh.'
  }
];

export default function About() {
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
              Building dreams with premium materials and exceptional service since 1996
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section from Home */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  src={vtcoffice}
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
              <div className="grid grid-cols-3 gap-6">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-[#eef7fb]">
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
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
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

      {/* Our Commitment */}
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
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to serving you with excellence in every interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#bba14f] to-[#d4b870] rounded-xl flex items-center justify-center mb-6">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#0b2343] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {commitment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {commitment.description}
                </p>
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