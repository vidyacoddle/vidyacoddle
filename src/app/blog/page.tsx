import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* Hero */}
      <section className="relative container mx-auto px-4 pt-16 pb-16 md:pt-32 md:pb-32 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <span className="font-mono text-sm tracking-tight text-primary uppercase mb-8 block">
            SYSTEMIC INSIGHTS
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-foreground mb-8">
            Engineering &amp; Tech Blog
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6459] max-w-2xl font-sans mb-8">
            Deep-dives into fintech node scaling, ONDC network protocols, custom ERP architecture, and digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Architecting $50M+ High-Throughput Fintech Pipelines with VittaPe",
                date: "July 2026",
                category: "FINTECH ENGINE",
                snippet: "How we eliminated multi-tenant fault constraints to deliver sub-10ms transaction settlement latency."
              },
              {
                title: "Democratizing Retail: Integrating ONDC Protocols into Legacy ERP Systems",
                date: "June 2026",
                category: "ONDC NETWORK",
                snippet: "A programmatic breakdown of seller node synchronization and open commerce discovery protocols."
              },
              {
                title: "Building Compliant Public Sector Tenders in Modern Tech Stacks",
                date: "May 2026",
                category: "GOVTECH",
                snippet: "Navigating strict state infrastructure bidding requirements while maintaining agile React + Node backends."
              },
              {
                title: "Chakra Language: Reducing Systemic Memory Footprint by 40%",
                date: "April 2026",
                category: "COMPILER TECH",
                snippet: "Why we designed a domain-specific systems language for high-frequency IoT hardware communication."
              },
              {
                title: "Zero-Trust Data Vaults for Multi-Tenant Enterprise ERPs",
                date: "March 2026",
                category: "SECURITY",
                snippet: "Implementing end-to-end cryptographic isolation across distributed ERP database clusters."
              },
              {
                title: "Bridging the Digital Divide for Next-Billion Users in Tier-2 Cities",
                date: "February 2026",
                category: "ECOSYSTEM",
                snippet: "Lessons learned building ultra-lightweight web applications optimized for low-bandwidth networks."
              }
            ].map((post, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 font-mono text-xs text-[#6B6459]">
                    <span className="text-primary font-bold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3 text-foreground leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6B6459] font-sans leading-relaxed mb-6">{post.snippet}</p>
                </div>
                <div>
                  <Button variant="outline" size="sm" className="w-full uppercase tracking-widest text-xs font-mono font-bold">
                    Read Article ↗
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-16 md:py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-4">Subscribe to System Updates</h2>
          <p className="text-[#6B6459] font-sans mb-8">Get bi-weekly technical briefs and engineering whitepapers directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="bg-card border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary flex-1 text-sm" />
            <Button size="lg" className="uppercase tracking-widest text-xs font-mono font-bold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
