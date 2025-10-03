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
              className="group hover:shadow-hover transition-smooth border-border bg-card cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-heading group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs"
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
