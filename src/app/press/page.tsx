import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function PressPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* Hero */}
      <section className="relative container mx-auto px-4 pt-16 pb-16 md:pt-32 md:pb-32 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <span className="font-mono text-sm tracking-tight text-primary uppercase mb-8 block">
            MEDIA &amp; NEWSROOM
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-foreground mb-8">
            Press &amp; Brand Assets
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6459] max-w-2xl font-sans mb-8">
            Official announcements, media kits, press resources, and trademark brand naming guidelines for Vidya Coddletech.
          </p>
          <Button size="lg" className="uppercase tracking-widest text-xs font-mono font-bold">
            Download Press Kit (ZIP)
          </Button>
        </div>
      </section>

      {/* Logo Naming & Brand Assets */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase text-primary mb-4 block">BRAND STANDARDS</span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-12">Logo &amp; Brand Naming Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border p-8 rounded-[2rem]">
              <h3 className="font-mono text-xs uppercase text-primary mb-2">PRIMARY ENTITY</h3>
              <p className="text-2xl font-display font-bold text-foreground mb-4">Vidya Coddletech</p>
              <p className="text-sm text-[#6B6459] font-sans leading-relaxed">
                Always capitalize &quot;Vidya&quot; and &quot;Coddletech&quot; with a space between them. Used for corporate governance and official announcements.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-[2rem]">
              <h3 className="font-mono text-xs uppercase text-primary mb-2">INFRASTRUCTURE LAYER</h3>
              <p className="text-2xl font-display font-bold text-foreground mb-4">VittaTech</p>
              <p className="text-sm text-[#6B6459] font-sans leading-relaxed">
                Short form used for system nodes, technology stack documentation, and developer portal APIs.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-[2rem]">
              <h3 className="font-mono text-xs uppercase text-primary mb-2">FINTECH ECOSYSTEM</h3>
              <p className="text-2xl font-display font-bold text-foreground mb-4">VittaPe</p>
              <p className="text-sm text-[#6B6459] font-sans leading-relaxed">
                Refers specifically to our payment settlement gateway and financial ERP engine suite.
              </p>
            </div>
          </div>

          <div className="bg-background border border-border p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-display font-medium text-foreground mb-2">Official Brand Kit (2026 Edition)</h4>
              <p className="text-sm text-[#6B6459] font-sans">Contains high-res SVG logos, color palettes (#F7F3EA, #16140F, #D6491E), typography guidelines, and media badges.</p>
            </div>
            <Button variant="outline" className="uppercase tracking-widest text-xs font-mono font-bold whitespace-nowrap">
              Download Media Assets
            </Button>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-16">Press Releases</h2>
          <div className="flex flex-col gap-6">
            {[
              { title: "Vidya Coddletech Announces $50M Active Settlement Milestone for VittaPe", date: "May 2026", outlet: "Fintech Daily" },
              { title: "Scaling ONDC Infrastructure Across 1,000+ Regional Merchant Nodes", date: "April 2026", outlet: "Tech Infrastructure Review" },
              { title: "Vidya Tech Unveils Decentralized Public Sector ERP Architecture", date: "March 2026", outlet: "GovTech India" }
            ].map((article, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-card border border-border rounded-[2rem] hover:border-primary/50 transition-colors">
                <div>
                  <span className="font-mono text-xs text-primary mb-2 block">{article.outlet} • {article.date}</span>
                  <h3 className="text-2xl font-display font-medium text-foreground">{article.title}</h3>
                </div>
                <Button variant="outline" size="sm" className="mt-4 md:mt-0 uppercase tracking-widest text-xs font-mono font-bold">
                  Read Article ↗
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
