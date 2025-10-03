import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import InteractiveDemo from "@/components/InteractiveDemo";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <About />
      <TechStack />
      <InteractiveDemo />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
