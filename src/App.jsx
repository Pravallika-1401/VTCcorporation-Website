// import React, { useState, useEffect } from 'react';
// import { ChevronRight, Phone, Mail, MapPin, Menu, X, Search, Facebook, Linkedin, Twitter, CheckCircle, Star, Users, Briefcase, TrendingUp, Award, ShoppingBag, Home, Info, Package, Image as ImageIcon, MessageSquare } from 'lucide-react';

// // Main App Component
// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navigation = [
//     { id: 'home', label: 'Home', icon: Home },
//     { id: 'about', label: 'About Us', icon: Info },
//     { id: 'products', label: 'Products', icon: Package },
//     { id: 'gallery', label: 'Gallery', icon: ImageIcon },
//     { id: 'contact', label: 'Contact', icon: MessageSquare }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header scrolled={scrolled} />
      
//       {/* Navigation */}
//       <Navigation 
//         navigation={navigation}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         scrolled={scrolled}
//       />

//       {/* Page Content */}
//       <main className="pt-32">
//         {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
//         {currentPage === 'about' && <AboutPage />}
//         {currentPage === 'products' && <ProductsPage />}
//         {currentPage === 'gallery' && <GalleryPage />}
//         {currentPage === 'contact' && <ContactPage />}
//       </main>

//       {/* Footer */}
//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   );
// }

// // Header Component
// function Header({ scrolled }) {
//   return (
//     <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'}`}>
//       <div className="max-w-7xl mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
//               VTC
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-white tracking-wide">VTC CORPORATION</h1>
//               <p className="text-xs text-amber-400">Building Materials Supplier</p>
//             </div>
//           </div>
          
//           <div className="hidden md:flex flex-col items-end gap-1 text-sm">
//             <div className="flex items-center gap-2 text-gray-300">
//               <MapPin className="w-4 h-4 text-amber-400" />
//               <span>Visakhapatnam, Andhra Pradesh</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-300">
//               <CheckCircle className="w-4 h-4 text-green-400" />
//               <span>GST: 37AGKPP9430H1ZZ</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Navigation Component
// function Navigation({ navigation, currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen, scrolled }) {
//   return (
//     <>
//       <nav className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-1">
//               {navigation.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <button
//                     key={item.id}
//                     onClick={() => setCurrentPage(item.id)}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
//                       currentPage === item.id
//                         ? 'bg-slate-900 text-white shadow-md'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     <Icon className="w-4 h-4" />
//                     {item.label}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Search Bar */}
//             <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-64">
//               <Search className="w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="bg-transparent outline-none text-sm w-full"
//               />
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 rounded-lg hover:bg-gray-100"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
//           <div className="fixed top-32 left-0 right-0 bg-white shadow-xl rounded-b-2xl p-4" onClick={e => e.stopPropagation()}>
//             {navigation.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => {
//                     setCurrentPage(item.id);
//                     setMobileMenuOpen(false);
//                   }}
//                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
//                     currentPage === item.id
//                       ? 'bg-slate-900 text-white'
//                       : 'text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   {item.label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // Home Page
// function HomePage({ setCurrentPage }) {
//   const categories = [
//     { title: 'Electrical Solutions', desc: 'Switches, Wires & Automation', color: 'from-blue-500 to-blue-600' },
//     { title: 'Tiles & Doors', desc: 'Premium Quality Materials', color: 'from-purple-500 to-purple-600' },
//     { title: 'Plumbing Systems', desc: 'Pipes & Fittings', color: 'from-green-500 to-green-600' },
//     { title: 'Sanitaryware', desc: 'Modern Designs', color: 'from-red-500 to-red-600' },
//     { title: 'Home Appliances', desc: 'Smart Living Solutions', color: 'from-amber-500 to-amber-600' }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               Premium Building Materials for Your Dream Home
//             </h1>
//             <p className="text-xl text-gray-300 mb-8">
//               Trusted supplier of quality electrical, plumbing, and construction materials across Andhra Pradesh
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button 
//                 onClick={() => setCurrentPage('products')}
//                 className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
//               >
//                 View Products <ChevronRight className="w-5 h-5" />
//               </button>
//               <button 
//                 onClick={() => setCurrentPage('contact')}
//                 className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border border-white/20 transition-all"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { icon: Users, label: 'Trusted Customers', value: '10,000+' },
//               { icon: Star, label: 'Years of Service', value: '15+' },
//               { icon: Award, label: 'Brands Associated', value: '40+' },
//               { icon: TrendingUp, label: 'Annual Turnover', value: '₹5-25 Cr' }
//             ].map((stat, i) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
//                   <Icon className="w-8 h-8 mx-auto mb-3 text-amber-500" />
//                   <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Product Categories */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Product Categories</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {categories.map((cat, i) => (
//               <div 
//                 key={i}
//                 className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
//                 onClick={() => setCurrentPage('products')}
//               >
//                 <div className={`h-32 bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
//                   <ShoppingBag className="w-16 h-16 text-white opacity-90" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
//                   <p className="text-gray-600">{cat.desc}</p>
//                   <div className="mt-4 flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all">
//                     View Products <ChevronRight className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // About Page
// function AboutPage() {
//   const features = [
//     { icon: CheckCircle, title: 'Quality Assurance', desc: 'All products verified and tested' },
//     { icon: Award, title: 'Trust Seal Verified', desc: 'IndiaMART certified supplier' },
//     { icon: Users, title: 'Expert Team', desc: 'Experienced professionals' },
//     { icon: TrendingUp, title: 'Growth Track', desc: '15+ years in business' }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-slate-900 mb-4">About VTC Corporation</h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Leading supplier of premium building materials across Andhra Pradesh, serving thousands of satisfied customers for over 15 years.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 mb-12">
//         <div className="bg-white rounded-xl p-8 shadow-md">
//           <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
//           <p className="text-gray-600 mb-4">
//             Established as a trusted name in the building materials industry, VTC Corporation has been serving the construction and renovation needs of Andhra Pradesh for over 15 years.
//           </p>
//           <p className="text-gray-600">
//             We pride ourselves on offering a comprehensive range of quality products from renowned brands, ensuring that every project we support meets the highest standards of excellence.
//           </p>
//         </div>

//         <div className="bg-white rounded-xl p-8 shadow-md">
//           <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
//           <ul className="space-y-3">
//             <li className="flex items-start gap-3">
//               <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
//               <span className="text-gray-600">Wide range of premium brands under one roof</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
//               <span className="text-gray-600">Competitive pricing with quality guarantee</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
//               <span className="text-gray-600">Expert guidance and customer support</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
//               <span className="text-gray-600">Timely delivery across Andhra Pradesh</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-4 gap-6 mb-12">
//         {features.map((feature, i) => {
//           const Icon = feature.icon;
//           return (
//             <div key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white text-center">
//               <Icon className="w-12 h-12 mx-auto mb-4 text-amber-400" />
//               <h3 className="font-bold mb-2">{feature.title}</h3>
//               <p className="text-sm text-gray-300">{feature.desc}</p>
//             </div>
//           );
//         })}
//       </div>

//       <div className="bg-white rounded-xl p-8 shadow-md">
//         <h2 className="text-2xl font-bold text-slate-900 mb-6">Company Information</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="font-semibold text-slate-900 mb-2">Nature of Business</h3>
//             <p className="text-gray-600">Trader / Distributor</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-slate-900 mb-2">Legal Status</h3>
//             <p className="text-gray-600">Proprietorship</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-slate-900 mb-2">Annual Turnover</h3>
//             <p className="text-gray-600">₹5 - ₹25 Crore</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-slate-900 mb-2">Total Employees</h3>
//             <p className="text-gray-600">Up to 10 People</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Products Page
// function ProductsPage() {
//   const products = [
//     {
//       category: 'Electrical Solutions',
//       brands: ['Schneider Electric', 'Polycab', 'RN'],
//       items: ['Switches & Sockets', 'Wires & Cables', 'MCBs & DBs', 'Home Automation'],
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       category: 'Doors, Tiles & Adhesives',
//       brands: ['Century Doors', 'Simpolo', 'Mapei'],
//       items: ['Premium Doors', 'Floor & Wall Tiles', 'Tile Adhesives', 'Waterproofing'],
//       color: 'from-purple-500 to-purple-600'
//     },
//     {
//       category: 'Plumbing Systems',
//       brands: ['Astral Pipes', 'Geberit', 'Precision', 'BRP'],
//       items: ['PVC Pipes', 'CPVC Pipes', 'Drainage Systems', 'Valves & Fittings'],
//       color: 'from-green-500 to-green-600'
//     },
//     {
//       category: 'Sanitaryware & Kitchenware',
//       brands: ['Kohler', 'Franke', 'Cera', 'Nikolas'],
//       items: ['Kitchen Sinks', 'Toilet Systems', 'Granite Countertops', 'Dispensers'],
//       color: 'from-red-500 to-red-600'
//     },
//     {
//       category: 'Home Appliances',
//       brands: ['Racold', 'Ion Exchange', 'V-Guard', 'Grundfos'],
//       items: ['Water Heaters', 'Water Purifiers', 'Water Softeners', 'Water Pumps'],
//       color: 'from-amber-500 to-amber-600'
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
//         <p className="text-xl text-gray-600">Premium brands and quality materials for all your construction needs</p>
//       </div>

//       <div className="space-y-8">
//         {products.map((product, i) => (
//           <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className={`bg-gradient-to-r ${product.color} text-white p-6`}>
//               <h2 className="text-2xl font-bold mb-2">{product.category}</h2>
//               <div className="flex flex-wrap gap-2">
//                 {product.brands.map((brand, j) => (
//                   <span key={j} className="bg-white/20 px-3 py-1 rounded-full text-sm">
//                     {brand}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="p-6">
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {product.items.map((item, j) => (
//                   <div key={j} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
//                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 bg-slate-900 text-white rounded-xl p-8 text-center">
//         <h3 className="text-2xl font-bold mb-4">Trusted by Leading Builders</h3>
//         <p className="text-gray-300 mb-6">
//           Our products are used in prestigious projects across Andhra Pradesh including government buildings, hotels, and residential complexes.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4 text-sm">
//           {['Varun Builders', 'MVV Builders', 'Karlan Homes', 'AP Government Projects', 'Radisson Hotels', 'IIM Visakhapatnam'].map((client, i) => (
//             <span key={i} className="bg-white/10 px-4 py-2 rounded-full">{client}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Gallery Page
// function GalleryPage() {
//   const categories = [
//     { name: 'Electrical Products', count: 12 },
//     { name: 'Tiles & Doors', count: 18 },
//     { name: 'Plumbing Systems', count: 15 },
//     { name: 'Sanitaryware', count: 20 },
//     { name: 'Home Appliances', count: 10 }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-slate-900 mb-4">Product Gallery</h1>
//         <p className="text-xl text-gray-600">Explore our wide range of premium building materials</p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((cat, i) => (
//           <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
//             <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
//               <ImageIcon className="w-20 h-20 text-amber-400 opacity-80" />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
//               <p className="text-gray-600">{cat.count} Products Available</p>
//               <button className="mt-4 text-amber-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
//                 View Gallery <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
//         <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
//         <h3 className="text-xl font-bold text-slate-900 mb-2">Product Videos Coming Soon</h3>
//         <p className="text-gray-600">We're working on creating detailed video showcases of our products</p>
//       </div>
//     </div>
//   );
// }

// // Contact Page
// function ContactPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for contacting us! We will get back to you soon.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
//         <p className="text-xl text-gray-600">Get in touch with VTC Corporation</p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <div className="bg-white rounded-xl p-8 shadow-md mb-6">
//             <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={e => setFormData({...formData, name: e.target.value})}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={e => setFormData({...formData, email: e.target.value})}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={e => setFormData({...formData, phone: e.target.value})}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-slate-900 mb-2">Your Message</label>
//                 <textarea
//                   rows="4"
//                   value={formData.message}
//                   onChange={e => setFormData({...formData, message: e.target.value})}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
//                   required
//                 />
//               </div>
//               <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-semibold transition-all">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         <div>
//           <div className="bg-white rounded-xl p-8 shadow-md mb-6">
//             <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
//                   <p className="text-gray-600">Ground Floor, 31-32-28, Near Captain Ramarao Junction, Dabagardens, Visakhapatnam-530020, Andhra Pradesh, India</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <Phone className="w-6 h-6 text-amber-500 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
//                   <a href="tel:+919398927234" className="text-amber-600 hover:underline">+91 93989 27234</a>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <Mail className="w-6 h-6 text-amber-500 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
//                   <a href="mailto:info@vtccorp.com" className="text-amber-600 hover:underline">info@vtccorp.com</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl overflow-hidden shadow-md">
//             <div className="h-64 bg-gray-200 flex items-center justify-center">
//               <MapPin className="w-12 h-12 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Footer Component
// function Footer({ setCurrentPage }) {
//   return (
//     <footer className="bg-slate-900 text-white mt-20">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-lg">
//                 VTC
//               </div>
//               <span className="font-bold text-lg">VTC Corporation</span>
//             </div>
//             <p className="text-gray-400 text-sm mb-4">
//               Leading supplier of premium building materials across Andhra Pradesh since 15+ years.
//             </p>
//             <div className="flex gap-3">
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all cursor-pointer">
//                 <Facebook className="w-5 h-5" />
//               </div>
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all cursor-pointer">
//                 <Linkedin className="w-5 h-5" />
//               </div>
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all cursor-pointer">
//                 <Twitter className="w-5 h-5" />
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               {['home', 'about', 'products', 'gallery', 'contact'].map(page => (
//                 <li key={page}>
//                   <button
//                     onClick={() => {
//                       setCurrentPage(page);
//                       window.scrollTo({ top: 0, behavior: 'smooth' });
//                     }}
//                     className="text-gray-400 hover:text-amber-500 transition-colors capitalize"
//                   >
//                     {page === 'home' ? 'Home' : page === 'about' ? 'About Us' : page === 'products' ? 'Products' : page === 'gallery' ? 'Gallery' : 'Contact'}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Our Products</h3>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>Electrical Solutions</li>
//               <li>Tiles & Doors</li>
//               <li>Plumbing Systems</li>
//               <li>Sanitaryware</li>
//               <li>Home Appliances</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold mb-4">Contact Info</h3>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
//                 <span className="text-gray-400">Dabagardens, Visakhapatnam, AP</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
//                 <a href="tel:+919398927234" className="text-gray-400 hover:text-amber-500">+91 93989 27234</a>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
//                 <a href="mailto:info@vtccorp.com" className="text-gray-400 hover:text-amber-500">info@vtccorp.com</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
//           <p>© {new Date().getFullYear()} VTC Corporation. All Rights Reserved. | GST: 37AGKPP9430H1ZZ</p>
//         </div>
//       </div>
//     </footer>
//   );
// }






// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { createPageUrl } from './utils';

// // Import all page components
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* Home Page */}
//           <Route path={createPageUrl('Home')} element={<Home />} />
//           <Route path="/" element={<Navigate to={createPageUrl('Home')} replace />} />
          
//           {/* About Page */}
//           <Route path={createPageUrl('About')} element={<About />} />
          
//           {/* Products Pages */}
//           <Route path={createPageUrl('Products')} element={<Products />} />
//           <Route path={createPageUrl('ProductDetail')} element={<ProductDetail />} />
          
//           {/* Gallery Page */}
//           <Route path={createPageUrl('Gallery')} element={<Gallery />} />
          
//           {/* Contact Page */}
//           <Route path={createPageUrl('Contact')} element={<Contact />} />
          
//           {/* 404 - Redirect to Home */}
//           <Route path="*" element={<Navigate to={createPageUrl('Home')} replace />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { createPageUrl } from './utils';

// // Import all page components
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         {/* Home Page */}
//         <Route path={createPageUrl('Home')} element={<Home />} />
//         <Route path="/" element={<Navigate to={createPageUrl('Home')} replace />} />

//         {/* About Page */}
//         <Route path={createPageUrl('About')} element={<About/>} />

//         {/* Products Pages */}
//         <Route path={createPageUrl('Products')} element={<Products />} />
//         <Route path={createPageUrl('ProductDetail')} element={<ProductDetail />} />

//         {/* Gallery Page */}
//         <Route path={createPageUrl('Gallery')} element={<Gallery />} />

//         {/* Contact Page */}
//         <Route path={createPageUrl('Contact')} element={<Contact />} />

//         {/* 404 - Redirect to Home */}
//         <Route path="*" element={<Navigate to={createPageUrl('Home')} replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;




 
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { createPageUrl } from './utils';
 
// // Import all page components
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';  
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
 
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         {/* Home Page */}
//         <Route path={createPageUrl('Home')} element={<Home />} />
//         <Route path="/" element={<Navigate to={createPageUrl('Home')} replace />} />
 
//         {/* About Page - Using AboutUs component */}
//         <Route path={createPageUrl('About')} element={<AboutUs />} />
 
//         {/* Products Pages */}
//         <Route path={createPageUrl('Products')} element={<Products />} />
//         <Route path={createPageUrl('ProductDetail')} element={<ProductDetail />} />
 
//         {/* Gallery Page */}
//         <Route path={createPageUrl('Gallery')} element={<Gallery />} />
 
//         {/* Contact Page */}
//         <Route path={createPageUrl('Contact')} element={<Contact />} />
 
//         {/* 404 - Redirect to Home */}
//         <Route path="*" element={<Navigate to={createPageUrl('Home')} replace />} />
//       </Routes>
//     </div>
//   );
// }
 
// export default App;
 


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createPageUrl } from './utils';

// Import all page components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';  
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// ✅ Import the ScrollToTop component
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      {/* ✅ Add ScrollToTop here (before Routes) */}
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route path={createPageUrl('Home')} element={<Home />} />
        <Route path="/" element={<Navigate to={createPageUrl('Home')} replace />} />

        {/* About Page */}
        <Route path={createPageUrl('About')} element={<AboutUs />} />

        {/* Products Pages */}
        <Route path={createPageUrl('Products')} element={<Products />} />
        <Route path={createPageUrl('ProductDetail')} element={<ProductDetail />} />

        {/* Gallery Page */}
        <Route path={createPageUrl('Gallery')} element={<Gallery />} />

        {/* Contact Page */}
        <Route path={createPageUrl('Contact')} element={<Contact />} />

        {/* 404 - Redirect to Home */}
        <Route path="*" element={<Navigate to={createPageUrl('Home')} replace />} />
      </Routes>
    </div>
  );
}

export default App;
