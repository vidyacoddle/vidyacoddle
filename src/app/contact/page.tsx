import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      <section className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* 1. Contact Form */}
          <div>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-4">Get in Touch</h1>
              <p className="text-lg text-[#6B6459] font-sans">
                Have a project in mind? We&apos;d love to hear from you!
              </p>
            </div>

            <form className="flex flex-col gap-6 bg-card border border-border p-10 rounded-[2rem] shadow-xl">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Your Name</label>
                <input type="text" className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Email</label>
                <input type="email" className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Message</label>
                <textarea rows={5} className="bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <Button size="lg" className="uppercase tracking-widest text-xs font-mono font-bold mt-4">
                Send Message
              </Button>
            </form>
          </div>

          {/* 2. Meeting Scheduler */}
          <div className="lg:pt-24">
            <div className="bg-secondary text-secondary-foreground p-10 rounded-[2rem] shadow-xl border border-border/10">
              <h2 className="text-3xl font-display font-medium text-white mb-4">Schedule a Meeting</h2>
              <p className="text-[#6B6459] font-sans mb-12">
                Pick a secure slot directly with our core engineering team below.
              </p>
              
              <div className="bg-background/10 border border-border/20 p-6 rounded-xl mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">Interactive Slot Assistant</span>
                <p className="text-sm text-white/80 font-sans">
                  Click below to view real-time available dashboard and block calendars instantly inside our platform.
                </p>
              </div>

              <Button variant="outline" size="lg" className="w-full uppercase tracking-widest text-xs font-mono font-bold text-white border-white/20 hover:bg-white hover:text-secondary mb-8">
                Schedule a Meeting ↗
              </Button>

              <div className="flex items-start gap-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <span className="font-mono text-primary font-bold">TIP:</span>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  All confirmed slot events automatically trigger absolute end-to-end Google Meet parameters to your mailbox.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
