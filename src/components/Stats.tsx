// import { useEffect, useState, useRef } from "react";
// import { Users, Code, Award, Rocket } from "lucide-react";

// const stats = [
//   { icon: Users, value: 150, suffix: "+", label: "Happy Clients" },
//   { icon: Code, value: 300, suffix: "+", label: "Projects Delivered" },
//   { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
//   { icon: Rocket, value: 98, suffix: "%", label: "Client Satisfaction" },
// ];

// const Stats = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-20 px-4 bg-foreground relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
//       </div>

//       {/* Gradient overlay for better contrast */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

//       <div className="container mx-auto relative z-10">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           {stats.map((stat, index) => (
//             <StatCard
//               key={index}
//               {...stat}
//               isVisible={isVisible}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const StatCard = ({
//   icon: Icon,
//   value,
//   suffix,
//   label,
//   isVisible,
//   delay,
// }: {
//   icon: any;
//   value: number;
//   suffix: string;
//   label: string;
//   isVisible: boolean;
//   delay: number;
// }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000;
//     const steps = 60;
//     const increment = value / steps;
//     let current = 0;

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= value) {
//         setCount(value);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, duration / steps);

//     return () => clearInterval(timer);
//   }, [isVisible, value]);

//   return (
//     <div
//       className="text-center animate-fade-in bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:bg-card/70 transition-all hover:scale-105 shadow-card border border-border/50"
//       style={{ animationDelay: `${delay}s` }}
//     >
//       <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero shadow-lg">
//         <Icon className="h-8 w-8 text-white" />
//       </div>
//       <div className="text-5xl font-bold font-heading mb-2 text-foreground">
//         {count}
//         {suffix}
//       </div>
//       <div className="text-lg text-muted-foreground font-medium">{label}</div>
//     </div>
//   );
// };

// export default Stats;




import { useEffect, useState, useRef } from "react";
import { Users, Code, Award, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";

const stats = [
  { 
    icon: Users, 
    value: 150, 
    suffix: "+", 
    label: "Happy Clients",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
  },
  { 
    icon: Code, 
    value: 300, 
    suffix: "+", 
    label: "Projects Delivered",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
  },
  { 
    icon: Award, 
    value: 15, 
    suffix: "+", 
    label: "Years Experience",
    color: "from-amber-500 to-orange-500",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
  },
  { 
    icon: Rocket, 
    value: 98, 
    suffix: "%", 
    label: "Client Satisfaction",
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
  },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering excellence and driving success through innovative solutions
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="text-amber-500">⭐</div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Trusted by industry leaders worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  gradient,
  index,
  isVisible,
}: {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  color: string;
  gradient: string;
  index: number;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
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
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      {/* Gradient border effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300`} />
      
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Icon with gradient background */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-10 w-10 text-white" />
        </div>

        {/* Animated counter */}
        <div className="mb-2">
          <span className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {count}
          </span>
          <span className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {suffix}
          </span>
        </div>

        {/* Label */}
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </div>

        {/* Progress bar for satisfaction */}
        {label.includes("Satisfaction") && (
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${value}%` } : { width: 0 }}
              transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
              className={`h-2 rounded-full bg-gradient-to-r ${color}`}
            />
          </div>
        )}

        {/* Subtle background gradient */}
        <div className={`absolute inset-0 rounded-xl ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
      </div>
    </motion.div>
  );
};

export default Stats;