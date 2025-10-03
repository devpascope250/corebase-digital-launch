import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="animate-fade-in shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Send us a message</CardTitle>
              <CardDescription>Fill out the form and we'll be in touch soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@corebase.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      info@corebase.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-smooth">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      123 Tech Street<br />
                      Innovation District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
