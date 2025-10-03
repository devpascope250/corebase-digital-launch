import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-heading mb-4">CoreBase Limited</h3>
            <p className="text-background/80 mb-4">
              Building the core of your digital future with innovative software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold font-heading mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} CoreBase Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
