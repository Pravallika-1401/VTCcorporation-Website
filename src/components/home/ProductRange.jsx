





import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getMultipleObjects } from "../../cosmic";

// Brand Images - FALLBACK
import polycab from "../../assets/polycab.png";
import schneider from "../../assets/schneider.png";
import precision from "../../assets/precision.png";
import astral from "../../assets/astral.png";
import geberit from "../../assets/geberit.png";
import mapei from "../../assets/mapei.png";
import franke from "../../assets/franke.png";
import cera from "../../assets/cera.png";
import brp from "../../assets/brp.png";
import rn from "../../assets/rn.png";
import nikolas from "../../assets/nikolas.png";


const brandCards = [
  { name: "Schneider Electric", slug: "schneider-electric", image: schneider, products: ["Switches & Sockets", "MCB / RCCB / DB", "Wiring Devices", "Industrial Controls", "Automation Products"] },
  { name: "Polycab", slug: "polycab", image: polycab, products: ["Wires & Cables", "House Wiring", "Power Cables", "Flexible Cables", "Switchgear"] },
  { name: "RN (Rathna Syndicate)", slug: "rn", image: rn, products: ["Electrical Hardware", "Switches & Boards", "Industrial Components", "Cables & Accessories"] },
  { name: "Geberit", slug: "geberit", image: geberit, products: ["Concealed Cisterns", "Flush Plates", "Plumbing Systems", "Drainage Pipes", "Installation Systems"] },
  { name: "Precision", slug: "precision", image: precision, products: ["PVC Pipes", "UPVC Pipes", "CPVC Pipes", "Plumbing Fittings"] },
  { name: "Astral", slug: "astral", image: astral, products: ["CPVC Pipes", "PVC Pipes", "SWR Pipes", "Plumbing Fittings", "Industrial Pipes"] },
  { name: "BRP", slug: "brp", image: brp, products: ["Plumbing Pipes", "Pipe Fittings", "Water Supply Systems"] },
  { name: "Cera", slug: "cera", image: cera, products: ["Sanitaryware", "Faucets", "Showers", "Bathroom Accessories", "Kitchen Sinks"] },
  { name: "Franke", slug: "franke", image: franke, products: ["Kitchen Sinks", "Kitchen Faucets", "Chimneys", "Built-in Appliances"] },
  { name: "Mapei", slug: "mapei", image: mapei, products: ["Tile Adhesives", "Grouts", "Waterproofing", "Surface Preparation"] },
  { name: "Nikolas", slug: "nikolas", image: nikolas, products: ["Pipes", "Plumbing Fittings", "CPVC / UPVC Systems"] }
];

export default function ProductRange() {
  const [brands, setBrands] = useState(brandCards); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBrands();
  }, []);




async function loadBrands() {
    try {
      setLoading(true);
      const data = await getMultipleObjects("brands");
      console.log("Products Page - Brands Data from Cosmic:", data);

      if (!data || data.length === 0) {
        console.log("No new brands from Cosmic, keeping existing data");
        setLoading(false);
        return; 
      }

      
      const formattedBrands = data.map(brand => {
        console.log(`Processing brand: ${brand.name || brand.title}`, brand);
        
        let productsList = [];
        
        if (brand.products) {
          if (Array.isArray(brand.products)) {
            const first = brand.products[0];
            
            if (first?.metadata?.text) {
              productsList = brand.products.map(p => p.metadata.text);
            } else if (first?.text) {
              productsList = brand.products.map(p => p.text);
            } else if (first?.value) {
              productsList = brand.products.map(p => p.value);
            } else if (typeof first === 'string') {
              productsList = brand.products;
            }
          } else if (typeof brand.products === 'string') {
            productsList = brand.products.split(',').map(p => p.trim()).filter(p => p);
          }
        }

        return {
          name: brand.name || brand.title,
          slug: brand.slug,
          image: brand.image?.imgix_url || brand.image?.url || brand.image,
          products: productsList
        };
      });

   
      const existingSlugs = new Set(brandCards.map(b => b.slug));
      const newBrands = formattedBrands.filter(b => !existingSlugs.has(b.slug));
      
      setBrands([...brandCards, ...newBrands]); 
      console.log("Final brands (fallback + cosmic):", [...brandCards, ...newBrands]);
      
      setLoading(false);
    } catch (err) {
      console.error("Brands fetch error:", err);
      setLoading(false);
     
    }
  }



  return (
    <section id="products" className="py-20 sm:py-24 bg-[#eef7fb] relative overflow-hidden">
      
      {/* Background dots */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #0b2343 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="text-[#008c94] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              Authorized Distributor
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2343] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Partner Brands
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide complete building solutions through our trusted network of premium brands.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#008c94] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          /* Responsive Grid */
          <div className="grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-6 sm:gap-8"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand.slug || brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 flex flex-col items-center text-center"
              >
                {/* Brand Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 flex items-center justify-center">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Brand Name */}
                <h3
                  className="text-lg sm:text-xl font-bold text-[#0b2343] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {brand.name}
                </h3>

                {/* Product List */}
                {brand.products && brand.products.length > 0 ? (
                  <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
                    {brand.products.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-xs italic">No products listed</p>
                )}

              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}