"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Search, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Framer motion 'useScroll' wenuwata standard Javascript scroll event eka use karanawa (Mobile walata 100% accurate)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", target: "home" },
    { name: "ABOUT", target: "about" },
    { name: "SERVICES", target: "services" },
    { name: "GALLERY", target: "gallery" },
    { name: "PRICING", target: "pricing" },
  ];

  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* 
        Methana <motion.nav> wenuwata normal <header> tag eka damma. 
        Meken mobile browser wala kapena eka (clipping issue) sampurnayenma nathi wenawa.
      */}
      <header 
        className={`fixed left-0 right-0 w-full z-[9999] px-4 md:px-12 transition-all duration-300 ease-in-out ${
          isScrolled ? "top-4 md:top-6" : "top-[70px] md:top-[80px]"
        }`}
      >
        <div className={`max-w-[1400px] mx-auto rounded-full px-6 md:px-8 py-3.5 md:py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]" 
            : "bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl"
        }`}>
          
          {/* Menu Icon & Logo */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white hover:text-[#0BB671] transition-transform active:scale-95"
            >
              <LayoutGrid size={24} strokeWidth={1.5} />
            </button>
            
            <Link href="/" onClick={(e) => handleScrollClick(e, "home")} className="flex items-center transition-transform hover:scale-105">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-9 md:h-9">
                <circle cx="5" cy="15" r="2.5" fill="#FFFFFF"/>
                <circle cx="12" cy="11" r="2.5" fill="#FFFFFF"/>
                <circle cx="15.5" cy="11" r="1.5" fill="#FFFFFF"/>
                <path d="M6.5 13.5L10.5 12" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                <path d="M11.5 12.5C11.5 14 12 15 13.5 15" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.target}`}
                onClick={(e) => handleScrollClick(e, link.target)}
                className="flex items-center gap-1.5 text-[13px] font-bold text-gray-300 hover:text-white transition-colors tracking-[0.1em] uppercase group"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search & Get in Touch */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-white hover:text-[#0BB671] transition-transform hover:scale-110">
              <Search size={20} strokeWidth={2} />
            </button>
            <button 
              onClick={(e) => handleScrollClick(e, "contact")}
              className="hidden md:block bg-[#0BB671] hover:bg-emerald-400 text-black text-sm font-bold px-8 py-2.5 rounded-full transition-transform hover:scale-105 tracking-wide shadow-[0_0_20px_rgba(11,182,113,0.2)]"
            >
              Get in touch
            </button>
          </div>

        </div>
      </header>

      {/* ================================================== */}
      {/* MOBILE MENU DRAWER */}
      {/* ================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998]"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 w-[90%] max-w-[400px] h-full bg-[#1c1c1c] z-[99999] flex flex-col shadow-2xl overflow-y-auto"
            >
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-tr from-[#0BB671]/20 via-transparent to-[#041E15]/40 pointer-events-none opacity-80" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0BB671]/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-700/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                <div className="flex justify-between items-start mb-10">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="15" r="2.5" fill="#FFFFFF"/>
                    <circle cx="12" cy="11" r="2.5" fill="#FFFFFF"/>
                    <circle cx="15.5" cy="11" r="1.5" fill="#FFFFFF"/>
                    <path d="M6.5 13.5L10.5 12" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M11.5 12.5C11.5 14 12 15 13.5 15" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-300 bg-white/10 p-2 rounded-full">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-5 mb-10">
                  <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Menu</h4>
                  {navLinks.map((link) => (
                    <a key={link.name} href={`#${link.target}`} onClick={(e) => handleScrollClick(e, link.target)} className="text-3xl font-black text-gray-200 hover:text-[#0BB671] transition-colors uppercase tracking-tight">
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
                  <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Contacts</h4>
                  <div className="text-white text-[15px] font-medium leading-relaxed">
                    <p>Colombo, Sri Lanka</p><p className="text-gray-400">(Global Travel)</p>
                  </div>
                  <div className="text-white text-[15px] font-medium leading-relaxed"><p>+94 77 123 4567</p></div>
                  <a href="mailto:hello@gayawalker.com" className="text-white text-[15px] font-medium underline decoration-1 underline-offset-4 hover:text-[#0BB671] transition-colors">
                    hello@gayawalker.com
                  </a>
                </div>

                <div className="mt-10 mb-8">
                  <button onClick={(e) => handleScrollClick(e, "contact")} className="relative rounded-full p-[1.5px] bg-gradient-to-r from-[#0BB671] to-emerald-300 w-full group">
                    <div className="bg-[#1c1c1c] rounded-full px-8 py-3.5 flex items-center justify-center transition-colors group-hover:bg-transparent">
                      <span className="text-sm font-semibold text-white tracking-wide group-hover:text-black transition-colors">Get in touch</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}