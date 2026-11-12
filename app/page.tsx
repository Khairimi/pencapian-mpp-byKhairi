import Achievements from "@/components/Achievements";
import FeedbackCTA from "@/components/FeedbackCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Navbar from "@/components/Navbar";
import Statement, { OfficialStatement } from "@/components/Statement";
import Contact from "@/components/Contact";
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
        <OfficialStatement />
        <Gallery images={images} />
        <FeedbackCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
