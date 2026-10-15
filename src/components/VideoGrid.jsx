"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Camera, Tv, Smartphone } from "lucide-react";

const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "instagram": return <Camera size={14} className="text-pink-500" />;
    case "youtube": return <Tv size={14} className="text-red-500" />;
    case "tiktok": return <Smartphone size={14} className="text-cyan-400" />;
    default: return <Eye size={14} className="text-gray-400" />;
  }
};

const videoData = [
  { id: 1, category: "Reels", platform: "Instagram", title: "Sunrise over the valley", username: "@WANDER.MILA", views: "2.4M", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Reels", platform: "Instagram", title: "First wave at 6 am", username: "@DAWN.SURF.CLUB", views: "860K", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "Shorts", platform: "YouTube", title: "Three days, one road", username: "@ROADSIDE.ANA", views: "1.3M", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "TikTok", platform: "TikTok", title: "Lisbon in 45 seconds", username: "@TRAVEL.NOA", views: "540K", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop" },
];

export default function VideoGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { name: "All", count: "08" },
    { name: "Reels", count: "03" },
    { name: "TikTok", count: "03" },
    { name: "Shorts", count: "02" }
  ];

  const filteredVideos = activeTab === "All" ? videoData : videoData.filter(vid => vid.category === activeTab);

  return (
    <section className="bg-[#111111] text-white py-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Edits that earn attention.
          </motion.h2>

          <div className="flex flex-wrap gap-2 bg-[#1c1c1c]/40 p-1.5 rounded-full border border-gray-800/40">
            {categories.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === tab.name 
                    ? "bg-[#282828] text-white border border-gray-700/60" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.name}
                <span className={`text-[9px] font-bold ${activeTab === tab.name ? "text-[#0BB671]" : "text-gray-500"}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group snap-center"
              >
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-300" />

                <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-200 border border-white/5">
                  {video.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play fill="white" size={18} className="ml-0.5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                  <h3 className="text-white text-lg font-bold leading-snug tracking-tight mb-1 group-hover:text-[#0BB671] transition-colors duration-200">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium tracking-wide mb-3">
                    {video.username}
                  </p>
                  
                  <div className="flex items-center gap-2 bg-black/40 w-fit px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                    {getPlatformIcon(video.platform)}
                    <span className="text-xs font-bold text-white tracking-wide">{video.views}</span>
                    <span className="text-[10px] text-gray-400 font-medium ml-1">{video.platform}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}