"use client";
import { motion } from "framer-motion";
import { Film, Layers, Palette, Volume2, Smartphone, Briefcase } from "lucide-react";

const servicesData = [
  { id: 1, title: "Video Editing", description: "Professional editing that transforms raw footage into engaging content.", icon: <Film size={28} className="text-black" /> },
  { id: 2, title: "Motion Graphics", description: "Custom animations and visual effects that enhance storytelling.", icon: <Layers size={28} className="text-black" /> },
  { id: 3, title: "Color Grading", description: "Cinematic color correction for a polished and professional look.", icon: <Palette size={28} className="text-black" /> },
  { id: 4, title: "Sound Design", description: "Clean audio mixing, sound effects, and immersive audio experiences.", icon: <Volume2 size={28} className="text-black" /> },
  { id: 5, title: "Social Media Content", description: "Short-form videos optimized for Instagram, TikTok, YouTube, and more.", icon: <Smartphone size={28} className="text-black" /> },
  { id: 6, title: "Corporate Videos", description: "High-impact promotional videos designed for marketing campaigns.", icon: <Briefcase size={28} className="text-black" /> }
];

export default function Services() {
  return (
    <section className="bg-[#FAFAFA] text-black py-24 px-6 md:px-12 w-full rounded-[40px] md:rounded-[60px] my-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <span className="text-sm font-medium">Our services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Video Services <br /> Tailored To Your Goals
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F3F3] p-8 md:p-10 rounded-[24px] cursor-pointer hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="mb-16 transform group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}