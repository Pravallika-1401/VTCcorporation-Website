import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, Handshake, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import team1 from "../assets/v28.jpg";
import team2 from "../assets/vtcteam1.png";
import team3 from "../assets/vtcteam2.png";
import v32 from "../assets/v32.jpg";
import v33 from "../assets/v33.jpg";
import v34 from "../assets/v34.jpg";
import v38 from "../assets/v38.jpg";





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
  { year: '1996', event: 'VTC Corporation Founded', description: 'Started with 5 brand partnerships' },
  { year: '2004', event: 'Regional Expansion', description: 'Expanded operations across Andhra Pradesh' },
  { year: '2012', event: 'Digital Transformation', description: 'Launched online ordering system' },
  { year: '2020', event: '40+ Brand Partners', description: 'Became authorized distributor for 40+ brands' },
  { year: '2025', event: 'Market Leader', description: '2500+ satisfied clients and growing' }
];

// const team = [
//   {
//     name: 'Rajesh Kumar',
//     role: 'Managing Director',
//     image: '',
//     description: '20+ years in building materials industry'
//   },
//   {
//     name: 'Priya Sharma',
//     role: 'Sales Director',
//     image: '',
//     description: 'Expert in client relationship management'
//   },
//   {
//     name: 'Arun Reddy',
//     role: 'Operations Head',
//     image: '',
//     description: 'Specializes in supply chain and logistics'
//   },
//   {
//     name: 'Sneha Patel',
//     role: 'Technical Advisor',
//     image: '',
//     description: 'Product specialist with engineering background'
//   }
// ];

export default function AboutUs() {
 
  const [ceoIndex, setCeoIndex] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);

  const ceoImages = [v32, v38];
  const teamImages = [team1, team2, team3];

  useEffect(() => {
    const ceoTimer = setInterval(() => {
      setCeoIndex((prev) => (prev + 1) % ceoImages.length);
    }, 2000); 
    return () => clearInterval(ceoTimer);
  }, [ceoImages.length]);


  useEffect(() => {
    const teamTimer = setInterval(() => {
      setTeamIndex((prev) => (prev + 1) % teamImages.length);
    }, 2000);
    return () => clearInterval(teamTimer);
  }, [teamImages.length]);

  const handleCeoDotClick = (index) => setCeoIndex(index);
  const handleTeamDotClick = (index) => setTeamIndex(index);

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
      {/* <section className="py-20 bg-[#eef7fb]">
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
      </section> */}

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
            The dedicated team behind VTC Corporation’s success
          </p>
        </motion.div>

        {/* CEO Section with Carousel + Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Carousel */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${ceoIndex * 100}%)` }}
            >
              {ceoImages.map((img, i) => (
                <div key={i} className="min-w-full h-[480px]">
                  <img
                    src={img}
                    alt={`CEO ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {ceoImages.map((_, i) => (
                <span
                  key={i}
                  onClick={() => handleCeoDotClick(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                    i === ceoIndex ? "bg-[#0b2343]" : "bg-white/60"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-[#0b2343] mb-4">
              Mr. Sushil Kumar Patwari
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              As the CEO of <span className="font-semibold">VTC Corporation</span>, Mr. Sushil Kumar Patwari has guided the company with visionary leadership and strategic expertise. His commitment to innovation and excellence continues to inspire every division within VTC.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Under his direction, the organization has achieved exceptional growth, technological advancement, and operational success.
            </p>
          </motion.div>
        </div>

        {/* Team Section with Carousel + Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Carousel */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg order-2 lg:order-1">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${teamIndex * 100}%)` }}
            >
              {teamImages.map((img, i) => (
                <div key={i} className="min-w-full h-[480px]">
                  <img
                    src={img}
                    alt={`Team ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {teamImages.map((_, i) => (
                <span
                  key={i}
                  onClick={() => handleTeamDotClick(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                    i === teamIndex ? "bg-[#0b2343]" : "bg-white/60"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl font-semibold text-[#0b2343] mb-4">
              The VTC Team
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our skilled professionals form the foundation of VTC Corporation.
              The team collaborates across multiple divisions — corporate, sales,
              technical, and operations — to deliver excellence in every project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Driven by passion and expertise, the VTC team continues to build
              strong client relationships and deliver top-quality services.
            </p>
          </motion.div>
        </div>

        {/* 🔹 Keep your existing team grid below as is */}
        {/* <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { image: team1, caption: "VTC Team - Corporate Office" },
            { image: team2, caption: "VTC Team - Technical & Sales Division" },
            { image: team3, caption: "VTC Team - Operations & Support" },
            { image: v33, caption: "team" },
            { image: v34, caption: "team" },
            { image: v32, caption: "CEO" },
            { image: v38, caption: "CEO" },
          ].map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden flex justify-center items-center bg-white rounded-t-2xl">
                <img
                  src={team.image}
                  alt={team.caption}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center h-18 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-[#0b2343] leading-snug">
                  {team.caption}
                </h3>
              </div>
            </motion.div>
          ))}
        </div> */}
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