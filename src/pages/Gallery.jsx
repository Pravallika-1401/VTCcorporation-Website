import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import floor from "../assets/v25.jpg";
import plumbing from "../assets/v10.jpg";
import tiles from "../assets/v23.jpg";
import electrical from "../assets/v1.jpg";

import v3 from "../assets/v3.jpg";
import v4 from "../assets/v4.jpg";
import v5 from "../assets/v5.jpg";
import v6 from "../assets/v6.jpg";
import v7 from "../assets/v7.jpg";
import v8 from "../assets/v8.jpg";
import v9 from "../assets/v9.jpg";
import v11 from "../assets/v11.jpg";
import v12 from "../assets/v12.jpg";
import v13 from "../assets/v13.jpg";
import v14 from "../assets/v14.jpg";
import v15 from "../assets/v15.jpg";
import v16 from "../assets/v16.jpg";
import v17 from "../assets/v17.jpg";
import v18 from "../assets/v18.jpg";
import v19 from "../assets/v19.jpg";
import v20 from "../assets/v20.jpg";
import v21 from "../assets/v21.jpg";
import v22 from "../assets/v22.jpg";
import v24 from "../assets/v24.jpg";
import v26 from "../assets/v26.jpg";
import v30 from "../assets/v30.jpg";


const projects = [
  // {
  //   id: 1,
  //   title: 'Luxury Villa Electrical Installation',
  //   category: 'Electrical',
  //   image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
  // },
  {
    id: 2,
    title: 'Premium Marble Flooring',
    category: 'Tiles',
    // image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    image: floor
  },
  // {
  //   id: 3,
  //   title: 'Modern Bathroom Suite',
  //   category: 'Sanitaryware',
  //   image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
  // },
  {
    id: 4,
    title: 'Commercial Plumbing Project',
    category: 'Plumbing',
    // image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80'
    image : plumbing
  },
  // {
  //   id: 5,
  //   title: 'Contemporary Kitchen Setup',
  //   category: 'Appliances',
  //   image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80'
  // },
  {
    id: 6,
    title: 'Designer Wall Tiles',
    category: 'Tiles',
    // image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80'
    image: tiles
  },
  {
    id: 7,
    title: 'Smart Home Integration',
    category: 'Electrical',
    // image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80'
    image: electrical
  },
  // {
  //   id: 8,
  //   title: 'Luxury Bathroom Fixtures',
  //   category: 'Sanitaryware',
  //   image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80'
  // },
  // {
  //   id: 9,
  //   title: 'Modern Office Electrical',
  //   category: 'Electrical',
  //   image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  // },
  // {
  //   id: 10,
  //   title: 'Residential Plumbing System',
  //   category: 'Plumbing',
  //   image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'
  // },
  // {
  //   id: 11,
  //   title: 'Elegant Tile Patterns',
  //   category: 'Tiles',
  //   image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
  // },
  // {
  //   id: 12,
  //   title: 'Premium Kitchen Appliances',
  //   category: 'Appliances',
  //   image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80'
  // },
  {
    id: 13,
    title: 'Modern Close-Coupled Toilets',
    category: 'Sanitaryware',
    image: v3
  },
  {
    id: 14,
    title: 'Wall-Hung Toilet & Basin Set',
    category: 'Sanitaryware',
    image: v4
  },
  {
    id: 15,
    title: 'Pedestal Wash Basins',
    category: 'Sanitaryware',
    image: v5
  },
  {
    id: 16,
    title: 'Counter-Top Vessel Sinks',
    category: 'Sanitaryware',
    image: v6
  },
  {
    id: 18,
    title: 'Chrome Shower Mixers & Faucets',
    category: 'Sanitaryware',
    image: v8
  },
  {
    id: 20,
    title: 'SWR Pipe Fittings & Jugs',
    category: 'Plumbing',
    image: v11
  },
  {
    id: 21,
    title: 'PVC Pipe Clamps & Sockets',
    category: 'Plumbing',
    image: v12
  },
  {
    id: 22,
    title: 'Large PVC SWR Couplers & Tees',
    category: 'Plumbing',
    image: v13
  },
  {
    id: 23,
    title: 'Drainage Inspection Components',
    category: 'Plumbing',
    image: v14
  },
  {
    id: 24,
    title: 'Compact Bathroom Mockup',
    category: 'Sanitaryware',
    image: v15
  },
  {
    id: 25,
    title: 'Aisle of Bagged Fittings',
    category: 'Plumbing',
    image: v16
  },
  {
    id: 26,
    title: 'Shower Diverters and Taps',
    category: 'Sanitaryware',
    image: v17
  },
  {
    id: 27,
    title: '110MM & 75MM PVC End Caps',
    category: 'Plumbing',
    image: v18
  },
  {
    id: 28,
    title: 'Assorted Bagged Fittings Aisle',
    category: 'Plumbing',
    image: v19
  },
  {
    id: 29,
    title: '75MM PVC Pipe Elbows/Bends',
    category: 'Plumbing',
    image: v20
  },
  {
    id: 30,
    title: 'Packaged PVC Reducer Sockets',
    category: 'Plumbing',
    image: v21
  },
  {
    id: 31,
    title: 'Shower Heads and Premium Faucets',
    category: 'Sanitaryware',
    image: v22
  },
  {
    id: 32,
    title: '75MM PVC Tees and Bends',
    category: 'Plumbing',
    image: v24
  },
  {
  id: 27,
  title: "Water Storage Tanks",
  category: "Plumbing",
  image: v30
},
    {
    id: 1,
    title: 'Luxury Villa Electrical Installation',
    category: 'Electrical',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
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
  },
  {
    id: 5,
    title: 'Contemporary Kitchen Setup',
    category: 'Appliances',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80'
  },
  {
    id: 3,
    title: 'Modern Bathroom Suite',
    category: 'Sanitaryware',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
  },
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
     {/* Lightbox Modal (Always show caption & close button for all images) */}
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
        className="relative w-full max-w-5xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button — always visible in all views */}
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-50"
        >
          <X size={24} />
        </button>

        {/* Image — scaled properly for both orientations */}
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="w-auto max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain"
        />

        {/* Caption — always visible below image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-4 text-center px-4"
        >
          <p className="text-[#bba14f] text-sm font-semibold mb-1">
            {selectedImage.category}
          </p>
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug">
            {selectedImage.title}
          </h3>
        </motion.div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      <Footer />
    </div>
  );
}