import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isTransparent?: boolean;
  scrollToSection?: (id: string) => void;
}

const Navbar = ({ isTransparent = false, scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const handleScrollToSection = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      // Default behavior for pages without custom scroll function
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isTransparent) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparent]);

  const navItems = [
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            {/* <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              CoreBase
            </span> */}

            <img
    src={isScrolled ? "/coreBase-t.png"  : "/corebase-w-version.png" } // ← change to your actual file path
    alt="CoreBase Limited Logo"
    className={`transition-all duration-300 ${
      isScrolled ? 'brightness-100' : 'brightness-125'
    } h-12 md:h-14 w-auto object-contain`}
  />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                     if(item.label === "About"){
                      navigate('/about')
                    }else if(item.label === "Portfolio"){
                      navigate('/portfolio')
                    }else if(item.label === "Tech Stack"){
                      navigate('/tech-stack')
                    }
                    else{
                        handleScrollToSection(item.id)
                    }
                    }}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleScrollToSection("contact")}
              className={`${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              } transition-all duration-300`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg"
                : "bg-primary/95 backdrop-blur-md"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if(item.label === "About"){
                      navigate('/about')
                    }else if(item.label === "Portfolio"){
                      navigate('/portfolio')
                    }else if(item.label === "Tech Stack"){
                      navigate('/tech-stack')
                    }
                    else{
                        handleScrollToSection(item.id)
                    }
                    
                }}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleScrollToSection("contact")}
                className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;