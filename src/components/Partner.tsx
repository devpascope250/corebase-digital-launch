import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Award, ThumbsUp, Shield } from "lucide-react";

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const partners = [
    {
      name: "Microsoft",
      logo: "🚀",
      description: "Global Technology Partner",
      projects: 45,
      since: 2018,
      tier: "Platinum"
    },
    {
      name: "Google Cloud",
      logo: "☁️",
      description: "Cloud Infrastructure Partner",
      projects: 32,
      since: 2019,
      tier: "Gold"
    },
    {
      name: "Amazon Web Services",
      logo: "📦",
      description: "AWS Advanced Partner",
      projects: 28,
      since: 2020,
      tier: "Gold"
    },
    {
      name: "IBM",
      logo: "🔷",
      description: "Enterprise Solutions Partner",
      projects: 23,
      since: 2017,
      tier: "Platinum"
    },
    {
      name: "Salesforce",
      logo: "📊",
      description: "CRM Implementation Partner",
      projects: 19,
      since: 2021,
      tier: "Silver"
    },
    {
      name: "Adobe",
      logo: "🎨",
      description: "Creative Cloud Partner",
      projects: 15,
      since: 2019,
      tier: "Silver"
    },
    {
      name: "Shopify",
      logo: "🛒",
      description: "E-commerce Solutions Partner",
      projects: 27,
      since: 2020,
      tier: "Gold"
    },
    {
      name: "Slack",
      logo: "💬",
      description: "Workflow Integration Partner",
      projects: 12,
      since: 2022,
      tier: "Silver"
    }
  ];

  const certifications = [
    { icon: Award, label: "ISO 9001 Certified", value: "Quality Management" },
    { icon: Shield, label: "GDPR Compliant", value: "Data Protection" },
    { icon: Star, label: "5-Star Rating", value: "Client Satisfaction" },
    { icon: ThumbsUp, label: "99.9% Uptime", value: "Service Reliability" }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're proud to collaborate with world-class companies to deliver exceptional digital solutions
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              index={index}
              isVisible={isInView}
            />
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Certified quality and proven track record
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.label}
                cert={cert}
                index={index}
                isVisible={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied partners and experience the CoreBase difference
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Start Partnership
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PartnerCard = ({ partner, index, isVisible }: { partner: any; index: number; isVisible: boolean }) => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum": return "from-gray-800 to-gray-600";
      case "Gold": return "from-amber-500 to-yellow-500";
      case "Silver": return "from-gray-400 to-gray-300";
      default: return "from-blue-500 to-cyan-500";
    }
  };

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
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
        {/* Partner Logo and Tier */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{partner.logo}</div>
          <div className={`text-xs font-semibold bg-gradient-to-r ${getTierColor(partner.tier)} bg-clip-text text-transparent px-2 py-1 border rounded-full`}>
            {partner.tier}
          </div>
        </div>

        {/* Partner Name and Description */}
        <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-2">
          {partner.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {partner.description}
        </p>

        {/* Stats */}
        <div className="space-y-2 border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Projects</span>
            <span className="font-semibold text-gray-800 dark:text-white">{partner.projects}+</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Partner Since</span>
            <span className="font-semibold text-gray-800 dark:text-white">{partner.since}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index, isVisible }: { cert: any; index: number; isVisible: boolean }) => {
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.8 + index * 0.1
      }}
      className="text-center p-4"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
        {cert.label}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {cert.value}
      </p>
    </motion.div>
  );
};

export default Partners;