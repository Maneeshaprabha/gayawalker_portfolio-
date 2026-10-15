
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Camera, Tv, Smartphone } from "lucide-react";

const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case "instagram":
      return <Camera size={14} className="shrink-0 text-pink-500" />;
    case "youtube":
      return <Tv size={14} className="shrink-0 text-red-500" />;
    case "tiktok":
      return <Smartphone size={14} className="shrink-0 text-cyan-400" />;
    default:
      return <Eye size={14} className="shrink-0 text-gray-400" />;
  }
};

const videoData = [
  {
    id: 1,
    category: "Reels",
    platform: "Instagram",
    title: "Sunrise over the valley",
    username: "@WANDER.MILA",
    views: "2.4M",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Reels",
    platform: "Instagram",
    title: "First wave at 6 am",
    username: "@DAWN.SURF.CLUB",
    views: "860K",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Shorts",
    platform: "YouTube",
    title: "Three days, one road",
    username: "@ROADSIDE.ANA",
    views: "1.3M",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "TikTok",
    platform: "TikTok",
    title: "Lisbon in 45 seconds",
    username: "@TRAVEL.NOA",
    views: "540K",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
  },
];

export default function VideoGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { name: "All", count: "08" },
    { name: "Reels", count: "03" },
    { name: "TikTok", count: "03" },
    { name: "Shorts", count: "02" },
  ];

  const filteredVideos =
    activeTab === "All"
      ? videoData
      : videoData.filter((video) => video.category === activeTab);

  return (
    <section
      id="gallery"
      className="w-full overflow-hidden bg-[#111111] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-12 md:mb-16 md:flex-row md:items-center md:justify-between">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Edits that earn attention.
          </motion.h2>

          {/* FILTER TABS */}
          <div className="-mx-1 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max min-w-full gap-1.5 rounded-full border border-gray-800/60 bg-[#1c1c1c]/70 p-1.5 sm:gap-2">
              {categories.map((tab) => (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => setActiveTab(tab.name)}
                  aria-pressed={activeTab === tab.name}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-semibold tracking-wide transition-colors duration-300 sm:px-4 sm:text-xs ${
                    activeTab === tab.name
                      ? "border border-gray-700/60 bg-[#282828] text-white"
                      : "border border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.name}
                  <span
                    className={`text-[9px] font-bold ${
                      activeTab === tab.name
                        ? "text-[#0BB671]"
                        : "text-gray-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RESPONSIVE VIDEO GRID */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, index) => (
              <motion.article
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="group relative aspect-[3/4] min-w-0 cursor-pointer overflow-hidden rounded-2xl bg-[#202020] sm:rounded-3xl"
              >
                {/* IMAGE */}
                <img
                  src={video.image}
                  alt={video.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/10" />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

                {/* CATEGORY BADGE */}
                <div className="absolute left-2 top-2 max-w-[calc(100%-16px)] rounded-md border border-white/10 bg-black/50 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-gray-100 backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]">
                  {video.category}
                </div>

                {/* PLAY BUTTON */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 md:h-14 md:w-14">
                    <Play
                      fill="white"
                      size={15}
                      className="ml-0.5 text-white sm:h-[18px] sm:w-[18px]"
                    />
                  </div>
                </div>

                {/* VIDEO INFORMATION */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col p-2.5 sm:p-4 md:p-5">
                  <h3 className="mb-1 line-clamp-2 text-xs font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-[#0BB671] sm:text-base md:text-lg">
                    {video.title}
                  </h3>

                  <p className="mb-2 truncate text-[9px] font-medium tracking-wide text-gray-300 sm:mb-3 sm:text-xs">
                    {video.username}
                  </p>

                  {/* PLATFORM + VIEWS */}
                  <div className="flex w-fit max-w-full items-center gap-1.5 rounded-lg border border-white/10 bg-black/50 px-2 py-1.5 backdrop-blur-md sm:gap-2 sm:px-2.5">
                    {getPlatformIcon(video.platform)}

                    <span className="shrink-0 text-[10px] font-bold tracking-wide text-white sm:text-xs">
                      {video.views}
                    </span>

                    <span className="min-w-0 truncate text-[8px] font-medium text-gray-300 sm:text-[10px]">
                      {video.platform}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
