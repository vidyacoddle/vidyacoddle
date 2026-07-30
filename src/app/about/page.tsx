import * as React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* 1. Hero */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-mono text-sm tracking-tight text-foreground uppercase">
              CORE SYSTEM BLUEPRINT
            </span>
          </div>
          <h1 className="text-fluid-h1 font-display font-medium text-foreground mb-6 md:mb-8">
            About Vidya Coddletech
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6459] max-w-2xl font-sans">
            Vidya Coddle Tech Consultancy builds custom IT solutions for startups, government offices, and GenZ builders. We ship fintech, ONDC, ERP, and tender platforms—including VittaPe, Vidya ERP, and Ayovita. We don&apos;t do templated SaaS; we build your unfair advantage.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-10 rounded-[2rem] hover:-translate-y-4 hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
            <h3 className="font-mono text-sm text-primary mb-4">OUR MISSION</h3>
            <p className="font-sans text-[#6B6459] leading-relaxed text-lg">
              &quot;Out of the box digital solutions that actually ship and scale. To empower global ecosystems with AI-driven, programmatically optimized infrastructure solutions that accelerate systemic scaling, capture absolute asymmetric compliance nodes by 2028.&quot;
            </p>
          </div>
          <div className="bg-card border border-border p-10 rounded-[2rem] hover:-translate-y-4 hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
            <h3 className="font-mono text-sm text-primary mb-4">OUR VISION</h3>
            <p className="font-sans text-[#6B6459] leading-relaxed text-lg">
              &quot;Empower builders with custom fintech and ERP sandboxes built for the next-billion users—pioneering systems architecture, distributed ledgers, and secure cloud nodes that safely bridge the chasm between legacy structural models and decentralized asymmetry.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 3. Team */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-primary mb-4 block">COLLECTIVE ENGINEERING FORCE - Innovating Without Boundaries</span>
          <h2 className="text-fluid-h2 font-display font-medium text-foreground mb-6 md:mb-8">Meet Team Vitta</h2>
          <p className="text-lg md:text-xl text-[#6B6459] font-sans leading-relaxed mb-10 md:mb-12">
            The engineering force driving custom innovation lines. We operationally structure as an interconnected cluster of system nodes: architects, blockchain researchers, and full-stack deployment nodes. Team Vitta builds production layers that securely bridge high-volume core data systems directly into high-availability commercial spaces.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Custom Pipelines", "Secure Data Layers", "Zero In-Premise Limits", "Infinite Scale"].map((tag, i) => (
              <span key={i} className="text-sm font-mono bg-background px-4 py-2 rounded-full border border-border text-foreground shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
