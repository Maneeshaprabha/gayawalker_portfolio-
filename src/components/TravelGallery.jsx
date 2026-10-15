"use client";
import { motion } from "framer-motion";
import { ChevronUp, ArrowRight } from "lucide-react";

const textLeft = "EXPLORING THE UNSEEN • CAPTURING THE WORLD ON CAMERA • GAYA WALKER • ";
const textRight = "CINEMATIC VISUALS • STORYTELLING ON THE ROAD • TRAVEL VLOGGING • ";

const galleryData = [
  { id: 1, title: "SmartTrader: Predictive Analysis", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Sunset Deserts", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Mountain Fog", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Coastal Roads", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Tropical Beaches", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Ancient Temples", image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "City Lights", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Winter Wonderland", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop" }
];

const marqueeLeft = {
  animate: { x: [0, -1000], transition: { x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } } },
};

const marqueeRight = {
  animate: { x: [-1000, 0], transition: { x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } } },
};

export default function TravelGallery() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#0a0a0a] flex flex-col overflow-hidden relative">
      
      {/* 1. SLANTED MARQUEE SECTION */}
      <section className="pt-24 pb-40 relative w-full flex flex-col gap-6 select-none z-10">
        <div className="relative w-[110%] -left-[5%] rotate-[2deg] transform origin-center z-10 shadow-lg">
          <div className="bg-[#0BB671] text-black py-4 font-black text-3xl md:text-5xl tracking-tighter uppercase whitespace-nowrap overflow-hidden flex">
            <motion.div className="flex gap-4 shrink-0" variants={marqueeLeft} animate="animate">
              <span>{textLeft}</span><span>{textLeft}</span><span>{textLeft}</span><span>{textLeft}</span>
            </motion.div>
          </div>
        </div>

        <div className="relative w-[110%] -left-[5%] -rotate-[2deg] transform origin-center z-20 -mt-10 shadow-2xl">
          <div className="bg-[#1C1C1C] text-white py-4 font-black text-3xl md:text-5xl tracking-tighter uppercase whitespace-nowrap overflow-hidden flex border-y border-white/10">
            <motion.div className="flex gap-4 shrink-0" variants={marqueeRight} animate="animate">
              <span>{textRight}</span><span>{textRight}</span><span>{textRight}</span><span>{textRight}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MASONRY GALLERY SECTION */}
      <section className="relative w-full z-30 -mt-32">
        <div className="absolute top-0 left-[-2%] right-[-2%] h-full bg-[#111111] -rotate-[2deg] transform origin-center rounded-[40px] md:rounded-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#111111] z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pt-32 pb-24">
          
          <div className="flex flex-col items-center text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[13px] tracking-[0.15em] lowercase text-[#0BB671] font-medium mb-3"
            >
              / gallery /
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1]"
            >
              Creative showcase <br />
              by Gaya Walker
            </motion.h2>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 w-full">
            {galleryData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="relative w-full rounded-[24px] overflow-hidden group cursor-pointer mb-6 break-inside-avoid shadow-lg"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white tracking-wide leading-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#0BB671] text-[#0BB671] font-semibold tracking-wide hover:bg-[#0BB671] hover:text-black transition-colors duration-300 group"
            >
              See More Photos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        

        </div>
      </section>
      
    </div>
  );
}