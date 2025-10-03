import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Palette, Zap, CheckCircle2 } from "lucide-react";

const codeExamples = {
  react: `function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="app">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
  typescript: `interface User {
  id: number;
  name: string;
  email: string;
}

const getUser = async (id: number): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};`,
  api: `app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
};

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("react");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Clean, Efficient Code
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We write production-ready code that's maintainable, scalable, and follows industry best practices.
            </p>

            <div className="space-y-4">
              {[
                { icon: Code2, text: "Modern Frameworks & Libraries" },
                { icon: Palette, text: "Beautiful, Responsive Design" },
                { icon: Zap, text: "Optimized Performance" },
                { icon: CheckCircle2, text: "Thoroughly Tested" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Code Demo */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={handleTabChange}>
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                  <TabsTrigger value="api">API</TabsTrigger>
                </TabsList>

                {Object.entries(codeExamples).map(([key, code]) => (
                  <TabsContent key={key} value={key}>
                    <div
                      className={`bg-foreground/5 rounded-lg p-4 font-mono text-sm overflow-x-auto transition-smooth ${
                        isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                      }`}
                    >
                      <pre className="text-foreground">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-4 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => setIsAnimating(false), 300);
                  }}
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Copy Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => setIsAnimating(false), 300);
                  }}
                >
                  <Code2 className="h-4 w-4 mr-2" />
                  Run Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
