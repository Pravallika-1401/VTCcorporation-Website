



import React from 'react';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import vtcoffice from "../../assets/vtcoffice.png";
import { getSingleObject, getMultipleObjects } from "../../cosmic";

// Brand Logos - FALLBACK DATA
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

// Trusted Logos - FALLBACK DATA
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

// ✅ FALLBACK DATA
const defaultTrustedLogos = [
  { id: 1, logo: { url: varun }, title: "Varun" },
  { id: 2, logo: { url: mvvbuilders }, title: "MVV Builders" },
  { id: 3, logo: { url: karlan }, title: "Karlan" },
  { id: 4, logo: { url: navaratna }, title: "Navaratna" },
  { id: 5, logo: { url: abhiram }, title: "Abhiram" },
  { id: 6, logo: { url: chalamaji }, title: "Chalamaji" },
  { id: 7, logo: { url: apgovt }, title: "AP Govt" },
  { id: 8, logo: { url: lansum }, title: "Lansum" },
  { id: 9, logo: { url: radisson }, title: "Radisson" },
  { id: 10, logo: { url: mkbuilders }, title: "MK Builders" },
  { id: 11, logo: { url: iim }, title: "IIM" }
];

const defaultBrandLogos = [
  { id: 1, title: 'Schneider', logo: { url: schneider } },
  { id: 2, title: 'Polycab', logo: { url: polycab } },
  { id: 3, title: 'RN', logo: { url: rn } },
  { id: 4, title: 'Century Doors', logo: { url: century } },
  { id: 5, title: 'Simpolo', logo: { url: simpol } },
  { id: 6, title: 'Mapei', logo: { url: mapei } },
  { id: 7, title: 'Geberit', logo: { url: geberit } },
  { id: 8, title: 'Precision', logo: { url: precision } },
  { id: 9, title: 'Astral', logo: { url: astral } },
  { id: 10, title: 'Brp', logo: { url: brp } },
  { id: 11, title: 'Cera', logo: { url: cera } },
  { id: 12, title: 'Franke', logo: { url: franke } },
  { id: 13, title: 'Kohler', logo: { url: kohler } },
  { id: 14, title: 'Nikolas', logo: { url: nikolas } },
  { id: 15, title: 'Racold', logo: { url: racold } },
  { id: 16, title: 'Ion Exchange', logo: { url: ionexchange } },
  { id: 17, title: 'V-Guard', logo: { url: vguard } },
  { id: 18, title: 'Grundfos', logo: { url: grundfos } }
];

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '15+', color: 'from-[#bba14f] to-[#d4b870]' },
  { icon: Building2, label: 'Brand Partners', value: '40+', color: 'from-[#008c94] to-[#00b8a9]' },
  { icon: Users, label: 'Happy Clients', value: '2500+', color: 'from-[#0b2343] to-[#1a3a5c]' },
  { icon: TrendingUp, label: 'Projects Delivered', value: '5000+', color: 'from-[#bba14f] to-[#008c94]' }
];

export default function AboutSection() {
  const [about, setAbout] = useState(null);
  const [trustedLogos, setTrustedLogos] = useState(defaultTrustedLogos); 
  const [brandLogos, setBrandLogos] = useState(defaultBrandLogos); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllData();
  }, []);

  async function loadAllData() {
    try {
      setLoading(true);
      
     
      const aboutData = await getSingleObject("about-home");
      setAbout(aboutData);

 
      const trustedData = await getMultipleObjects("trusted-logos");
      console.log("Trusted Logos from Cosmic:", trustedData);
      
      if (trustedData && trustedData.length > 0) {

        const existingIds = new Set(defaultTrustedLogos.map(t => t.id));
        const newTrustedLogos = trustedData
          .filter(t => !existingIds.has(t.id))
          .map(item => ({
            id: item.id,
            logo: { url: item.logo?.url || item.logo },
            title: item.title
          }));
        
        setTrustedLogos([...defaultTrustedLogos, ...newTrustedLogos]);
      }


      const brandsData = await getMultipleObjects("brand-logos");
      console.log("Brand Logos from Cosmic:", brandsData);
      
      if (brandsData && brandsData.length > 0) {

        const existingIds = new Set(defaultBrandLogos.map(b => b.id));
        const newBrandLogos = brandsData
          .filter(b => !existingIds.has(b.id))
          .map(item => ({
            id: item.id,
            title: item.title,
            logo: { url: item.logo?.url || item.logo }
          }));
        
        setBrandLogos([...defaultBrandLogos, ...newBrandLogos]);
      }
    

      setLoading(false);
    } catch (err) {
      console.error("Data Load Error:", err);
      setLoading(false);

    }
  }

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden pt-0">

      {/* ✅ Trusted By Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 mb-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <h2
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2343] mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Trusted By
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-12 h-12 border-4 border-[#008c94] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12">
            {trustedLogos.map((item, i) => {
              const logoSrc = item.logo?.url || item.logo || item;

              return (
                <motion.div
                  key={item.id || i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center w-[130px] sm:w-[150px] md:w-[160px]"
                >
                  <img
                    src={logoSrc}
                    alt={item.title || `Trusted logo ${i + 1}`}
                    className="h-10 sm:h-12 md:h-14 object-contain opacity-90 hover:opacity-100 transition"
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0b2343]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bba14f]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={vtcoffice} alt="VTC Corporation Building" className="w-full h-[600px] object-cover" />
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

          {/* Text */}
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
              {about?.title || "Building Trust, Delivering Excellence"}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {about?.description1 || `VTC Corporation is a trusted distributor of building materials and home solutions across Andhra Pradesh.
              With 15+ years of service and partnerships with 40+ top brands, we deliver premium products and reliable
              after-sales support to contractors, builders, and homeowners.`}
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {about?.description2 || `Our comprehensive range includes electrical systems, premium tiles, plumbing solutions, sanitaryware,
              and modern home appliances. We pride ourselves on quality assurance, competitive pricing, and exceptional
              customer service that has made us the preferred choice for thousands of projects.`}
            </p>

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

        {/* ✅ Authorized Distributor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 mb-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2343]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Authorized Distributor
            </h3>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-12 h-12 border-4 border-[#008c94] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 justify-items-center">
              {brandLogos.map((brand, index) => {
                const logoSrc = brand.logo?.url || brand.logo;
                
                return (
                  <motion.div
                    key={brand.id || index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center bg-[#eef7fb] rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all w-[130px] sm:w-[150px] md:w-[160px]"
                  >
                    <img
                      src={logoSrc}
                      alt={brand.title || brand.name || `Brand ${index + 1}`}
                      className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}