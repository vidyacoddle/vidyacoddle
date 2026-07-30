import { cn } from "@/lib/utils";
import { ShieldCheck, Cpu, Code2, Globe, Database, Network } from "lucide-react";
import * as React from "react";
import { motion } from "framer-motion";

export function CoreArchitectureFeatures() {
  const features = [
    {
      title: "Architecture Certification",
      description: "Industry leading architecture certification ensuring robust performance and ultimate security at massive scale.",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
      title: "Asymmetric Compliance",
      description: "Industry leading asymmetric compliance ensuring robust performance and ultimate security at massive scale.",
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      title: "Protocol Authorization",
      description: "Industry leading protocol authorization ensuring robust performance and ultimate security at massive scale.",
      icon: <Code2 className="h-8 w-8" />,
    },
    {
      title: "Operational Compliance",
      description: "Industry leading operational compliance ensuring robust performance and ultimate security at massive scale.",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Fintech Settlement Layer",
      description: "Industry leading fintech settlement layer ensuring robust performance and ultimate security at massive scale.",
      icon: <Database className="h-8 w-8" />,
    },
    {
      title: "Data Infrastructure Hub",
      description: "Industry leading data infrastructure hub ensuring robust performance and ultimate security at massive scale.",
      icon: <Network className="h-8 w-8" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-zinc-200",
        (index === 0 || index === 3) && "lg:border-l border-zinc-200",
        index < 3 && "lg:border-b border-zinc-200"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-xl font-bold mb-4 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground font-display">
          {title}
        </span>
      </div>
      <p className="text-base text-[#6B6459] max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
