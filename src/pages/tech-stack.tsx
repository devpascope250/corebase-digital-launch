import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Shield,
  Zap,
  Globe,
  Server,
  Terminal
} from "lucide-react";
import InteractiveDemo from "@/components/InteractiveDemo";

const techCategories = [
  {
    category: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    description: "Modern, responsive user interfaces",
    technologies: [
      { name: "React", level: 95, experience: "5+ years", projects: 120 },
      { name: "TypeScript", level: 90, experience: "4+ years", projects: 80 },
      { name: "Next.js", level: 88, experience: "3+ years", projects: 45 },
      { name: "Tailwind CSS", level: 92, experience: "3+ years", projects: 90 },
      { name: "Vue.js", level: 85, experience: "3+ years", projects: 35 },
      { name: "Angular", level: 80, experience: "2+ years", projects: 25 },
    ],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    description: "Scalable server-side solutions",
    technologies: [
      { name: "Node.js", level: 93, experience: "5+ years", projects: 100 },
      { name: "PostgreSQL", level: 87, experience: "4+ years", projects: 65 },
      { name: "MongoDB", level: 85, experience: "3+ years", projects: 40 },
      { name: "GraphQL", level: 85, experience: "3+ years", projects: 35 },
      { name: "Redis", level: 80, experience: "3+ years", projects: 30 },
      { name: "Python/Django", level: 82, experience: "3+ years", projects: 28 },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    description: "Cross-platform mobile experiences",
    technologies: [
      { name: "Flutter", level: 88, experience: "3+ years", projects: 25 },
      { name: "React Native", level: 85, experience: "3+ years", projects: 30 },
      { name: "iOS/Swift", level: 82, experience: "2+ years", projects: 18 },
      { name: "Android/Kotlin", level: 80, experience: "2+ years", projects: 15 },
      { name: "Ionic", level: 75, experience: "2+ years", projects: 12 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    description: "Reliable infrastructure and deployment",
    technologies: [
      { name: "Docker", level: 90, experience: "4+ years", projects: 70 },
      { name: "AWS", level: 86, experience: "3+ years", projects: 45 },
      { name: "Kubernetes", level: 83, experience: "3+ years", projects: 25 },
      { name: "CI/CD", level: 88, experience: "4+ years", projects: 60 },
      { name: "Azure", level: 80, experience: "2+ years", projects: 20 },
      { name: "Google Cloud", level: 78, experience: "2+ years", projects: 18 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    description: "Intelligent solutions and automation",
    technologies: [
      { name: "Python", level: 90, experience: "4+ years", projects: 35 },
      { name: "TensorFlow", level: 82, experience: "3+ years", projects: 18 },
      { name: "PyTorch", level: 80, experience: "2+ years", projects: 15 },
      { name: "OpenAI API", level: 85, experience: "2+ years", projects: 22 },
      { name: "Computer Vision", level: 78, experience: "2+ years", projects: 12 },
    ],
  },
  {
    category: "Security & Testing",
    icon: Shield,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    description: "Secure and robust applications",
    technologies: [
      { name: "Jest", level: 88, experience: "3+ years", projects: 50 },
      { name: "Cypress", level: 85, experience: "2+ years", projects: 25 },
      { name: "OWASP", level: 82, experience: "3+ years", projects: 40 },
      { name: "SSL/TLS", level: 87, experience: "4+ years", projects: 65 },
      { name: "Penetration Testing", level: 80, experience: "2+ years", projects: 15 },
    ],
  },
];

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Google Cloud Professional Developer", issuer: "Google Cloud" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft" },
  { name: "React Certified Developer", issuer: "Meta" },
  { name: "Kubernetes Application Developer", issuer: "Cloud Native Computing Foundation" },
];

const TechStackPage = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const categories = ["All", ...techCategories.map(cat => cat.category)];

  const filteredCategories = activeCategory === "All" 
    ? techCategories 
    : techCategories.filter(cat => cat.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Navbar isTransparent={false} scrollToSection={scrollToSection} />
      
      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Technology Stack
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Cutting-edge technologies powering innovative digital solutions
              </p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                We leverage the latest tools and frameworks to build scalable, 
                maintainable, and high-performance applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4 bg-white dark:bg-gray-800 border-b">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-blue-600 text-white shadow-lg" 
                      : "hover:bg-blue-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredCategories.map((category, catIndex) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  >
                    <Card className={`p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-sm h-full ${category.bgColor}`}>
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {category.category}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        {category.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredTech(`${catIndex}-${techIndex}`)}
                            onMouseLeave={() => setHoveredTech(null)}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div>
                                <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                                  {tech.name}
                                </span>
                                <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  <span>{tech.experience}</span>
                                  <span>•</span>
                                  <span>{tech.projects} projects</span>
                                </div>
                              </div>
                              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                {tech.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.level}%` }}
                                transition={{ duration: 1.5, delay: techIndex * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Certifications & Standards
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our team maintains industry-leading certifications to ensure 
                we deliver solutions that meet the highest standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss how our technology expertise can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Start Your Project
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg"
                >
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <InteractiveDemo/>
      </main>
    </div>
  );
};

export default TechStackPage;