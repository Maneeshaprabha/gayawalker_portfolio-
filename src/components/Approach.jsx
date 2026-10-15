"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Approach() {
  return (
    <section className="bg-[#111111] text-white py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Heading Section */}
        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-[#0BB671] font-semibold text-xl mb-6"
          >
            My Approach
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
          >
            Authentic Stories <br />
            Raw Experiences <br />
            Lasting Memories
          </motion.h2>
        </div>

        {/* Right Column: Content and CTA */}
        <div className="flex flex-col lg:mt-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-[22px] text-gray-200 leading-relaxed mb-12 font-light"
          >
            I combine immersive exploration, cinematic photography, and authentic storytelling to bring remote destinations to life and inspire others to discover the unseen.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-8 md:gap-12"
          >
            <span className="text-gray-400 text-sm md:text-base max-w-[140px] leading-tight">
              Let's plan the next expedition together
            </span>
            
            <button className="flex items-center gap-3 bg-[#0BB671] text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-500 transition-all duration-300 group">
              Get in touch 
              <span className="bg-white text-[#0BB671] p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}