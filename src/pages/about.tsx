import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CheckCircle2, 
  Users, 
  Target, 
  Award, 
  Heart,
  Globe,
  Clock,
  TrendingUp,
  Shield,
  Lightbulb,
  Zap
} from "lucide-react";
import Footer from "@/components/Footer";

// Team data
const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    expertise: "Full-Stack Development & Architecture",
    experience: "12+ years",
    image: "👩‍💻",
    skills: ["React", "Node.js", "AWS", "System Design"],
    description: "Sarah leads our technical vision and ensures we deliver scalable, maintainable solutions."
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Mobile Developer",
    expertise: "Cross-Platform Mobile Apps",
    experience: "8+ years",
    image: "👨‍💻",
    skills: ["Flutter", "React Native", "iOS", "Android"],
    description: "Marcus specializes in creating seamless mobile experiences across all platforms."
  },
  {
    name: "Emily Watson",
    role: "UX/UI Design Lead",
    expertise: "User Experience & Interface Design",
    experience: "10+ years",
    image: "👩‍🎨",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    description: "Emily crafts intuitive and beautiful interfaces that users love."
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    expertise: "Cloud Infrastructure & Automation",
    experience: "9+ years",
    image: "👨‍🔧",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    description: "David ensures our applications are reliable, scalable, and secure."
  }
];

// Values data
const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends and embrace creative solutions.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We deliver robust, tested, and maintainable code that stands the test of time.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners in their success.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We optimize processes to deliver faster without compromising quality.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in every project we deliver.",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We build solutions that make a real difference for our clients.",
    color: "from-indigo-500 to-blue-500"
  }
];


const technologies = [
  "React", "Node.js", "TypeScript", "Flutter", 
  "Next.js", "PostgreSQL", "AWS", "Docker",
  "Python", "GraphQL", "Kubernetes", "Redis",
  "MongoDB", "React Native", "Tailwind CSS", "TensorFlow"
];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Navbar isTransparent={false} scrollToSection={scrollToSection} />
      
      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About CoreBase
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Building the Foundation for Digital Excellence Since 2015
              </p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                We're a passionate team of developers, designers, and innovators 
                dedicated to transforming your vision into powerful digital solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Story Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2 text-sm">
                    Our Story
                  </Badge>
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                    From Vision to Reality
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Founded in 2015, CoreBase Limited emerged from a simple belief: 
                    technology should empower businesses, not complicate them. What started 
                    as a small team of passionate developers has grown into a full-service 
                    digital agency trusted by startups and enterprises alike.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our journey has been guided by a commitment to quality, innovation, 
                    and meaningful partnerships. We've helped over 150 clients transform 
                    their ideas into successful digital products that drive real business results.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">98%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Team Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">9</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                </div>
              </motion.div>

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-6 border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex space-x-4 mb-6 border-b">
                    {[
                      { id: "mission", label: "Our Mission", icon: Target },
                      { id: "vision", label: "Our Vision", icon: Globe },
                      { id: "approach", label: "Approach", icon: Zap }
                    ].map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 pb-4 px-2 border-b-2 transition-all duration-300 ${
                            activeTab === tab.id
                              ? "border-blue-600 text-blue-600 dark:text-blue-400"
                              : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="font-medium">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-4">
                    {activeTab === "mission" && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                          Our Mission
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          To empower businesses with innovative, scalable, and user-centric 
                          digital solutions that drive growth and create lasting impact. We 
                          believe in building partnerships, not just projects.
                        </p>
                      </div>
                    )}

                    {activeTab === "vision" && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                          Our Vision
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          To be the most trusted technology partner for businesses seeking 
                          to transform their digital presence and unlock new opportunities 
                          through cutting-edge software solutions.
                        </p>
                      </div>
                    )}

                    {activeTab === "approach" && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                          Our Approach
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          We follow an agile, collaborative process that puts your needs first. 
                          From discovery to deployment, we ensure transparency, quality, and 
                          alignment with your business objectives at every step.
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                These principles guide everything we do and define who we are as a team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Passionate experts dedicated to delivering exceptional results for our clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {member.role}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {member.experience} • {member.expertise}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Technologies We Master
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We work with cutting-edge technologies to build modern, scalable solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-gray-800 dark:text-white text-sm">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Let's discuss how our team can help bring your vision to life with our expertise and dedication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Get Started Today
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg"
                >
                  Meet Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default AboutPage;