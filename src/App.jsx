
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createPageUrl } from './utils';

// Import all page components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';  
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Brand Pages
import Astral from "./pages/brands/Astral";
import BRP from "./pages/brands/BRP";
import Cera from "./pages/brands/Cera";
import Franke from "./pages/brands/Franke";
import Geberit from "./pages/brands/Geberit";
import Mapei from "./pages/brands/Mapei";
import Nikolas from "./pages/brands/Nikolas";
import Polycab from "./pages/brands/Polycab";
import Precision from "./pages/brands/Precision";
import RN from "./pages/brands/RN";
import SchneiderElectric from "./pages/brands/SchneiderElectric";

// ScrollToTop
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      {/* ScrollToTop */}
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route path={createPageUrl('Home')} element={<Home />} />
        <Route path="/" element={<Navigate to={createPageUrl('Home')} replace />} />

        {/* About Page */}
        <Route path={createPageUrl('About')} element={<AboutUs />} />

        {/* Products Pages */}
        <Route path={createPageUrl('Products')} element={<Products />} />
  

        {/* BRAND ROUTES — ONLY THESE ADDED */}
        <Route path="/products/astral" element={<Astral />} />
        <Route path="/products/brp" element={<BRP />} />
        <Route path="/products/cera" element={<Cera />} />
        <Route path="/products/franke" element={<Franke />} />
        <Route path="/products/geberit" element={<Geberit />} />
        <Route path="/products/mapei" element={<Mapei />} />
        <Route path="/products/nikolas" element={<Nikolas />} />
        <Route path="/products/polycab" element={<Polycab />} />
        <Route path="/products/precision" element={<Precision />} />
        <Route path="/products/rn" element={<RN />} />
        <Route path="/products/schneider-electric" element={<SchneiderElectric />} />

        {/* Gallery Page */}
        <Route path={createPageUrl('Gallery')} element={<Gallery />} />

        {/* Contact Page */}
        <Route path={createPageUrl('Contact')} element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to={createPageUrl('Home')} replace />} />
      </Routes>
    </div>
  );
}

export default App;





