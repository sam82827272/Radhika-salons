import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Instagram, Facebook, Star, Check, Menu, X, ChevronRight, Mail, Scissors, User, Award, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Journey', href: '#journey' },
    { name: 'Book Now', href: '#book' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-gold-100 selection:text-salon-dark">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-salon-dark">
                RADHIKA <span className="text-gold-500 font-light">UNISEX SALON</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gold-500 transition-colors text-xs uppercase tracking-[0.2em] font-bold"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#book"
                className="bg-salon-dark text-white px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-gold-500 transition-all duration-300 shadow-lg"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-salon-dark hover:text-gold-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-b border-gray-100"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-sm font-bold text-salon-dark uppercase tracking-widest hover:text-gold-500 border-b border-gray-50"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 px-3">
                  <a
                    href="tel:9312014322"
                    className="w-full bg-salon-dark text-white px-6 py-4 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-gold-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call 9312014322
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
            alt="Modern Salon Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-gold-500 text-salon-dark px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Premium Grooming Experience
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-8">
              Style for <br />
              <span className="text-gold-400 italic font-light">Everyone.</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-light">
              Experience world-class grooming and beauty services at Uttar Pradesh's most sophisticated unisex salon. Where tradition meets modern style.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-sm text-salon-dark bg-gold-500 hover:bg-white transition-all duration-300 shadow-2xl"
              >
                Book Your Session
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-sm text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-100 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"
                alt="Salon Team"
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-salon-dark p-8 text-white hidden md:block">
                <p className="text-4xl font-serif font-bold text-gold-500 mb-1">15+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">About Radhika Salon</span>
              <h2 className="font-serif text-4xl md:text-5xl text-salon-dark mb-8 leading-tight">Crafting Beauty & Confidence Since 2008</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                Radhika Unisex Salon was founded with a simple vision: to provide high-quality grooming services that empower individuals to look and feel their best. Located in the heart of Uttar Pradesh, we have grown from a small studio to a premier destination for hair, skin, and bridal services.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                Our team of expert stylists and therapists are dedicated to staying ahead of global trends while respecting individual preferences. We use only the finest products to ensure your safety and satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <User className="w-8 h-8 text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Expert Stylists</h4>
                    <p className="text-xs text-gray-500">Certified professionals with global training.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Premium Products</h4>
                    <p className="text-xs text-gray-500">Only the best international brands for you.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-salon-dark mb-6">Our Specialized Services</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Hair Styling", icon: Scissors, desc: "Precision cuts, coloring, and treatments for all hair types." },
              { title: "Skin Care", icon: Star, desc: "Rejuvenating facials and advanced skin therapies." },
              { title: "Bridal & Groom", icon: Award, desc: "Exquisite makeup and grooming for your special day." },
              { title: "Nail Art", icon: Check, desc: "Creative nail designs and professional manicures." }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 border border-gray-100 hover:border-gold-500 transition-all duration-300 group"
              >
                <service.icon className="w-12 h-12 text-salon-dark mb-8 group-hover:text-gold-500 transition-colors" />
                <h3 className="font-serif text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#book" className="text-[10px] uppercase tracking-widest font-bold text-gold-500 flex items-center gap-2">
                  Book Now <ChevronRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Successful Journey Section */}
      <section id="journey" className="py-24 bg-salon-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Legacy</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Our Successful Journey</h2>
              <div className="space-y-12">
                {[
                  { year: "2008", title: "The Beginning", desc: "Started as a small 2-chair salon in Uttar Pradesh with a dream to redefine grooming." },
                  { year: "2015", title: "Expansion", desc: "Opened our flagship unisex studio with advanced skin and hair technology." },
                  { year: "2023", title: "Award Winning", desc: "Recognized as the 'Best Unisex Salon' in the region for our excellence in bridal makeup." }
                ].map((milestone, i) => (
                  <div key={i} className="flex gap-8 relative">
                    {i !== 2 && <div className="absolute left-6 top-12 bottom-[-48px] w-[1px] bg-white/10"></div>}
                    <div className="w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center shrink-0 bg-salon-dark z-10">
                      <span className="text-[10px] font-bold text-gold-500">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold mb-2">{milestone.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop" alt="Salon Work" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1516975080661-46b0a112ce11?q=80&w=1974&auto=format&fit=crop" alt="Salon Work" className="rounded-sm mt-12 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" alt="Salon Work" className="rounded-sm -mt-12 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" alt="Salon Work" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section id="book" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-salon-dark rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Reserve Your Spot</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Book An Appointment</h2>
              <p className="text-gray-400 mb-12 font-light leading-relaxed">
                Ready for a transformation? Fill out the form or call us directly to schedule your visit. We recommend booking at least 2 days in advance for weekends.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Call Us</p>
                    <p className="text-lg font-bold">9312014322</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Opening Hours</p>
                    <p className="text-lg font-bold">10:00 AM - 08:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-gray-50 p-12 md:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-all" placeholder="9312014322" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Service Category</label>
                  <select className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-all appearance-none">
                    <option>Hair Styling</option>
                    <option>Skin Care</option>
                    <option>Bridal/Groom Makeup</option>
                    <option>Nail Art</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Preferred Date</label>
                  <input type="date" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-all" />
                </div>
                <button className="w-full bg-salon-dark text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 transition-all duration-300 shadow-xl">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-3xl font-bold mb-6">
                RADHIKA <span className="text-gold-500 font-light">UNISEX SALON</span>
              </h3>
              <p className="text-gray-500 max-w-md leading-relaxed mb-10 font-light">
                Redefining beauty and grooming standards in Uttar Pradesh. Join us for a premium experience that celebrates your unique style.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-salon-dark mb-8">Location</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-1 text-gold-500" />
                  <span>Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500 text-sm">
                  <Phone className="w-4 h-4 shrink-0 text-gold-500" />
                  <a href="tel:9312014322" className="hover:text-gold-500 transition-colors">9312014322</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-salon-dark mb-8">Company</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 text-sm hover:text-gold-500 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <p>&copy; {new Date().getFullYear()} Radhika Unisex Salon. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-salon-dark transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-salon-dark transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
