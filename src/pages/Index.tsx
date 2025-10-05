// import Hero from "@/components/Hero";
// import Services from "@/components/Services";
// import Stats from "@/components/Stats";
// import About from "@/components/About";
// import TechStack from "@/components/TechStack";
// import InteractiveDemo from "@/components/InteractiveDemo";
// import Portfolio from "@/components/Portfolio";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Partners from "@/components/Partner";

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Hero />
//       <Services />
//       <Stats />
//       <Partners/>
//       <About />
//       <TechStack />
//       <InteractiveDemo />
//       <Portfolio />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Index;





import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Partners from "@/components/Partner";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar isTransparent={true} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Stats />
      <Partners/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;