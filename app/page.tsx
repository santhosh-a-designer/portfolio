import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Mentorship from "@/components/Mentorship";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative min-h-screen blueprint-page">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Mentorship />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
