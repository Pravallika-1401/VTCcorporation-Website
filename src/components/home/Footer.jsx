import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { createPageUrl } from '../../utils';

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
    { icon: Twitter, label: 'Twitter', href: '#' }
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
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  V
                </span>
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
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#bba14f] transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#bba14f] flex-shrink-0" />
                <a href="mailto:sales@vtccorp.com" className="text-gray-300 hover:text-[#bba14f] transition-colors">
                  sales@vtccorp.com
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