import teamImage from "@/assets/team-illustration.jpg";
import { CheckCircle2 } from "lucide-react";

const technologies = [
  "React", "Node.js", "TypeScript", "Flutter", 
  "Next.js", "PostgreSQL", "AWS", "Docker"
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <img 
              src={teamImage} 
              alt="CoreBase Team" 
              className="rounded-2xl shadow-card w-full h-auto"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About CoreBase Limited
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At CoreBase Limited, we're passionate about transforming innovative ideas 
              into powerful digital solutions. Our team of expert developers brings years 
              of experience in building scalable, secure, and user-centric applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of technology to drive business growth and create 
              meaningful connections. Our mission is to be your trusted partner in 
              navigating the digital landscape.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Technologies We Master
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
