import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function VendorRegisterPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* Hero */}
      <section className="relative container mx-auto px-4 pt-16 pb-16 md:pt-32 md:pb-32 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <span className="font-mono text-sm tracking-tight text-primary uppercase mb-8 block">
            VENDOR ONBOARDING NODE
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.1] text-foreground mb-8">
            Vendor Registration
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6459] max-w-2xl font-sans">
            Register your entity to participate in Vidya Coddletech procurement pipelines, ERP vendor ecosystems, and government tender execution.
          </p>
        </div>
      </section>

      {/* Registration Form & Interactive Connect */}
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border p-8 md:p-12 rounded-[2rem] shadow-xl">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">SECURE CREDENTIALING</span>
              <h2 className="text-3xl font-display font-medium text-foreground mb-4">Vendor Onboarding Application</h2>
              <p className="text-[#6B6459] font-sans text-sm">
                Provide certified corporate credentials and select your primary operational work role below.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Entity / Business Name *</label>
                  <input type="text" required className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">GSTIN / Registration ID *</label>
                  <input type="text" required className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Primary Contact Email *</label>
                  <input type="email" required className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Contact Phone *</label>
                  <input type="tel" required className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              {/* Work Role Selection */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Select Primary Work Role *</label>
                <select className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option>Software Systems Development &amp; API Integration</option>
                  <option>Hardware &amp; IoT Procurement Vendor</option>
                  <option>Cloud Infrastructure &amp; Security Auditing</option>
                  <option>ONDC Merchant / Logistics Onboarding</option>
                  <option>Government Tender Co-Execution Partner</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Technical Capabilities &amp; Past Experience</label>
                <textarea rows={4} className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Briefly describe your stack, compliance certifications, and capacity..." />
              </div>

              {/* Interactive Connect Card */}
              <div className="bg-secondary text-secondary-foreground p-6 rounded-xl mt-4 border border-border/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary mb-1 block">INTERACTIVE CONNECT</span>
                    <p className="text-sm text-white/90 font-sans">
                      Automated background checks will verify GSTIN and NDA parameters upon submission.
                    </p>
                  </div>
                  <Button size="lg" className="uppercase tracking-widest text-xs font-mono font-bold whitespace-nowrap">
                    Submit Vendor Node ↗
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
