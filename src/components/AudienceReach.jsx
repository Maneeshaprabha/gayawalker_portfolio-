
"use client";

import { motion } from "framer-motion";

const statsData = [
  { id: 1, value: "150K+", labelLine1: "YOUTUBE", labelLine2: "SUBSCRIBERS" },
  { id: 2, value: "280K+", labelLine1: "FACEBOOK", labelLine2: "FOLLOWERS" },
  { id: 3, value: "420K+", labelLine1: "TIKTOK", labelLine2: "FOLLOWERS" },
  { id: 4, value: "300K+", labelLine1: "INSTAGRAM", labelLine2: "FOLLOWERS" },
];

export default function AudienceReach() {
  return (
    <section className="relative z-20 w-full border-y border-white/5 bg-[#0a0a0a] px-4 py-10 text-white sm:px-6 sm:py-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-y-8 sm:gap-y-10 md:grid-cols-4 md:gap-y-0">
          {statsData.map((stat, index) => (
      
<motion.div
  key={stat.id}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className={`flex min-w-0 flex-col items-center justify-center gap-2 px-2 py-4 text-center sm:flex-row sm:gap-3 sm:px-3 sm:text-left md:py-0 ${
    index % 2 === 1 ? "border-l border-white/10 md:border-l-0" : ""
  } ${
    index >= 2
      ? "border-t border-white/10 md:border-t-0"
      : ""
  } ${
    index > 0 ? "md:border-l md:border-white/10" : ""
  }`}
>
  <span className="whitespace-nowrap text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#0BB671] sm:text-3xl md:text-4xl lg:text-5xl">
    {stat.value}
  </span>

  <div className="flex min-w-0 flex-col text-[8px] font-bold uppercase leading-relaxed tracking-[0.08em] text-gray-500 transition-colors duration-300 group-hover:text-gray-300 sm:text-[9px] md:text-[10px] lg:text-[11px]">
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
