"use client";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-[#050505] text-white pt-24 w-full relative z-30 mt-32 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* === TOP HALF: Image & Contact Form === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center border-b border-white/10 pb-20">
          
          {/* Left Side - Overlapping Image & Contact Info */}
          <div className="flex flex-col gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] md:h-[550px] rounded-[32px] overflow-hidden shadow-2xl -mt-24 md:-mt-40 border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop" 
                alt="Gaya Walker" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </motion.div>

            {/* Direct Contact Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-8 text-gray-300 z-20"
            >
              <a href="tel:+94771234567" className="flex items-center gap-4 hover:text-[#0BB671] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0BB671]/50 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Phone</p>
                  <p className="font-medium tracking-wide">+94 77 123 4567</p>
                </div>
              </a>
              
              <a href="mailto:hello@gayawalker.com" className="flex items-center gap-4 hover:text-[#0BB671] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#0BB671]/50 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="font-medium tracking-wide">hello@gayawalker.com</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-[12px] tracking-[0.2em] uppercase text-[#0BB671] font-bold block mb-4">
              / Connect /
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-10">
              Let's craft your <br /> next story.
            </h2>
            
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0BB671] transition-colors rounded-none"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0BB671] transition-colors rounded-none"
                />
              </div>
              <textarea 
                rows="2"
                placeholder="Tell me about your project..." 
                className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0BB671] transition-colors resize-none rounded-none"
              ></textarea>

              <button 
                type="button" 
                className="mt-4 w-fit bg-white text-black font-bold py-4 px-10 rounded-full flex items-center justify-center gap-2 hover:bg-[#0BB671] hover:text-white transition-all duration-300 group"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* === BOTTOM HALF: Quote & Socials === */}
        <div className="pt-16 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 z-20 relative">
          <div className="flex gap-6 items-start max-w-xl">
            <span className="text-6xl text-[#0BB671] font-serif leading-none mt-2">“</span>
            <div>
              <p className="text-gray-400 font-medium text-lg leading-relaxed mb-4">
                Our business is built off of close relationships and we are glad that we are able to share positive travel experiences with our clients.
              </p>
            </div>
          </div>

          {/* Social Media Links with Custom SVGs */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs mb-2">Follow Journey</h4>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0BB671] hover:text-black transition-all duration-300 border border-white/10 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0BB671] hover:text-black transition-all duration-300 border border-white/10 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0BB671] hover:text-black transition-all duration-300 border border-white/10 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === HUGE TEXT BACKGROUND & COPYRIGHT === */}
      <div className="relative w-full pt-10 pb-6 flex flex-col items-center justify-end overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[14vw] font-black text-white/[0.03] tracking-tighter leading-none select-none text-center w-full whitespace-nowrap"
        >
          GAYA WALKER
        </motion.h1>
        
      <div className="absolute bottom-6 text-center text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase z-20">
          © 2026 Gaya Walker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}