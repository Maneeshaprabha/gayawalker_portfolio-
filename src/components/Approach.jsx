"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Approach() {
  return (
    <section className="bg-[#111111] text-white py-16 md:py-24 px-6 md:px-12 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Heading Section */}
        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-[#0BB671] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase mb-4 md:mb-6"
          >
            / My Approach /
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight"
          >
            Authentic Stories. <br className="hidden sm:block" />
            Raw Experiences. <br className="hidden sm:block" />
            Lasting Memories.
          </motion.h2>
        </div>

        {/* Right Column: Content and CTA */}
        <div className="flex flex-col lg:mt-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-[22px] text-gray-300 leading-relaxed mb-10 md:mb-12 font-medium"
          >
            I combine immersive exploration, cinematic photography, and authentic storytelling to bring remote destinations to life and inspire others to discover the unseen.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            // Mobile waladi column, anith ewage row widiyata penna meka wenas kala
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-12"
          >
            <span className="text-gray-400 text-sm md:text-base max-w-[220px] sm:max-w-[140px] leading-snug">
              Let's plan the next expedition together
            </span>
            
            <button className="flex items-center gap-3 bg-[#0BB671] text-black px-6 py-3 rounded-full font-bold hover:bg-emerald-400 transition-all duration-300 group shadow-[0_0_20px_rgba(11,182,113,0.2)]">
              Get in touch 
              <span className="bg-black text-[#0BB671] p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}