import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function PartnershipPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* Hero */}
      <section className="relative container mx-auto px-4 pt-16 pb-16 md:pt-32 md:pb-32 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <span className="font-mono text-sm tracking-tight text-primary uppercase mb-8 block">
            STRATEGIC ALLIANCES
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-foreground mb-8">
            Partner with Vidya Coddletech
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6459] max-w-2xl font-sans">
            Scale your digital capabilities through co-innovation, enterprise distribution, and strategic system integration.
          </p>
        </div>
      </section>

      {/* Alliance Categories */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-16">Partnership Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                track: "Technology Integration",
                desc: "Embed VittaPe settlement engines and Vidya ERP APIs directly into your core business platform.",
                badge: "API & SDK Access"
              },
              {
                track: "Enterprise Resellers",
                desc: "Distribute our customized IT & government tender solutions to regional enterprise clients.",
                badge: "Revenue Share Model"
              },
              {
                track: "Government & Public Sector",
                desc: "Collaborate on large-scale ONDC and state infrastructure modernization projects.",
                badge: "Certified Alliance"
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                <span className="font-mono text-xs uppercase text-primary mb-4 block">{item.badge}</span>
                <h3 className="text-2xl font-display font-medium mb-3 text-foreground">{item.track}</h3>
                <p className="text-sm text-[#6B6459] font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl mx-auto bg-secondary text-secondary-foreground p-10 rounded-[2rem] shadow-2xl border border-border/10">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">DIRECT INQUIRY</span>
          <h2 className="text-3xl font-display font-medium text-white mb-4">Initialize Partnership Discussion</h2>
          <p className="text-[#6B6459] font-sans mb-8">
            Fill in your organization details to schedule a strategic alignment call with our ecosystem leads.
          </p>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Company Name</label>
                <input type="text" className="bg-background/10 border border-border/20 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Work Email</label>
                <input type="email" className="bg-background/10 border border-border/20 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Partnership Interest</label>
              <select className="bg-secondary border border-border/20 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors">
                <option>Technology Integration</option>
                <option>Enterprise Reseller</option>
                <option>Government Procurement</option>
                <option>Other Collaboration</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Message / Proposal Brief</label>
              <textarea rows={4} className="bg-background/10 border border-border/20 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>

            <Button size="lg" className="uppercase tracking-widest text-xs font-mono font-bold bg-primary text-white hover:bg-primary/90 mt-2">
              Submit Partnership Request
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
