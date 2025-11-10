import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9100023692'],
      gradient: 'from-[#bba14f] to-[#d4b870]'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['vtc_corporation@yahoo.com'],
      gradient: 'from-[#008c94] to-[#00b8a9]'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Ground Floor, 31-32-28, Near Captain Ramarao Junction, Dabagardens, Visakhapatnam-530020, Andhra Pradesh, India'],
      gradient: 'from-[#0b2343] to-[#1a3a5c]'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      gradient: 'from-[#bba14f] to-[#008c94]'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#eef7fb] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #0b2343 1px, transparent 1px)',
          backgroundSize: '30px 30px'
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
              Get In Touch
            </span>
          </div>
          
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0b2343] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Build Something Great Together
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach out to our sales team for quotes, bulk orders and technical guidance. 
            Available Mon–Sat, 9am–6pm.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3
              className="text-3xl font-bold text-[#0b2343] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#008c94] focus:ring-2 focus:ring-[#008c94]/20 transition-all duration-300 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#008c94] focus:ring-2 focus:ring-[#008c94]/20 transition-all duration-300 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#008c94] focus:ring-2 focus:ring-[#008c94]/20 transition-all duration-300 outline-none"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#008c94] focus:ring-2 focus:ring-[#008c94]/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div> */}

              <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full !h-[300px] px-4 py-3 rounded-lg border border-gray-300 focus:border-[#008c94] focus:ring-2 focus:ring-[#008c94]/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

              {/* Success/Error Message */}
              {formStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    formStatus === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium">Something went wrong. Please try again.</span>
                    </>
                  )}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#0b2343] to-[#008c94] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0b2343] mb-3">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.019004924767!2d83.3030478!3d17.728487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b1ad8d0c15e0f!2sDaba%20Gardens%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530220%2C%20India!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VTC Corporation Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}