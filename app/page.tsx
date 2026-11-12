import Achievements from "@/components/Achievements";
import FeedbackCTA from "@/components/FeedbackCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Navbar from "@/components/Navbar";
import Statement from "@/components/Statement";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  // Dibaca daripada public/gallery semasa build
  const images = getGalleryImages();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Achievements />
        <Legacy />
        <Gallery images={images} />
        <FeedbackCTA />
      </main>
      <Footer />
    </>
  );
}
