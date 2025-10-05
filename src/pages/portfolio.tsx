import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Play,
  Eye,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Filter,
  X
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, AI-powered recommendations, and secure payment processing.",
    fullDescription: "Built for a retail client processing 10,000+ monthly orders. Features include personalized shopping experiences, advanced analytics dashboard, and multi-vendor support.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    category: "web",
    industry: "Retail",
    duration: "6 months",
    teamSize: "4 developers",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/corebase/ecommerce-platform",
    image: "🛒",
    results: [
      "40% increase in conversion rate",
      "99.9% uptime reliability",
      "50% faster page loads"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "HIPAA-compliant platform for patient records, appointments, and telemedicine consultations with real-time video capabilities.",
    fullDescription: "Developed for a healthcare network serving 50+ clinics. Includes electronic health records, prescription management, and secure messaging system.",
    tags: ["Next.js", "TypeScript", "AWS", "WebRTC", "HIPAA", "Docker"],
    category: "web",
    industry: "Healthcare",
    duration: "8 months",
    teamSize: "6 developers",
    liveUrl: "https://healthcare-demo.com",
    githubUrl: null,
    image: "🏥",
    results: [
      "30% reduction in admin time",
      "Secure handling of 100k+ patient records",
      "24/7 telemedicine support"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Cross-platform mobile app with biometric authentication, real-time transaction tracking, and AI-powered financial insights.",
    fullDescription: "Built for a regional bank with 500,000+ users. Features include mobile check deposit, bill pay, budgeting tools, and investment tracking.",
    tags: ["Flutter", "Firebase", "REST API", "Biometrics", "Machine Learning"],
    category: "mobile",
    industry: "Finance",
    duration: "5 months",
    teamSize: "3 developers",
    liveUrl: "https://apps.apple.com/banking-app",
    githubUrl: null,
    image: "📱",
    results: [
      "4.8-star app store rating",
      "2M+ transactions processed",
      "60% mobile banking adoption"
    ],
    featured: false
  },
  {
    id: 4,
    title: "Project Management Tool",
    description: "Collaborative workspace for teams with kanban boards, time tracking, automated reporting, and integration capabilities.",
    fullDescription: "SaaS platform used by 10,000+ teams worldwide. Features include real-time collaboration, custom workflows, and 50+ integrations.",
    tags: ["React", "GraphQL", "MongoDB", "WebSockets", "JWT"],
    category: "web",
    industry: "Productivity",
    duration: "7 months",
    teamSize: "5 developers",
    liveUrl: "https://projecttool.com",
    githubUrl: "https://github.com/corebase/project-management",
    image: "📊",
    results: [
      "45% increase in team productivity",
      "95% customer satisfaction",
      "10k+ active teams"
    ],
    featured: true
  },
  {
    id: 5,
    title: "IoT Dashboard",
    description: "Real-time monitoring and control system for smart home and industrial IoT devices with predictive maintenance.",
    fullDescription: "Enterprise IoT platform managing 50,000+ connected devices. Features include real-time analytics, alert systems, and predictive maintenance algorithms.",
    tags: ["Vue.js", "MQTT", "InfluxDB", "Python", "TensorFlow"],
    category: "iot",
    industry: "Manufacturing",
    duration: "9 months",
    teamSize: "4 developers",
    liveUrl: "https://iot-dashboard.com",
    githubUrl: null,
    image: "🔧",
    results: [
      "25% reduction in downtime",
      "Real-time monitoring of 50k+ devices",
      "Predictive maintenance alerts"
    ],
    featured: false
  },
  {
    id: 6,
    title: "Social Learning Platform",
    description: "Interactive educational platform with video courses, AI-powered quizzes, peer-to-peer learning, and progress tracking.",
    fullDescription: "Learning management system serving 100,000+ students. Features include interactive video lessons, AI tutoring, and community features.",
    tags: ["Next.js", "PostgreSQL", "AWS S3", "WebRTC", "AI/ML"],
    category: "web",
    industry: "Education",
    duration: "6 months",
    teamSize: "5 developers",
    liveUrl: "https://learnplatform.com",
    githubUrl: "https://github.com/corebase/learning-platform",
    image: "🎓",
    results: [
      "85% course completion rate",
      "50% faster learning outcomes",
      "100k+ active learners"
    ],
    featured: false
  },
  {
    id: 7,
    title: "Fitness Tracking App",
    description: "AI-powered fitness app with personalized workout plans, nutrition tracking, and social challenges.",
    fullDescription: "Mobile fitness platform with 500,000+ downloads. Uses machine learning to create personalized fitness plans and track progress.",
    tags: ["React Native", "Firebase", "Machine Learning", "HealthKit"],
    category: "mobile",
    industry: "Health & Fitness",
    duration: "4 months",
    teamSize: "3 developers",
    liveUrl: "https://apps.apple.com/fitness-app",
    githubUrl: null,
    image: "💪",
    results: [
      "4.9-star rating",
      "500k+ downloads",
      "30% user retention increase"
    ],
    featured: false
  },
  {
    id: 8,
    title: "Real Estate Platform",
    description: "Property listing platform with virtual tours, AI matching, and secure transaction management.",
    fullDescription: "Complete real estate solution with 50,000+ property listings. Features include 3D virtual tours, AI-powered property matching, and secure document handling.",
    tags: ["React", "Three.js", "Node.js", "MongoDB", "AWS"],
    category: "web",
    industry: "Real Estate",
    duration: "7 months",
    teamSize: "4 developers",
    liveUrl: "https://realestateplatform.com",
    githubUrl: null,
    image: "🏠",
    results: [
      "40% faster property matching",
      "3D virtual tours for all listings",
      "Secure transaction processing"
    ],
    featured: false
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: Globe, count: projects.length },
  { id: "web", label: "Web Applications", icon: Code, count: projects.filter(p => p.category === "web").length },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone, count: projects.filter(p => p.category === "mobile").length },
  { id: "iot", label: "IoT Solutions", icon: Cloud, count: projects.filter(p => p.category === "iot").length },
];

const industries = ["All", "Retail", "Healthcare", "Finance", "Productivity", "Manufacturing", "Education", "Health & Fitness", "Real Estate"];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    const industryMatch = selectedIndustry === "All" || project.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Navbar isTransparent={false} scrollToSection={scrollToSection} />
      
      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Transforming Ideas into Exceptional Digital Experiences
              </p>
              <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                Explore our curated collection of successful projects across various industries, 
                showcasing our expertise in web development, mobile apps, and innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-4 py-2 text-sm mb-4">
                Featured Work
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Spotlight Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Some of our most impactful and innovative solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                  isInView={isInView}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Filters */}
        <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800/50 border-y">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between max-w-6xl mx-auto">
              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="h-5 w-5 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-sm"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {category.label}
                        <span className="bg-black/10 dark:bg-white/10 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Industry Filter */}
              <div className="flex items-center gap-4">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>

                {/* View Toggle */}
                <div className="flex bg-white dark:bg-gray-700 rounded-lg p-1 shadow-sm">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "grid" 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("masonry")}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === "masonry" 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    Masonry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              layout
              className={`grid ${
                viewMode === "grid" 
                  ? "md:grid-cols-2 lg:grid-cols-3 gap-8" 
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]"
              } max-w-7xl mx-auto`}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                  viewMode={viewMode}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters to see more projects.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  View Case Studies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const FeaturedProjectCard = ({ project, index, isInView, onViewDetails }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group cursor-pointer"
      onClick={onViewDetails}
    >
      <Card className="relative overflow-hidden border-0 shadow-xl h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        
        {/* Content */}
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{project.image}</div>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Featured
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
              <Badge 
                key={tagIndex} 
                variant="secondary"
                className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {project.industry} • {project.duration}
            </span>
            <Button 
              size="sm" 
              variant="ghost" 
              className="group-hover:bg-blue-600 group-hover:text-white transition-all"
            >
              View Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Card>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, viewMode, onViewDetails }: any) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group cursor-pointer ${
        viewMode === "masonry" && index % 4 === 0 ? "lg:row-span-2" : ""
      }`}
      onClick={onViewDetails}
    >
      <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="text-3xl">{project.image}</div>
            {project.featured && (
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 text-xs">
                Featured
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
              <Badge 
                key={tagIndex} 
                variant="secondary"
                className="text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{project.industry}</span>
            <span>{project.duration}</span>
          </div>
        </CardContent>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800">
            <Eye className="h-4 w-4 mr-2" />
            View Project
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{project.image}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.industry} • {project.duration} • {project.teamSize}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Key Results
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, index: number) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;