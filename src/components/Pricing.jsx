"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    name: "Viral-Style Reel",
    basic: "1 Reel",
    silver: "1 Reel",
    gold: "1 Reel",
  },
  {
    name: "Complete Content Planning",
    basic: true,
    silver: true,
    gold: true,
  },
  {
    name: "Professional Scriptwriting",
    basic: true,
    silver: true,
    gold: true,
  },
  {
    name: "Videography & Video Editing",
    basic: true,
    silver: true,
    gold: true,
  },
  {
    name: "Social Media Stories (FB, IG, TikTok)",
    basic: "4 Stories",
    silver: "4 Stories",
    gold: "4 Stories",
  },
  {
    name: "YouTube Vlog / Brand Video",
    basic: false,
    silver: "1 Full Vlog",
    gold: "1 Brand Video",
  },
  {
    name: "Premium Cinematic Video",
    basic: false,
    silver: false,
    gold: true,
  },
  {
    name: "Raw Drone Footage",
    basic: false,
    silver: false,
    gold: true,
  },
];

// Mobile cards walata loop karanna data set ekak
const mobilePackages = [
  { id: "basic", name: "Basic", price: "LKR 25,000", highlight: false },
  { id: "silver", name: "Silver", price: "LKR 45,000", highlight: false },
  { id: "gold", name: "Gold", price: "LKR 65,000", highlight: true },
];

// Table eke "Included" / "No" pennana podi component eka
const ValueCell = ({ value }) => {
  if (value === true) {
    return (
      <div className="flex items-center gap-1.5 text-[#0BB671]">
        <Check size={16} strokeWidth={3} />
        <span className="text-sm font-medium">Included</span>
      </div>
    );
  }
  if (value === false) {
    return <span className="text-gray-600 text-sm font-medium">— No</span>;
  }
  return <span className="text-gray-300 text-sm font-medium">{value}</span>;
};

export default function Pricing() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24 md:py-32 px-6 md:px-12 w-full border-t border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Social Media Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Choose the best plan to showcase your brand with Gaya Walker.
          </motion.p>
        </div>

        {/* ========================================= */}
        {/* DESKTOP VIEW: Comparison Table (Hidden on Mobile) */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:block overflow-x-auto pb-8"
        >
          <div className="min-w-[800px] w-full">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-4 border-b-2 border-gray-100/20 pb-6 mb-2">
              <div className="flex items-end">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">What is included</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Basic</h3>
                <p className="text-gray-400 font-medium">LKR 25,000</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Silver</h3>
                <p className="text-gray-400 font-medium">LKR 45,000</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0BB671] mb-1">Gold</h3>
                <p className="text-[#0BB671]/80 font-medium">LKR 65,000</p>
              </div>
            </div>

            {/* Table Body Rows */}
            {features.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 py-6 border-b border-gray-800 hover:bg-white/[0.02] transition-colors"
              >
                <div className="pr-4 flex items-center">
                  <span className="text-sm font-medium text-gray-200">{item.name}</span>
                </div>
                <div className="flex items-center">
                  <ValueCell value={item.basic} />
                </div>
                <div className="flex items-center">
                  <ValueCell value={item.silver} />
                </div>
                <div className="flex items-center">
                  <ValueCell value={item.gold} />
                </div>
              </div>
            ))}

          </div>
        </motion.div>

        {/* ========================================= */}
        {/* MOBILE VIEW: Stacked Cards (Hidden on Desktop) */}
        {/* ========================================= */}
        <div className="md:hidden flex flex-col gap-6">
          {mobilePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-[24px] border ${
                pkg.highlight 
                  ? "bg-gradient-to-b from-[#0BB671]/10 to-[#111] border-[#0BB671]/40" 
                  : "bg-[#161616] border-white/5"
              }`}
            >
              {pkg.highlight && (
                <span className="bg-[#0BB671] text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-[#0BB671]" : "text-white"}`}>
                {pkg.name}
              </h3>
              <p className="text-gray-400 font-medium mb-6 pb-6 border-b border-white/10">
                {pkg.price}
              </p>

              <div className="flex flex-col gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex justify-between items-center gap-4">
                    <span className="text-xs text-gray-400 w-1/2">{feature.name}</span>
                    <div className="w-1/2 flex justify-end text-right">
                      <ValueCell value={feature[pkg.id]} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-xs text-gray-500 font-medium text-center md:text-left">
          * CAAA charges are excluded from all packages.
        </div>

      </div>
    </section>
  );
}