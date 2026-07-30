import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function TenderDocumentsPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* 1. Hero */}
      <section className="relative container mx-auto px-4 pt-16 pb-16 md:pt-32 md:pb-32 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <span className="font-mono text-sm tracking-tight text-primary uppercase mb-8 block">
            SECURE PROCUREMENT CONSOLE
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-foreground mb-8">
            Document & e-Tender Hub
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6459] max-w-2xl font-sans">
            Analyze official systemic blueprints, request programmatic vendor nodes, and track enterprise-level state infrastructure bidding safety.
          </p>
        </div>
      </section>

      {/* 2. Active Operational Tenders */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-16">Active Operational Tenders</h2>
          <div className="flex flex-col gap-8">
            {[
              { id: "TND-2026-A01", title: "Core Fintech Settlement Engine Architecture", dept: "Vitta Core Infrastructure Labs", status: "Active", date: "2026-05-15", budget: "₹85,00,00,000" },
              { id: "TND-2026-B12", title: "Automated Government ONDC Smart Contracts Sandbox", dept: "Digital Procurement Division", status: "Active", date: "2026-06-30", budget: "₹1,20,00,00,000" },
              { id: "TND-2026-C04", title: "Enterprise ERP Vault Hardware Layer Audit", dept: "State Security Operations", status: "Upcoming", date: "2026-07-10", budget: "₹45,00,000" }
            ].map((tender, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-[2rem] hover:border-primary/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <span className="font-mono text-xs uppercase bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 mb-4 inline-block">{tender.id} • {tender.status}</span>
                    <h3 className="text-2xl font-display font-medium text-foreground mb-2">{tender.title}</h3>
                    <p className="text-[#6B6459] font-sans text-sm">{tender.dept}</p>
                  </div>
                  <div className="text-left md:text-right font-mono">
                    <p className="text-sm text-[#6B6459] mb-1">LOCK DATE</p>
                    <p className="text-lg text-foreground">{tender.date}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-border">
                  <div className="font-mono">
                    <p className="text-xs text-[#6B6459] mb-1">BUDGET ALLOCATION</p>
                    <p className="text-xl text-primary">{tender.budget}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto uppercase tracking-widest text-xs font-mono font-bold">View Blueprint</Button>
                    <Button className="w-full sm:w-auto uppercase tracking-widest text-xs font-mono font-bold">File Dynamic Bid</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Specs & Actions Grid */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-display font-medium text-foreground mb-8">System Specifications</h2>
            <div className="flex flex-col gap-4">
              {[
                { name: "Vitta Architecture RPF Guidelines", type: "PDF" },
                { name: "Vendor Registration & NDA Form", type: "PDF" },
                { name: "Technical Specifications Ext...", type: "PDF" },
                { name: "Financial Bid Matrix Format", type: "EXCEL" }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-card/50 border border-border rounded-[1rem] hover:bg-card transition-colors cursor-pointer group">
                  <span className="font-sans font-medium text-foreground group-hover:text-primary transition-colors">{doc.name}</span>
                  <span className="font-mono text-xs text-[#6B6459] border border-border px-2 py-1 rounded bg-background">{doc.type}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-medium text-foreground mb-8">Action Matrix</h2>
            <div className="flex flex-col gap-4">
              {[
                "Register System Node (Vendor)",
                "Initialize RFQ Submission",
                "Audit Core Bids Pipeline"
              ].map((action, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-secondary text-secondary-foreground border border-border/10 rounded-[1rem] hover:-translate-y-1 transition-transform cursor-pointer group">
                  <span className="font-sans font-medium text-white">{action}</span>
                  <span className="font-mono text-xs text-primary group-hover:translate-x-1 transition-transform">{'->'}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
