import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, Phone, Mail } from 'lucide-react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import { createPageUrl } from '../utils';

const categoryData = {
  electrical: {
    title: 'Electrical Solutions',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80',
    description: 'Comprehensive electrical solutions for residential, commercial and industrial applications. Our range includes modular switches, wiring cables, circuit protection devices, and lighting solutions from industry-leading brands.',
    features: [
      'ISI certified products ensuring safety standards',
      'Energy-efficient solutions reducing power consumption',
      'Wide range covering all voltage requirements',
      'Technical support and installation guidance',
      'Warranty backed by manufacturer',
      'Bulk pricing for contractors and builders'
    ],
    products: [
      {
        name: 'Modular Switches & Sockets',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: '2-way, 3-way switches, dimmer controls, USB charging points',
        brands: ['Havells', 'Legrand', 'Anchor', 'Schneider']
      },
      {
        name: 'Electrical Wires & Cables',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
        description: 'House wires, flexible cables, armoured cables, co-axial cables',
        brands: ['Polycab', 'Finolex', 'KEI', 'RR Kabel']
      },
      {
        name: 'MCBs & Distribution Boards',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
        description: 'Single pole, double pole MCBs, RCCBs, DBs with enclosures',
        brands: ['Havells', 'Schneider', 'Siemens', 'L&T']
      },
      {
        name: 'LED Lights & Fixtures',
        image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=600&q=80',
        description: 'LED bulbs, tube lights, panel lights, decorative lights',
        brands: ['Philips', 'Havells', 'Syska', 'Bajaj']
      },
      {
        name: 'Ceiling & Exhaust Fans',
        image: 'https://images.unsplash.com/photo-1597077962467-be16edfd7a50?w=600&q=80',
        description: 'Decorative fans, BLDC fans, exhaust fans, ventilation fans',
        brands: ['Havells', 'Orient', 'Usha', 'Crompton']
      },
      {
        name: 'Voltage Stabilizers',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        description: 'Mainline stabilizers, AC stabilizers, refrigerator stabilizers',
        brands: ['V-Guard', 'Microtek', 'Luminous', 'Havells']
      }
    ],
    specifications: [
      'Voltage Range: 110V - 440V',
      'Compliance: BIS, ISI Standards',
      'Warranty: 1-10 years (product dependent)',
      'Certifications: ISO 9001, CE Marked'
    ]
  },
  tiles: {
    title: 'Tiles & Flooring',
    heroImage: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&q=80',
    description: 'Premium ceramic, vitrified, porcelain and marble tiles for floors and walls. From classic designs to contemporary patterns, we offer tiles that combine aesthetics with durability.',
    features: [
      'Stain and scratch resistant surfaces',
      'Anti-skid options for safety',
      'Wide range of sizes and finishes',
      'Easy maintenance and cleaning',
      'Designer collections from top brands',
      'Expert consultation for pattern selection'
    ],
    products: [
      {
        name: 'Vitrified Tiles',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
        description: 'Full body vitrified, double charge, glazed vitrified tiles',
        brands: ['Kajaria', 'Somany', 'Nitco', 'Johnson']
      },
      {
        name: 'Ceramic Floor Tiles',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
        description: 'Glazed ceramic, matt finish, anti-skid tiles',
        brands: ['Orient Bell', 'Simpolo', 'AGL', 'Cera']
      },
      {
        name: 'Wall Tiles',
        image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80',
        description: 'Glossy finish, digital printed, 3D effect wall tiles',
        brands: ['Kajaria', 'Johnson', 'RAK', 'Somany']
      },
      {
        name: 'Marble & Stone Tiles',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80',
        description: 'Italian marble, granite, natural stone tiles',
        brands: ['Premium Collections', 'Imported Marble']
      },
      {
        name: 'Parking Tiles',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
        description: 'Heavy duty parking tiles, chequered tiles',
        brands: ['Orient Bell', 'Somany', 'Nitco']
      },
      {
        name: 'Wooden Flooring',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
        description: 'Laminate flooring, engineered wood, vinyl flooring',
        brands: ['Pergo', 'Armstrong', 'Quick Step']
      }
    ],
    specifications: [
      'Sizes: 200x200mm to 1200x1800mm',
      'Finish: Glossy, Matt, Rustic',
      'Grade: Premium, Standard',
      'Water Absorption: <0.5% (Vitrified)'
    ]
  },
  plumbing: {
    title: 'Plumbing Systems',
    heroImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80',
    description: 'Complete plumbing infrastructure solutions including CPVC pipes, PVC pipes, fittings, valves, and water storage systems. Designed for durability and leak-proof performance.',
    features: [
      'Corrosion resistant materials',
      'High pressure bearing capacity',
      'Lead-free and non-toxic',
      'Easy installation and maintenance',
      'Long service life (25+ years)',
      'Comprehensive range of sizes'
    ],
    products: [
      {
        name: 'CPVC Pipes & Fittings',
        image: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80',
        description: 'Hot & cold water pipes, SDR 11, SDR 13.5 series',
        brands: ['Ashirvad', 'Astral', 'Supreme', 'Prince']
      },
      {
        name: 'PVC Pipes',
        image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80',
        description: 'Pressure pipes, drainage pipes, column pipes',
        brands: ['Supreme', 'Finolex', 'Astral', 'Apollo']
      },
      {
        name: 'Pipe Fittings',
        image: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80',
        description: 'Elbows, tees, couplers, reducers, end caps',
        brands: ['Ashirvad', 'Supreme', 'Astral']
      },
      {
        name: 'Valves & Taps',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
        description: 'Ball valves, gate valves, angle valves, bib cocks',
        brands: ['Marc', 'Jaquar', 'Parryware']
      },
      {
        name: 'Water Storage Tanks',
        image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80',
        description: 'Overhead tanks, underground tanks, loft tanks',
        brands: ['Sintex', 'Supreme', 'Vectus']
      },
      {
        name: 'Drainage Systems',
        image: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80',
        description: 'SWR pipes, floor drains, inspection chambers',
        brands: ['Supreme', 'Astral', 'Prince']
      }
    ],
    specifications: [
      'Sizes: 15mm to 200mm diameter',
      'Pressure Rating: 2.5 to 15 kg/cm²',
      'Standards: IS 15658, IS 4985',
      'Temperature Range: 0°C to 95°C'
    ]
  },
  sanitaryware: {
    title: 'Sanitaryware & Bath Fittings',
    heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80',
    description: 'Modern bathroom and kitchen fixtures combining functionality with elegant design. From wash basins to complete bathroom suites, we offer premium sanitaryware solutions.',
    features: [
      'Premium ceramic and stainless steel',
      'Water-saving technologies',
      'Anti-bacterial glazing',
      'Modern and traditional designs',
      'Easy to clean surfaces',
      'Complete bathroom solutions'
    ],
    products: [
      {
        name: 'Wash Basins',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
        description: 'Table top, wall hung, pedestal, designer basins',
        brands: ['Cera', 'Parryware', 'Hindware', 'Jaquar']
      },
      {
        name: 'Water Closets',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
        description: 'EWC, floor mounted, wall hung WCs with soft close seats',
        brands: ['Cera', 'Parryware', 'Kohler', 'Hindware']
      },
      {
        name: 'Kitchen Sinks',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
        description: 'Single bowl, double bowl, granite, stainless steel sinks',
        brands: ['Nirali', 'Carysil', 'Futura', 'Johnson']
      },
      {
        name: 'Bath Faucets',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
        description: 'Basin mixers, pillar taps, sensor taps, wall mixers',
        brands: ['Jaquar', 'Marc', 'Hindware', 'Cera']
      },
      {
        name: 'Showers & Accessories',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
        description: 'Rain showers, hand showers, shower panels, diverters',
        brands: ['Jaquar', 'Grohe', 'Kohler', 'Hindware']
      },
      {
        name: 'Bathroom Accessories',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80',
        description: 'Towel rails, soap holders, mirrors, health faucets',
        brands: ['Jaquar', 'Cera', 'Parryware', 'Marc']
      }
    ],
    specifications: [
      'Material: Ceramic, Stainless Steel, Brass',
      'Finish: Chrome plated, Matt finish',
      'Warranty: 5-10 years',
      'Certifications: ISI marked'
    ]
  },
  appliances: {
    title: 'Home Appliances',
    heroImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80',
    description: 'Energy-efficient home appliances from world-renowned brands. Kitchen appliances, cooling solutions, and home comfort products designed for modern living.',
    features: [
      'Energy star rated products',
      'Latest technology and features',
      'Warranty and service support',
      'Installation assistance available',
      'EMI options for bulk orders',
      'Genuine products with bill'
    ],
    products: [
      {
        name: 'Refrigerators',
        image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80',
        description: 'Single door, double door, side by side, french door',
        brands: ['LG', 'Samsung', 'Whirlpool', 'Godrej']
      },
      {
        name: 'Washing Machines',
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80',
        description: 'Front load, top load, semi-automatic washers',
        brands: ['LG', 'Samsung', 'IFB', 'Bosch']
      },
      {
        name: 'Air Conditioners',
        image: 'https://images.unsplash.com/photo-1585859762337-f7bcfc6b6b34?w=600&q=80',
        description: 'Split AC, window AC, inverter AC, cassette AC',
        brands: ['Voltas', 'Daikin', 'LG', 'Blue Star']
      },
      {
        name: 'Microwave Ovens',
        image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&q=80',
        description: 'Solo, grill, convection microwave ovens',
        brands: ['LG', 'Samsung', 'IFB', 'Whirlpool']
      },
      {
        name: 'Water Heaters',
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80',
        description: 'Electric geysers, instant water heaters, solar heaters',
        brands: ['Racold', 'AO Smith', 'Bajaj', 'V-Guard']
      },
      {
        name: 'Kitchen Chimneys',
        image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80',
        description: 'Wall mounted, island chimneys, auto clean chimneys',
        brands: ['Faber', 'Elica', 'Glen', 'Kaff']
      }
    ],
    specifications: [
      'Energy Rating: 3-5 Star',
      'Warranty: 1-10 years comprehensive',
      'Installation: Free/Paid options',
      'After Sales: Service network available'
    ]
  }
};

export default function ProductDetail() {
  const [category, setCategory] = useState('electrical');
  const urlParams = new URLSearchParams(window.location.search);
  
  useEffect(() => {
    const categoryParam = urlParams.get('category');
    if (categoryParam && categoryData[categoryParam]) {
      setCategory(categoryParam);
    }
  }, []);

  const data = categoryData[category];

  return (
    <div className="min-h-screen bg-[#eef7fb]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2343]/95 to-[#0b2343]/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to={createPageUrl('Products')}
            className="inline-flex items-center gap-2 text-white mb-8 hover:text-[#bba14f] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {data.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-[#0b2343] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Key Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-[#eef7fb] rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-[#008c94] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-[#eef7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-[#0b2343] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Product Range
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive selection from leading manufacturers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2343]/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0b2343] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.brands.map(brand => (
                      <span
                        key={brand}
                        className="px-3 py-1 bg-[#eef7fb] text-[#0b2343] text-xs font-medium rounded-full"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl font-bold text-[#0b2343] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Technical Specifications
              </h2>
              <div className="space-y-4">
                {data.specifications.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-[#eef7fb] rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#008c94] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{spec}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0b2343] to-[#1a3a5c] rounded-2xl p-10 text-white"
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Request Quote
              </h3>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Get competitive pricing for bulk orders and project requirements. 
                Our team will assist you with product selection and technical specifications.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-[#bba14f] hover:text-[#d4b870] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 9876543210
                </a>
                <a
                  href="mailto:sales@vtccorp.com"
                  className="flex items-center gap-3 text-[#bba14f] hover:text-[#d4b870] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  sales@vtccorp.com
                </a>
              </div>
              <Link
                to={createPageUrl('Home') + '#contact'}
                className="inline-block w-full px-6 py-4 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Sales Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}