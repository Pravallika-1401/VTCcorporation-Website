import React from 'react';
import { motion } from 'framer-motion';
import { href, Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

import { createPageUrl } from '../../utils';
import logo from "../../assets/logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: createPageUrl('Home') },
    { name: 'About Us', path: createPageUrl('About') },
    { name: 'Products', path: createPageUrl('Products') },
    { name: 'Gallery', path: createPageUrl('Gallery') },
    { name: 'Contact', path: createPageUrl('Contact') }
  ];

  const productCategories = [
    'Electrical Solutions',
    'Tiles & Flooring',
    'Plumbing Systems',
    'Sanitaryware',
    'Home Appliances'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210' 
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0b2343] to-[#1a3a5c] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#bba14f] to-[#d4b870] rounded-lg flex items-center justify-center">
                  <img
                      src={logo}
                      alt="VTC Corporation Logo"
                      className="w-12 h-12 object-contain rounded-lg shadow-lg"
                    />
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  VTC CORPORATION
                </h3>
                <p className="text-xs text-gray-300">Building Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner for premium building materials and home solutions. 
              Serving Andhra Pradesh with excellence for over 15 years.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#bba14f] transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#bba14f] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Products
            </h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link
                    to={createPageUrl('Products')}
                    className="text-gray-300 hover:text-[#bba14f] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#bba14f] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Ground Floor, 31-32-28<br />
                    Near Captain Ramarao Junction<br />
                    Dabagardens, Visakhapatnam-530020<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#bba14f] flex-shrink-0" />
                <a href="tel:+9100023692" className="text-gray-300 hover:text-[#bba14f] transition-colors">
                  +91 9100023692
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#bba14f] flex-shrink-0" />
                <a href="mailto:vtc_corporation@yahoo.com" className="text-gray-300 hover:text-[#bba14f] transition-colors">
                  vtc_corporation@yahoo.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} VTC Corporation. All rights reserved. | Premium Building Materials Distributor
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-300 hover:text-[#bba14f] transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-[#bba14f] transition-colors">
                Terms of Service
              </button>
            </div>
            {/* <div>
              <h1 className="text-gray-300 hover:text-[#bba14f] transition-colors">
                Designed and Developed by DESIGN BLOCKS
              </h1>
            </div> */}
            <div>
              <h1 className="text-gray-300 transition-colors">
                Designed and Developed by{" "}
                <a
                  href="https://designblocks.in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#bba14f] transition-colors"
                >
                  DESIGN BLOCKS
                </a>
              </h1>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#bba14f] to-[#d4b870] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
}