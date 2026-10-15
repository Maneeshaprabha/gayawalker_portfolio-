"use client";
import { motion } from "framer-motion";
import { Play, Clock, Eye, Sparkles } from "lucide-react";

const youtubeVideos = [
  { id: 1, title: "Solo Backpacking in the Swiss Alps | 7 Days Off Grid", views: "1.2M", duration: "18:45", thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop", featured: true },
  { id: 2, title: "Hidden Gems of Kyoto, Japan", views: "890K", duration: "12:20", thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", featured: false },
  { id: 3, title: "Iceland Road Trip: Ultimate Guide", views: "450K", duration: "24:10", thumbnail: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1200&auto=format&fit=crop", featured: false }
];

export default function YouTubeSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-red-500" />
              <span className="text-red-500 font-bold text-xs uppercase tracking-[0.2em]">Latest Drops</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Stories.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative rounded-[32px] overflow-hidden cursor-pointer h-[400px] md:h-[600px]"
          >
            <img 
              src={youtubeVideos[0].thumbnail} 
              alt={youtubeVideos[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-red-600 group-hover:scale-110 shadow-[0_0_0_rgba(220,38,38,0)] group-hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                <Play fill="white" size={30} className="ml-1.5 text-white" />
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-3 mb-4">
                <span className="bg-red-600/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <Play size={12} fill="white"/> YouTube
                </span>
                <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/10 flex items-center gap-1.5">
                  <Clock size={12} /> {youtubeVideos[0].duration}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2">{youtubeVideos[0].title}</h3>
              <p className="text-gray-400 font-medium flex items-center gap-2">
                <Eye size={16} /> {youtubeVideos[0].views} Views
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            {youtubeVideos.slice(1).map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-[24px] overflow-hidden cursor-pointer h-[200px] md:h-[288px] flex-1"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600">
                  <Play fill="white" size={16} className="ml-0.5" />
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                    <span className="flex items-center gap-1"><Eye size={12}/> {video.views}</span>
                    <span className="flex items-center gap-1"><Clock size={12}/> {video.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}