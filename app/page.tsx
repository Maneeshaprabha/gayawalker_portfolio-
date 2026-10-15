"use client"; // Framer motion use karana nisa meka aniwaryen danna oni
import { motion } from "framer-motion";
import TopBar from './../src/components/TopBar';
import Navbar from './../src/components/Navbar';
import Hero from './../src/components/Hero';
import Gallery from './../src/components/Gallery';
import Approach from './../src/components/Approach';
import VideoGrid from './../src/components/VideoGrid';
import YouTubeSection from './../src/components/YouTubeSection';
import Services from './../src/components/Services';
import Pricing from './../src/components/Pricing';
import MarqueeText from './../src/components/MarqueeText';
import TravelGallery from './../src/components/TravelGallery';
import AudienceReach from './../src/components/AudienceReach';
import Contact from './../src/components/Contact';
import AboutMe from './../src/components/AboutMe';

// Scroll karaddi lassanata yatin uda ena animation wrapper eka
const RevealSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Screen ekata 100px awama thamai animation eka wada karanne
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    // bg-[#111111] dala thiyenawa sections athara his ida kalu paatin penna
    <main className="min-h-screen bg-[#111111] overflow-hidden">
      
      {/* Floating UI Elements */}
      <TopBar />
      <Navbar />
      
      {/* Hero eka load weddima penna oni nisa eka wrapper eka nathuwa danawa */}
      <Hero /> 

      {/* Anith okkoma sections RevealSection eken cover karanawa */}
      <RevealSection>
        <Approach />
      </RevealSection>

      <RevealSection>
        <AboutMe />
      </RevealSection>

      <RevealSection>
        <VideoGrid />
      </RevealSection>

      <RevealSection>
        <YouTubeSection />
      </RevealSection>

      <RevealSection>
        <Services />
      </RevealSection>

      <RevealSection >
        <Pricing />
      </RevealSection>

      <RevealSection>
        <TravelGallery />
      </RevealSection>

      <RevealSection>
        <AudienceReach />
      </RevealSection>

      <RevealSection>
        <Contact />
      </RevealSection>

    </main>
  );
}