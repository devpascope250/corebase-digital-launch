import { Code, Globe, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions built with cutting-edge technologies to streamline your business operations and drive growth.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Responsive, scalable web applications designed to deliver exceptional user experiences across all devices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile apps that engage users and extend your digital reach on iOS and Android.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-smooth border-border bg-card cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
