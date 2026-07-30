import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function InnovationPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* 1. Hero */}
      <section className="relative container mx-auto px-4 pt-16 pb-16 md:pt-32 md:pb-32 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <span className="font-mono text-sm tracking-tight text-primary uppercase mb-8 block">
            INNOVATION HUB 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-foreground mb-8">
            Innovation at Vidya Coddletech
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6459] max-w-2xl font-sans mb-12">
            Driving technological advancement across software, electronics, and business transformation through innovative solutions and cutting-edge engineering expertise.
          </p>
        </div>
      </section>

      {/* 2. Hub Grid */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "VittaPe Fintech Ecosystem", metric: "$50M+ Active Volume", desc: "Our flagship fintech platform and ERP solutions built for high-scale financial operations.", tags: ["React JS", "Supabase", "PostgreSQL", "Tailwind"] },
              { title: "ONDC Merchant Hub", metric: "1M+ Network Reach", desc: "Democratizing e-commerce by enabling seamless retail experiences on the Open Network for Digital Commerce.", tags: ["Next JS", "Node JS", "Express", "MongoDB"] },
              { title: "Chakra Programming Language", metric: "40% Code Reduction", desc: "Next-gen systems language designed for performance and modern development needs.", tags: ["Rust", "LLVM", "Compiler Tech"] },
              { title: "All-in-One Education Hub", metric: "10,000+ Students Enrolled", desc: "Comprehensive educational platform with virtual classrooms, AI-powered progress tracking, and personalized learning paths.", tags: ["Vue JS", "Django", "AWS"] }
            ].map((hub, i) => (
              <div key={i} className="bg-card border border-border p-10 rounded-[2rem] hover:-translate-y-4 hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
                <span className="font-mono text-xs text-primary mb-4 block">{hub.metric}</span>
                <h3 className="text-2xl font-display font-medium mb-4 text-foreground">{hub.title}</h3>
                <p className="text-[#6B6459] font-sans mb-8 leading-relaxed">{hub.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {hub.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono bg-background px-2 py-1 rounded border border-border text-[#6B6459]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Process */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-[#6B6459] font-sans max-w-2xl">
              A proven step-by-step methodology ensuring we deliver high-quality, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", title: "Discovery Call", desc: "Understanding your vision, goals, and technical requirements through in-depth discussions." },
              { id: "02", title: "Proposal & Timeline", desc: "Detailed project roadmap with clear milestones, deliverables, and transparent pricing." },
              { id: "03", title: "UI/UX Design", desc: "Wireframing and high-fidelity design creation focused on user experience." },
              { id: "04", title: "Development", desc: "Agile development sprints with regular updates and continuous integration." },
              { id: "05", title: "Testing & Launch", desc: "Rigorous QA testing before smooth deployment to production." },
              { id: "06", title: "Support & Maintenance", desc: "Post-launch technical support and updates to ensure optimal system operation." }
            ].map((step) => (
              <div key={step.id} className="group relative p-8 -mx-8 rounded-[2rem] hover:bg-card/60 transition-all duration-500 hover:scale-[1.03] border-t border-border mt-2">
                <span className="font-mono text-sm text-primary mb-4 block">PHASE {step.id}</span>
                <h3 className="text-xl font-display font-medium mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-[#6B6459] font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Challenges We're Solving */}
      <section className="container mx-auto px-4 py-16 md:py-32 bg-secondary text-secondary-foreground border-b border-border">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Challenges We&apos;re Solving</h2>
          <p className="text-xl text-[#6B6459] font-sans max-w-2xl mx-auto mb-12">
            Addressing real-world problems with innovative technology solutions that create meaningful impact.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Digital Divide Challenge", desc: "Bridging the gap between traditional businesses and digital transformation.", impact: "Enabling 1000+ local shops digital access" },
            { title: "Education Accessibility", desc: "Making quality education accessible in remote and underserved communities.", impact: "Reaching 50k+ remote students" },
            { title: "Open Commerce Innovation", desc: "Democratizing e-commerce through open network protocols.", impact: "Empowering 500+ small businesses" }
          ].map((challenge, i) => (
            <div key={i} className="bg-background/10 border border-border/20 p-8 rounded-[2rem]">
              <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">{challenge.impact}</span>
              <h3 className="text-xl font-display font-medium mb-3 text-white">{challenge.title}</h3>
              <p className="text-sm text-[#6B6459] font-sans">{challenge.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" className="uppercase tracking-widest text-xs font-mono font-bold text-foreground hover:bg-background">
            View All Innovations
          </Button>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="container mx-auto px-4 py-16 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-6">Ready to Innovate?</h2>
        <p className="text-xl text-[#6B6459] font-sans max-w-2xl mx-auto mb-12">
          Partner with us to transform your business through innovative technology solutions and strategic consulting expertise.
        </p>
        <Button size="lg" className="uppercase tracking-widest text-xs font-mono font-bold">
          Start Your Innovation Journey
        </Button>
      </section>
    </div>
  );
}
