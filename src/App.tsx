import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Instagram, Facebook, Star, Check, Menu, X, ChevronRight, Mail } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-rose-100/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-rose-900">
                Radhika <span className="text-gold-500 italic font-normal">Salon</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-rose-600 transition-colors text-sm uppercase tracking-widest font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:9312014322"
                className="bg-rose-900 text-white px-6 py-2.5 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-rose-800 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-rose-900 focus:outline-none"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-rose-100"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-rose-600 hover:bg-rose-50 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href="tel:9312014322"
                    className="w-full bg-rose-900 text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-rose-800 transition-colors flex items-center justify-center gap-2"
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
      <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
            alt="Beautiful bride getting makeup done"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold-500 font-medium tracking-widest uppercase mb-4 text-sm">Welcome to Radhika Salon</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-rose-950 leading-tight mb-6">
                Unveil Your <br />
                <span className="italic font-light">Bridal Radiance</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                Uttar Pradesh's premier destination for exquisite bridal makeup, hair styling, and pre-bridal pampering. Let us make your special day truly unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:9312014322"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-rose-900 hover:bg-rose-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-rose-900 bg-transparent border border-rose-900 hover:bg-rose-50 transition-all"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-950 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Tailored beauty experiences designed to enhance your natural grace and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal Makeup",
                desc: "Flawless, long-lasting HD and Airbrush makeup tailored to your skin type and wedding theme.",
                img: "https://images.unsplash.com/photo-1516975080661-46b0a112ce11?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Pre-Bridal Packages",
                desc: "Comprehensive skincare, hair treatments, and relaxation therapies leading up to your big day.",
                img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Party & Guest Makeup",
                desc: "Elegant styling and makeup for bridesmaids, family members, and party attendees.",
                img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white flex items-center gap-2 font-medium">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-rose-950 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1936&auto=format&fit=crop"
                alt="Makeup tools"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-rose-950 mb-6">The Radhika Signature</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With years of experience in bridal artistry, we understand that every bride is unique. We use only premium, skin-safe international brands to ensure you look flawless in person and in photographs.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Premium International Makeup Brands",
                  "Customized Looks for Your Features",
                  "Airbrush & HD Makeup Experts",
                  "Relaxing, Hygienic Environment",
                  "On-Venue Services Available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-500">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-rose-950 mb-4">Our Brides</h2>
              <div className="w-24 h-1 bg-gold-400 rounded-full"></div>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-rose-600 hover:text-rose-800 font-medium transition-colors">
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1606247193629-8488e0257b4f?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=2095&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1512413914695-1011d1a815a5?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1505934333218-8fe21ff87e69?q=80&w=2070&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Bridal makeup ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden flex justify-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-rose-600 font-medium">
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-950 mb-4">Words of Love</h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                text: "Radhika made me look exactly how I envisioned for my wedding. The makeup stayed flawless throughout the night despite all the dancing and crying!",
              },
              {
                name: "Neha Singh",
                text: "The pre-bridal package was so relaxing. On the main day, the team was punctual, professional, and incredibly talented. Highly recommend!",
              },
              {
                name: "Anjali Verma",
                text: "I got so many compliments on my reception look. Radhika understands what suits your face and enhances your natural features beautifully."
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-rose-50"
              >
                <div className="flex gap-1 text-gold-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-serif font-semibold text-rose-950 text-lg">- {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-rose-950 text-rose-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-3xl mb-6">
                Radhika <span className="text-gold-400 italic font-normal">Salon</span>
              </h3>
              <p className="text-rose-200/80 max-w-md leading-relaxed mb-8">
                Your trusted partner in bridal beauty. We bring out your inner glow for the most important day of your life.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-rose-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-rose-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-rose-200/80">
                  <MapPin className="w-5 h-5 shrink-0 mt-1 text-gold-400" />
                  <span>Uttar Pradesh, India<br />(Full address provided upon booking)</span>
                </li>
                <li className="flex items-center gap-3 text-rose-200/80">
                  <Phone className="w-5 h-5 shrink-0 text-gold-400" />
                  <a href="tel:9312014322" className="hover:text-white transition-colors">9312014322</a>
                </li>
                <li className="flex items-center gap-3 text-rose-200/80">
                  <Mail className="w-5 h-5 shrink-0 text-gold-400" />
                  <a href="mailto:hello@radhikasalon.com" className="hover:text-white transition-colors">hello@radhikasalon.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-rose-200/80 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-rose-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-rose-200/60">
            <p>&copy; {new Date().getFullYear()} Radhika Salon. All rights reserved.</p>
            <p>Designed with elegance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
