"use client";
import { motion } from "framer-motion";
import { Film, Layers, Palette, Volume2, Smartphone, Briefcase } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Video Editing",
    description: "Professional editing that transforms raw footage into engaging content.",
    icon: <Film size={24} strokeWidth={1.5} className="text-black" />,
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Custom animations and visual effects that enhance storytelling.",
    icon: <Layers size={24} strokeWidth={1.5} className="text-black" />,
  },
  {
    id: 3,
    title: "Color Grading",
    description: "Cinematic color correction for a polished and professional look.",
    icon: <Palette size={24} strokeWidth={1.5} className="text-black" />,
  },
  {
    id: 4,
    title: "Sound Design",
    description: "Clean audio mixing, sound effects, and immersive audio experiences.",
    icon: <Volume2 size={24} strokeWidth={1.5} className="text-black" />,
  },
  {
    id: 5,
    title: "Social Media Content",
    description: "Short-form videos optimized for Instagram, TikTok, YouTube, and more.",
    icon: <Smartphone size={24} strokeWidth={1.5} className="text-black" />,
  },
  {
    id: 6,
    title: "Corporate Videos",
    description: "High-impact promotional videos designed for marketing campaigns.",
    icon: <Briefcase size={24} strokeWidth={1.5} className="text-black" />,
  }
];

// Scroll animations walata oni wena variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cards eken eka ena delay eka
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFFFF] text-black py-24 md:py-32 px-6 md:px-12 w-full relative z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-12 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <span className="text-sm font-medium tracking-wide">Our services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          >
            Video Services <br /> Tailored To Your Goals
          </motion.h2>
        </div>

        {/* Services Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }} // Page eka scroll wela 50px udin thiyeddi animation wada karanawa
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-[#F8F9FA] p-8 md:p-10 rounded-[24px] cursor-pointer hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              <div className="mb-12 transform group-hover:-translate-y-2 transition-transform duration-300 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}