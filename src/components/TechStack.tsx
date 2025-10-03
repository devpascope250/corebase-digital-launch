import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    category: "Frontend",
    color: "bg-primary/10 text-primary",
    technologies: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    color: "bg-secondary/10 text-secondary",
    technologies: [
      { name: "Node.js", level: 93 },
      { name: "PostgreSQL", level: 87 },
      { name: "GraphQL", level: 85 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    category: "Mobile",
    color: "bg-accent/10 text-accent",
    technologies: [
      { name: "Flutter", level: 88 },
      { name: "React Native", level: 85 },
      { name: "iOS/Swift", level: 82 },
      { name: "Android/Kotlin", level: 80 },
    ],
  },
  {
    category: "DevOps",
    color: "bg-muted-foreground/10 text-muted-foreground",
    technologies: [
      { name: "Docker", level: 90 },
      { name: "AWS", level: 86 },
      { name: "Kubernetes", level: 83 },
      { name: "CI/CD", level: 88 },
    ],
  },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mastering cutting-edge technologies to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className="p-6 hover:shadow-hover transition-smooth bg-card border-border animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <Badge className={`${category.color} mb-4 text-sm font-semibold`}>
                {category.category}
              </Badge>
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredTech(`${catIndex}-${techIndex}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-smooth">
                        {tech.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-hero transition-all duration-1000 ease-out rounded-full"
                        style={{
                          width:
                            hoveredTech === `${catIndex}-${techIndex}`
                              ? `${tech.level}%`
                              : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
