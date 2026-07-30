"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LiquidGlass3D } from "@/components/ui/LiquidGlass3D";
import { CoreArchitectureFeatures } from "@/components/features-section-demo-2";
import { Button } from "@/components/ui/Button";

export default function LandingPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center border-b border-border pt-16">
        <LiquidGlass3D />
        
        <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid opacity-50" />
        
        <motion.div 
          className="container mx-auto px-4 text-center z-10 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono tracking-tight uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The Next Evolution of IT Architecture
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-display font-medium mb-8 leading-[1.05] tracking-tight text-foreground"
          >
            Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF8A65]">Unfair Advantages</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-[#6B6459] max-w-2xl mx-auto font-sans mb-12 leading-relaxed"
          >
            We don't build templated SaaS. We architect robust, highly scalable digital infrastructure for government ecosystems and ambitious startups.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2 rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform">
                Explore Our Blueprint
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" tabIndex={-1}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-2xl hover:bg-muted/50">
                Book a Consultation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Features Section */}
      <section className="py-24 md:py-32 bg-card/30 relative">
        <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              Core Systems
            </h2>
            <p className="text-lg text-[#6B6459] font-sans">
              Our solutions are built on a foundation of uncompromised security, seamless integration, and infinite scale.
            </p>
          </motion.div>
        </div>
        
        <CoreArchitectureFeatures />
      </section>

      {/* 3. Ecosystem Marquee */}
      <section className="py-12 md:py-16 border-y border-border overflow-hidden bg-muted/30 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-[200%] animate-marquee">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-32 items-center justify-around w-full whitespace-nowrap px-8 opacity-60 font-mono text-xs md:text-sm uppercase tracking-widest text-[#6B6459]">
              <span>Government Integrations</span> 
              <span className="w-2 h-2 rounded-full bg-primary/50" />
              <span>ONDC Network Nodes</span> 
              <span className="w-2 h-2 rounded-full bg-primary/50" />
              <span>VittaPe FinTech</span> 
              <span className="w-2 h-2 rounded-full bg-primary/50" />
              <span>Ayovita Platforms</span>
              <span className="w-2 h-2 rounded-full bg-primary/50" />
              <span>Zero-Downtime ERP</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Built for Scale (Bento/Metrics) */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              Engineered for Scale
            </h2>
            <p className="text-lg text-[#6B6459] font-sans max-w-2xl">
              We bypass legacy bottlenecks. Vidya infrastructure powers millions of transactions with deterministic latency and military-grade isolation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1 md:col-span-2 bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-10">Throughput Capacity</h3>
              <div className="flex items-baseline gap-2 mb-2 relative z-10">
                <span className="text-6xl md:text-8xl font-display font-medium text-foreground">50M+</span>
                <span className="text-xl text-[#6B6459]">/ day</span>
              </div>
              <p className="text-lg text-[#6B6459] relative z-10">Optimized node queries resolved in single-digit milliseconds.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-3xl p-8 md:p-12 flex flex-col justify-between"
            >
              <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-10">Uptime SLA</h3>
              <div>
                <div className="text-5xl md:text-7xl font-display font-medium text-foreground mb-2">99.99%</div>
                <p className="text-base text-[#6B6459]">Fault-tolerant deployment clusters.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-3xl p-8 md:p-12"
            >
              <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-10">Security</h3>
              <div className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Zero-Trust</div>
              <p className="text-base text-[#6B6459]">End-to-end asymmetric encryption across all transit layers.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-1 md:col-span-2 bg-card border border-border rounded-3xl p-8 md:p-12"
            >
               <h3 className="font-mono text-primary text-sm uppercase tracking-widest mb-10">Compliance</h3>
               <div className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Automated Regulatory Adherence</div>
               <p className="text-base text-[#6B6459]">Pre-configured mapping for ONDC, Indian Data Protection frameworks, and global banking protocols.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Domains / Industries */}
      <section className="py-24 md:py-32 bg-card relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
                Industries We Transform
              </h2>
              <p className="text-lg text-[#6B6459] font-sans max-w-xl">
                We engineer mission-critical systems for sectors where failure is not an option.
              </p>
            </div>
            <Link href="/about" className="hidden md:inline-flex text-primary font-mono text-sm uppercase tracking-widest hover:underline underline-offset-8 decoration-primary/50">
              View Case Studies &rarr;
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Government & Public Sector",
                desc: "Tender management, public distribution systems, and massive-scale citizen data portals.",
                highlight: "ONDC & e-Tender",
              },
              {
                title: "Financial Technology",
                desc: "High-frequency settlement engines, decentralized ledgers, and secure payment gateways.",
                highlight: "VittaPe Solutions",
              },
              {
                title: "Enterprise ERP Solutions",
                desc: "Custom resource planning that natively integrates with your bespoke operational workflows.",
                highlight: "Vidya ERP Core",
              }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-background border border-border rounded-3xl p-8 md:p-10 overflow-hidden hover:border-primary/40 transition-colors duration-500"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="w-12 h-12 text-primary -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="mt-16 md:mt-32">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest rounded-full mb-6">
                    {industry.highlight}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-foreground mb-4">{industry.title}</h3>
                  <p className="text-base text-[#6B6459] leading-relaxed">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Execution Process */}
      <section className="py-24 md:py-32 bg-card/30 relative border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
              The Vidya Methodology
            </h2>
            <p className="text-lg text-[#6B6459] font-sans max-w-2xl mx-auto">
              We do not believe in fragmented outsourcing. We act as your elite internal engineering unit.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-24">
            {[
              {
                step: "01",
                title: "Architectural Blueprinting",
                desc: "We analyze your operational bottlenecks and design a scalable, serverless, or highly concurrent architecture tailored to your projected 5-year growth.",
              },
              {
                step: "02",
                title: "Asymmetric Development",
                desc: "Our isolated pods build microservices in parallel, utilizing Rust for core financial layers and Next.js/Turbopack for blazingly fast client interfaces.",
              },
              {
                step: "03",
                title: "Production Deployment",
                desc: "Zero-downtime CI/CD deployment into your AWS/GCP infrastructure, complete with automated compliance checks and real-time observability.",
              }
            ].map((process, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
                className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center relative"
              >
                {/* Connecting Line */}
                {i !== 2 && <div className="hidden md:block absolute left-[3rem] top-[6rem] bottom-[-6rem] w-[2px] bg-gradient-to-b from-primary/20 to-transparent z-0" />}
                
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center relative z-10 shadow-lg">
                  <span className="font-display text-3xl text-primary">{process.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">{process.title}</h3>
                  <p className="text-lg text-[#6B6459] leading-relaxed max-w-2xl">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 7. CTA Section */}
      <section className="py-24 md:py-40 relative overflow-hidden bg-background">
        <div className="absolute inset-0 schematic-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-4xl mx-auto bg-background/50 backdrop-blur-2xl border border-primary/20 rounded-[3rem] p-12 md:p-20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground mb-8">
              Ready to deploy your next big idea?
            </h2>
            <Link href="/contact" tabIndex={-1}>
              <Button size="lg" className="h-16 px-10 text-xl gap-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/25">
                Start Building Today
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
