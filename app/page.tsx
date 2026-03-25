import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";
import CursorGlow from "@/components/ui/CursorGlow";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Marquee />
        <CaseStudies />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
