"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section  id = "about" className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#F8F9FA] text-black overflow-hidden flex items-center z-30">
      {/* Background Horizontal Lines Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)' 
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 relative z-10 py-20 lg:py-0">
        
        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="flex flex-col justify-center h-full z-20 pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Highlighted Title - Changed to Green */}
            <div className="bg-[#0BB671] text-black px-4 py-1.5 inline-block text-2xl md:text-4xl font-bold mb-3 shadow-sm">
              About Me
            </div>
            
            {/* Main Name */}
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-gray-900 leading-none">
              Gaya Walker
            </h2>
            
            {/* Sub Heading */}
            <p className="text-3xl md:text-[42px] text-gray-800 font-medium leading-[1.1] mb-10 tracking-tight">
              Chasing raw stories. <br className="hidden md:block" />
              Bringing unseen <br className="hidden md:block" />
              moments to life.
            </p>
            
            {/* Underlined Text Block */}
            <div className="flex flex-col items-start gap-2 text-xl md:text-[28px] text-gray-900 font-medium tracking-tight">
              <span className="underline decoration-[#0BB671] decoration-[2.5px] underline-offset-[6px]">
                It's not just about the shot.
              </span>
              <span className="underline decoration-[#0BB671] decoration-[2.5px] underline-offset-[6px]">
                It's about the direction
              </span>
              <span className="underline decoration-[#0BB671] decoration-[2.5px] underline-offset-[6px]">
                and the journey.
              </span>
            </div>
          </motion.div>
        </div>

        {/* === RIGHT COLUMN: LARGE IMAGE === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] lg:h-screen w-full lg:absolute lg:right-0 lg:top-0 lg:w-[45%] z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" 
            alt="Gaya Walker Portrait" 
            className="w-full h-full object-cover object-center lg:object-[center_top] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent lg:hidden" />
        </motion.div>

      </div>

      {/* === BOTTOM LABELS === */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 left-6 md:left-12 flex gap-8 text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.2em] uppercase z-20"
      >
        <span>Creative Filmmaker</span>
        <span>@GayaWalker</span>
      </motion.div>
    </section>
  );
}