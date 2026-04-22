import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import ProjectSnippets from "@/components/ProjectSnippets";
import Skills from "@/components/Skills";
import Mentorship from "@/components/Mentorship";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import HomeHashScroll from "@/components/HomeHashScroll";

export default function Home() {
  return (
    <LenisProvider>
    <main className="relative min-h-screen blueprint-page">
      <HomeHashScroll />
      <Navigation />
      <Hero />
      <About />
      <Works />
      <ProjectSnippets />
      <Skills />
      <Mentorship />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    </LenisProvider>
  );
}
