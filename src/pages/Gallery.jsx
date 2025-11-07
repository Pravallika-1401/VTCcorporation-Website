import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Electrical Installation',
    category: 'Electrical',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
  },
  {
    id: 2,
    title: 'Premium Marble Flooring',
    category: 'Tiles',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Modern Bathroom Suite',
    category: 'Sanitaryware',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
  },
  {
    id: 4,
    title: 'Commercial Plumbing Project',
    category: 'Plumbing',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80'
  },
  {
    id: 5,
    title: 'Contemporary Kitchen Setup',
    category: 'Appliances',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80'
  },
  {
    id: 6,
    title: 'Designer Wall Tiles',
    category: 'Tiles',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80'
  },
  {
    id: 7,
    title: 'Smart Home Integration',
    category: 'Electrical',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80'
  },
  {
    id: 8,
    title: 'Luxury Bathroom Fixtures',
    category: 'Sanitaryware',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80'
  },
  {
    id: 9,
    title: 'Modern Office Electrical',
    category: 'Electrical',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    id: 10,
    title: 'Residential Plumbing System',
    category: 'Plumbing',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'
  },
  {
    id: 11,
    title: 'Elegant Tile Patterns',
    category: 'Tiles',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
  },
  {
    id: 12,
    title: 'Premium Kitchen Appliances',
    category: 'Appliances',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80'
  }
];

const categories = ['All', 'Electrical', 'Tiles', 'Plumbing', 'Sanitaryware', 'Appliances'];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              Project Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful installations and satisfied clients across various sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#0b2343] to-[#008c94] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2343]/90 via-[#0b2343]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[#bba14f] text-sm font-semibold mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-white text-lg font-bold">
                        {project.title}
                      </h3>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />

              {/* Info */}
              <div className="mt-6 text-center">
                <p className="text-[#bba14f] text-sm font-semibold mb-2">
                  {selectedImage.category}
                </p>
                <h3 className="text-white text-2xl font-bold">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}