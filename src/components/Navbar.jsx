"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { LayoutGrid, Search, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll height check
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "HOME", target: "home" },
    { name: "ABOUT", target: "about" },
    { name: "SERVICES", target: "services" },
    { name: "GALLERY", target: "gallery" },
    { name: "PRICING", target: "pricing" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop & Top Navbar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // Methana 'top-5' saha 'top-[85px]' dala fix kala. Etakota mobile waladi kapenne na!
        className={`w-full px-4 md:px-12 z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-5 md:top-6 left-0" : "absolute top-[85px] md:top-[70px] left-0"
        }`}
      >
        <div className={`max-w-[1400px] mx-auto rounded-full px-6 md:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)]" : "bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl"
        }`}>
          
          <div className="flex items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white hover:text-[#0BB671] transition-colors"
            >
              <LayoutGrid size={24} strokeWidth={1.5} />
            </motion.button>
            
            <Link href="/" onClick={(e) => handleScroll(e, "home")} className="flex items-center">
              <motion.svg 
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="md:w-9 md:h-9"
              >
                <circle cx="5" cy="15" r="2.5" fill="#FFFFFF"/>
                <circle cx="12" cy="11" r="2.5" fill="#FFFFFF"/>
                <circle cx="15.5" cy="11" r="1.5" fill="#FFFFFF"/>
                <path d="M6.5 13.5L10.5 12" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                <path d="M11.5 12.5C11.5 14 12 15 13.5 15" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
              </motion.svg>
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="hidden lg:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <a 
                  href={`#${link.target}`}
                  onClick={(e) => handleScroll(e, link.target)}
                  className="flex items-center gap-1.5 text-[13px] font-bold text-gray-300 hover:text-white transition-colors tracking-[0.1em] uppercase group"
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex items-center gap-4 md:gap-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-[#0BB671] transition-colors"
            >
              <Search size={20} strokeWidth={2} />
            </motion.button>

            <motion.button 
              onClick={(e) => handleScroll(e, "contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-[#0BB671] hover:bg-emerald-400 text-black text-sm font-bold px-8 py-2.5 rounded-full transition-colors tracking-wide shadow-[0_0_20px_rgba(11,182,113,0.2)]"
            >
              Get in touch
            </motion.button>
          </div>

        </div>
      </motion.div>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 w-[90%] max-w-[400px] h-full bg-[#1c1c1c] z-[70] flex flex-col shadow-2xl overflow-y-auto"
            >
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-tr from-[#0BB671]/20 via-transparent to-[#041E15]/40 pointer-events-none opacity-80" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0BB671]/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-700/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 w-full h-[30%] opacity-20 pointer-events-none overflow-hidden flex items-end">
                 <div className="w-[200%] h-[200px] border-[1px] border-[#0BB671] rounded-[100%] ml-[-50%] mb-[-50px]" />
                 <div className="absolute w-[180%] h-[180px] border-[1px] border-[#0BB671] rounded-[100%] ml-[-40%] mb-[-40px]" />
                 <div className="absolute w-[160%] h-[160px] border-[1px] border-[#0BB671] rounded-[100%] ml-[-30%] mb-[-30px]" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
                <div className="flex justify-between items-start mb-10">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="15" r="2.5" fill="#FFFFFF"/>
                    <circle cx="12" cy="11" r="2.5" fill="#FFFFFF"/>
                    <circle cx="15.5" cy="11" r="1.5" fill="#FFFFFF"/>
                    <path d="M6.5 13.5L10.5 12" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M11.5 12.5C11.5 14 12 15 13.5 15" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-gray-300 bg-white/10 p-2 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-5 mb-10">
                  <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Menu</h4>
                  {navLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={`#${link.target}`}
                      onClick={(e) => handleScroll(e, link.target)}
                      className="text-3xl font-black text-gray-200 hover:text-[#0BB671] transition-colors uppercase tracking-tight"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
                  <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Contacts</h4>
                  <div className="text-white text-[15px] font-medium leading-relaxed">
                    <p>Colombo, Sri Lanka</p>
                    <p className="text-gray-400">(Global Travel)</p>
                  </div>
                  <div className="text-white text-[15px] font-medium leading-relaxed">
                    <p>+94 77 123 4567</p>
                  </div>
                  <div>
                    <a href="mailto:hello@gayawalker.com" className="text-white text-[15px] font-medium underline decoration-1 underline-offset-4 hover:text-[#0BB671] transition-colors">
                      hello@gayawalker.com
                    </a>
                  </div>
                </div>

                <div className="mt-10 mb-8">
                  <button onClick={(e) => handleScroll(e, "contact")} className="relative rounded-full p-[1.5px] bg-gradient-to-r from-[#0BB671] to-emerald-300 w-full group">
                    <div className="bg-[#1c1c1c] rounded-full px-8 py-3.5 flex items-center justify-center transition-colors group-hover:bg-transparent">
                      <span className="text-sm font-semibold text-white tracking-wide group-hover:text-black transition-colors">Get in touch</span>
                    </div>
                  </button>
                </div>

                <div className="mt-auto flex items-center gap-6 pb-2 justify-center">
                  <a href="#" aria-label="Facebook" className="text-white hover:text-[#0BB671] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="X" className="text-white hover:text-[#0BB671] transition-colors">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#0BB671] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube" className="text-white hover:text-[#0BB671] transition-colors">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}