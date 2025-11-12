// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { createPageUrl } from '../../utils';
// import logo from "../../assets/logo.png";
// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: createPageUrl('Home') },
//     { name: 'About', path: createPageUrl('About') },
//     { name: 'Products', path: createPageUrl('Products') },
//     { name: 'Gallery', path: createPageUrl('Gallery') },
//     { name: 'Contact', path: createPageUrl('Contact') }
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? 'bg-white/95 backdrop-blur-lg shadow-lg'
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex-shrink-0"
//           >
//             <Link
//               to={createPageUrl('Home')}
//               className="flex items-center group"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 text- bg-gradient-to-br from-[#0b2343] to-[#008c94] rounded-lg flex items-center justify-center shadow-lg">
//                   {/* <span className="text-2xl font-bold text-[#bba14f]" style={{ fontFamily: "'Playfair Display', serif" }}>
//                     <img src="logo.png"></img>
//                   </span> */}
//                   <img
//                       // src="/src/assets/logo.png"
//                       src= {logo}
//                       alt="VTC Corporation Logo"
//                       className="w-12 h-12 object-contain rounded-lg shadow-lg"
//                     />
//                 </div>
//                 <div className="flex flex-col">
//                   <span
//                     className={`text-xl font-bold transition-colors ${
//                       scrolled ? 'text-[#0b2343]' : 'text-white'
//                     }`}
//                     style={{ fontFamily: "'Playfair Display', serif" }}
//                   >
//                     VTC CORPORATION
//                   </span>
//                   <span className={`text-xs tracking-wider ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
//                     Premium Building Materials
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="hidden md:flex items-center space-x-1"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                   location.pathname === link.path
//                     ? scrolled
//                       ? 'text-[#0b2343] bg-[#0b2343]/10'
//                       : 'text-[#bba14f] bg-white/10'
//                     : scrolled
//                     ? 'text-gray-700 hover:text-[#0b2343] hover:bg-[#0b2343]/5'
//                     : 'text-white hover:text-[#bba14f] hover:bg-white/10'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             {/* <Link
//               to={createPageUrl('Contact')}
//               className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               Get Quote
//             </Link> */}
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className={`md:hidden p-2 rounded-lg ${
//               scrolled ? 'text-[#0b2343]' : 'text-white'
//             }`}
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </motion.button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200"
//           >
//             <div className="px-4 py-6 space-y-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
//                     location.pathname === link.path
//                       ? 'bg-[#0b2343]/10 text-[#0b2343]'
//                       : 'text-white-700 hover:bg-[#0b2343]/5 hover:text-[#0b2343]'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Link
//                 to={createPageUrl('Contact')}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block w-full px-4 py-3 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold shadow-lg text-center"
//               >
//                 Get Quote
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { createPageUrl } from '../../utils';
// import logo from "../../assets/logo.png";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   // 👇 updated scroll logic
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.getElementById("hero");
//       const heroHeight = heroSection ? heroSection.offsetHeight : 0;
//       setScrolled(window.scrollY > heroHeight - 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: createPageUrl('Home') },
//     { name: 'About', path: createPageUrl('About') },
//     { name: 'Products', path: createPageUrl('Products') },
//     { name: 'Gallery', path: createPageUrl('Gallery') },
//     { name: 'Contact', path: createPageUrl('Contact') }
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? 'bg-white/95 backdrop-blur-lg shadow-lg'
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex-shrink-0"
//           >
//             <Link
//               to={createPageUrl('Home')}
//               className="flex items-center group"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#0b2343] to-[#008c94] rounded-lg flex items-center justify-center shadow-lg">
//                   <img
//                     src={logo}
//                     alt="VTC Corporation Logo"
//                     className="w-12 h-12 object-contain rounded-lg shadow-lg"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <span
//                     className={`text-xl font-bold transition-colors ${
//                       scrolled ? 'text-[#0b2343]' : 'text-[#0b2343]'  // 👈 changed
//                     }`}
//                     style={{ fontFamily: "'Playfair Display', serif" }}
//                   >
//                     VTC CORPORATION
//                   </span>
//                   <span className={`text-xs tracking-wider ${scrolled ? 'text-gray-600' : 'text-gray-500'}`}>
//                     Premium Building Materials
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="hidden md:flex items-center space-x-1"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                   location.pathname === link.path
//                     ? scrolled
//                       ? 'text-[#0b2343] bg-[#0b2343]/10'
//                       : 'text-[#bba14f] bg-[#0b2343]/10'
//                     : scrolled
//                     ? 'text-gray-700 hover:text-[#0b2343] hover:bg-[#0b2343]/5'
//                     : 'text-[#0b2343] hover:text-[#bba14f] hover:bg-[#0b2343]/5' // 👈 changed
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className={`md:hidden p-2 rounded-lg ${
//               scrolled ? 'text-[#0b2343]' : 'text-[#0b2343]' // 👈 changed
//             }`}
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </motion.button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200"
//           >
//             <div className="px-4 py-6 space-y-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
//                     location.pathname === link.path
//                       ? 'bg-[#0b2343]/10 text-[#0b2343]'
//                       : 'text-[#0b2343] hover:bg-[#0b2343]/5 hover:text-[#0b2343]'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Link
//                 to={createPageUrl('Contact')}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block w-full px-4 py-3 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold shadow-lg text-center"
//               >
//                 Get Quote
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPageUrl } from '../../utils';
import logo from "../../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true); // 👈 new state
  const location = useLocation();

  // detect scroll and hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > heroHeight - 100);
      setIsHeroSection(currentScroll < heroHeight - 50); // 👈 detect if inside hero
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: createPageUrl('Home') },
    { name: 'About', path: createPageUrl('About') },
    { name: 'Products', path: createPageUrl('Products') },
    { name: 'Gallery', path: createPageUrl('Gallery') },
    { name: 'Contact', path: createPageUrl('Contact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to={createPageUrl('Home')} className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0b2343] to-[#008c94] rounded-lg flex items-center justify-center shadow-lg">
                  <img
                    src={logo}
                    alt="VTC Corporation Logo"
                    className="w-12 h-12 object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-xl font-bold transition-colors ${
                      scrolled
                        ? 'text-[#0b2343]'
                        : isHeroSection
                        ? 'text-[#0b2343]' // 👈 dark blue in hero
                        : 'text-white' // 👈 white after hero
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    VTC CORPORATION
                  </span>
                  <span
                    className={`text-xs tracking-wider ${
                      scrolled
                        ? 'text-gray-600'
                        : isHeroSection
                        ? 'text-gray-600'
                        : 'text-gray-200'
                    }`}
                  >
                    Premium Building Materials
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-[#0b2343] bg-[#0b2343]/10'
                      : isHeroSection
                      ? 'text-[#bba14f] bg-[#0b2343]/10'
                      : 'text-[#bba14f] bg-white/10'
                    : scrolled
                    ? 'text-gray-700 hover:text-[#0b2343] hover:bg-[#0b2343]/5'
                    : isHeroSection
                    ? 'text-[#0b2343] hover:text-[#bba14f] hover:bg-[#0b2343]/5' // 👈 dark blue on hero
                    : 'text-white hover:text-[#bba14f] hover:bg-white/10' // 👈 white after hero
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled
                ? 'text-[#0b2343]'
                : isHeroSection
                ? 'text-[#0b2343]'
                : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    location.pathname === link.path
                      ? 'bg-[#0b2343]/10 text-[#0b2343]'
                      : 'text-[#0b2343] hover:bg-[#0b2343]/5 hover:text-[#0b2343]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={createPageUrl('Contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-3 bg-gradient-to-r from-[#bba14f] to-[#d4b870] text-white rounded-lg font-semibold shadow-lg text-center"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
