import Achievements from "@/components/Achievements";
import FeedbackCTA from "@/components/FeedbackCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Navbar from "@/components/Navbar";
import Statement from "@/components/Statement";
import Contact from "@/components/Contact";
import { getGalleryImages } from "@/lib/gallery";
import { getLogoSrc } from "@/lib/logo";

export default function Home() {
  // Dibaca daripada public/gallery semasa build
  const images = getGalleryImages();
  const logoSrc = getLogoSrc();

  return (
    <>
      <Navbar logoSrc={logoSrc} />
      <main>
        <Hero logoSrc={logoSrc} />
        <Statement />
        <Achievements />
        <Legacy />
        <Gallery images={images} />
        <FeedbackCTA />
        <Contact />
      </main>
      <Footer logoSrc={logoSrc} />
    </>
  );
}
