import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant platform for patient records, appointments, and telemedicine consultations.",
    tags: ["Next.js", "TypeScript", "AWS", "WebRTC"],
  },
  {
    title: "Mobile Banking App",
    description: "Cross-platform mobile app with biometric authentication and real-time transaction tracking.",
    tags: ["Flutter", "Firebase", "REST API"],
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace for teams with kanban boards, time tracking, and reporting features.",
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring and control system for smart home and industrial IoT devices.",
    tags: ["Vue.js", "MQTT", "InfluxDB"],
  },
  {
    title: "Social Learning Platform",
    description: "Interactive educational platform with video courses, quizzes, and peer-to-peer learning.",
    tags: ["Next.js", "PostgreSQL", "AWS S3"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing our expertise across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover hover:scale-105 transition-all duration-300 border-border bg-card cursor-pointer animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-all duration-300 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 rounded-bl-full" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-heading group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
