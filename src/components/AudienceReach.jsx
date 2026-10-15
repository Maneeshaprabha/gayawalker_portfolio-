"use client";
import { motion } from "framer-motion";

const statsData = [
  { id: 1, value: "150K+", labelLine1: "YOUTUBE", labelLine2: "SUBSCRIBERS" },
  { id: 2, value: "280K+", labelLine1: "FACEBOOK", labelLine2: "FOLLOWERS" },
  { id: 3, value: "420K+", labelLine1: "TIKTOK", labelLine2: "FOLLOWERS" },
  { id: 4, value: "300K+", labelLine1: "INSTAGRAM", labelLine2: "FOLLOWERS" }
];

export default function AudienceReach() {
  return (
    <section className="bg-[#0a0a0a] text-white py-12 px-6 md:px-12 w-full border-y border-white/5 z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-3 md:gap-4 group cursor-default"
            >
              <span className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-[#0BB671] transition-colors duration-300">
                {stat.value}
              </span>
              <div className="flex flex-col text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase leading-snug group-hover:text-gray-300 transition-colors duration-300">
                <span>{stat.labelLine1}</span>
                <span>{stat.labelLine2}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}