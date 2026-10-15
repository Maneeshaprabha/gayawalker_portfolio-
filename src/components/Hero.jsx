"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Hero() {
  return (
    <>
      {/* 
        TopBar ekayi Navbar ekayi Hero section eken eliyata gaththa.
        Dan meka page eke okkotama wada udin (z-50) freely float wenawa! 
      */}
      <TopBar />
      <Navbar />

      <section id="home" className="relative min-h-screen w-full bg-[#041E15] text-white overflow-hidden flex flex-col justify-between pt-36 pb-12 px-6 md:px-12 rounded-b-[40px] md:rounded-b-[80px] shadow-2xl z-10">
        
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#095235_0%,transparent_60%)] opacity-60 pointer-events-none" />

        {/* Main Hero Content - Perfectly centered */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-grow flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column - Big Text */}
            <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-300 font-medium mb-3"
              >
                Hey, I'm a
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-[70px] font-black tracking-tighter leading-[1.05]"
              >
                Globetrotting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#0BB671]">
                  Storyteller.
                </span>
              </motion.h1>
            </div>

            {/* Center Column - Person's Image */}
            <div className="lg:col-span-4 flex justify-center relative order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative w-[280px] h-[380px] md:w-[340px] md:h-[480px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#041E15] via-transparent to-transparent z-10 rounded-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
                  alt="Gaya Walker Portfolio" 
                  className="w-full h-full object-cover rounded-3xl opacity-90 filter contrast-125 brightness-95 grayscale-[20%] shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Right Column - Small Text */}
            <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-right order-3">
              <motion.h3 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-4 leading-snug tracking-tight"
              >
                I capture stories <br className="hidden lg:block" /> from the edge <br className="hidden lg:block" /> of the world.
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-base text-gray-400 max-w-xs mx-auto lg:ml-auto lg:mr-0 leading-relaxed font-medium"
              >
                Documenting remote cultures, rugged landscapes, and the untamed beauty of our planet through visuals and words.
              </motion.p>
            </div>

          </div>
        </div>

        {/* Footer / Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-emerald-900/50 mt-12"
        >
          <div>
            <span className="text-[#0BB671] text-xs font-bold tracking-widest uppercase"># 01</span>
            <h4 className="text-sm md:text-base font-semibold mt-1">Adventure Photography</h4>
          </div>
          <div>
            <span className="text-[#0BB671] text-xs font-bold tracking-widest uppercase"># 02</span>
            <h4 className="text-sm md:text-base font-semibold mt-1">Travel Blogging</h4>
          </div>
          <div>
            <span className="text-[#0BB671] text-xs font-bold tracking-widest uppercase"># 03</span>
            <h4 className="text-sm md:text-base font-semibold mt-1">Expedition Planning</h4>
          </div>
          <div>
            <span className="text-[#0BB671] text-xs font-bold tracking-widest uppercase"># 04</span>
            <h4 className="text-sm md:text-base font-semibold mt-1">Cinematic Films</h4>
          </div>
        </motion.div>
        
      </section>
    </>
  );
}