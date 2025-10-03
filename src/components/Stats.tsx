import { useEffect, useState, useRef } from "react";
import { Users, Code, Award, Rocket } from "lucide-react";

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients" },
  { icon: Code, value: 300, suffix: "+", label: "Projects Delivered" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Rocket, value: 98, suffix: "%", label: "Client Satisfaction" },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon: Icon,
  value,
  suffix,
  label,
  isVisible,
  delay,
}: {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      className="text-center animate-fade-in bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:bg-card/70 transition-all hover:scale-105 shadow-card border border-border/50"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero shadow-lg">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="text-5xl font-bold font-heading mb-2 text-foreground">
        {count}
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export default Stats;
