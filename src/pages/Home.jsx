// import React, { useEffect } from 'react';
// import Header from '../components/home/Header';
// import HeroSection from '../components/home/HeroSection';
// import AboutSection from '../components/home/AboutSection';
// import ProductRange from '../components/home/ProductRange';
// import PhotoGallery from '../components/home/PhotoGallery';
// import ContactSection from '../components/home/ContactSection';
// import Footer from '../components/home/Footer';

// export default function Home() {
//   useEffect(() => {
//     // Smooth scroll behavior
//     document.documentElement.style.scrollBehavior = 'smooth';
    
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#eef7fb]">
//       <Header />
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <ProductRange />
//         <PhotoGallery />
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }




import React, { useEffect } from 'react';
import Header from '../components/home/Header';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ProductRange from '../components/home/ProductRange';
import PhotoGallery from '../components/home/PhotoGallery';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#eef7fb]">
      {/* Header */}
      <Header />

      {/* MAIN CONTENT — grows to fill space */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductRange />
        <PhotoGallery />
        <ContactSection />
      </main>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
}
