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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Approach />
      <AboutMe />
      <VideoGrid />
      <YouTubeSection />
      <Services />
      <Pricing />
      <TravelGallery />
      <AudienceReach />
      <Contact />
    </main>
  );
}