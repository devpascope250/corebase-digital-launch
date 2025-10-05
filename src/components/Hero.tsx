// import { Button } from "@/components/ui/button";
// import { ArrowRight, Menu, X } from "lucide-react";
// import heroImage from "@/assets/hero-bg.jpg";
// import { useState, useEffect } from "react";

// const Hero = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { label: "Services", id: "services" },
//     { label: "About", id: "about" },
//     { label: "Tech Stack", id: "tech-stack" },
//     { label: "Portfolio", id: "portfolio" },
//     { label: "Contact", id: "contact" },
//   ];

//   return (
//     <section className="relative min-h-screen flex flex-col overflow-hidden">
//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur-md shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <span
//                 className={`text-2xl font-bold transition-colors duration-300 ${
//                   isScrolled ? "text-primary" : "text-white"
//                 }`}
//               >
//                 CoreBase
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`font-medium transition-all duration-300 hover:scale-105 ${
//                     isScrolled
//                       ? "text-gray-700 hover:text-primary"
//                       : "text-white/90 hover:text-white"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <Button
//                 onClick={() => scrollToSection("contact")}
//                 className={`${
//                   isScrolled
//                     ? "bg-primary text-white hover:bg-primary/90"
//                     : "bg-white text-primary hover:bg-white/90"
//                 } transition-all duration-300`}
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className={`p-2 rounded-md transition-colors duration-300 ${
//                   isScrolled
//                     ? "text-gray-700 hover:bg-gray-100"
//                     : "text-white hover:bg-white/10"
//                 }`}
//               >
//                 {isMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div
//               className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
//                 isScrolled
//                   ? "bg-white/95 backdrop-blur-md shadow-lg"
//                   : "bg-primary/95 backdrop-blur-md"
//               }`}
//             >
//               <div className="px-4 py-6 space-y-4">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => scrollToSection(item.id)}
//                     className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
//                       isScrolled
//                         ? "text-gray-700 hover:text-primary hover:bg-gray-50"
//                         : "text-white hover:bg-white/10"
//                     }`}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//                 <Button
//                   onClick={() => scrollToSection("contact")}
//                   className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
//                 >
//                   Get Started
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Content */}
//       <div className="flex-1 flex items-center justify-center relative">
//         {/* Background Image with Overlay */}
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `url(${heroImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />
//         </div>

//         {/* Content */}
//         <div className="container mx-auto px-4 relative z-10 text-center mt-16 md:mt-0">
//           <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
//               CoreBase Limited
//             </h1>
//             <p className="text-xl md:text-2xl text-white/90 font-light">
//               Building the Core of Your Digital Future.
//             </p>
//             <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
//               Expert software development, web applications, and mobile solutions 
//               tailored to transform your business vision into reality.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
//               <Button 
//                 size="lg" 
//                 onClick={() => scrollToSection('contact')}
//                 className="bg-white text-primary hover:bg-white/90 hover:scale-105 font-semibold px-8 py-6 text-lg group shadow-lg"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
//               </Button>
//               <Button 
//                 size="lg"
//                 onClick={() => scrollToSection('contact')}
//                 className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 font-semibold px-8 py-6 text-lg shadow-lg transition-all"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;










import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  scrollToSection?: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const handleScrollToSection = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      // Default behavior
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            CoreBase Limited
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Building the Core of Your Digital Future.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Expert software development, web applications, and mobile solutions 
            tailored to transform your business vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={() => handleScrollToSection('contact')}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 font-semibold px-8 py-6 text-lg group shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg"
              onClick={() => handleScrollToSection('contact')}
              className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 font-semibold px-8 py-6 text-lg shadow-lg transition-all"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;