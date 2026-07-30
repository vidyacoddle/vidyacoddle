import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      {/* 1. Hero */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <span className="font-mono text-xs md:text-sm tracking-tight text-primary uppercase mb-6 md:mb-8 block">
            OPERATIONAL EXPANSION NODE
          </span>
          <h1 className="text-fluid-h1 font-display font-medium text-foreground mb-6 md:mb-8">
            Build Your Future with VidyaTech
          </h1>
          <p className="text-lg md:text-2xl text-[#6B6459] max-w-2xl font-sans mb-10 md:mb-12">
            Be part of our mission to drive innovation in software, electronics, and digital transformation. We&apos;re looking for passionate professionals to join our growing team.
          </p>
          <div className="flex items-center gap-6">
            <Button size="lg" className="uppercase tracking-widest text-xs font-mono font-bold">
              Schedule Interview
            </Button>
            <Button size="link" variant="link" className="uppercase tracking-widest text-xs font-mono font-bold">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Why Join Us */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
            <div>
              <h2 className="text-fluid-h2 font-display font-medium text-foreground mb-4">Why Join Us?</h2>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 font-mono text-xs text-[#6B6459] uppercase">
              <span className="bg-background px-3 py-1 rounded border border-border">50+ TEAM MEMBERS</span>
              <span className="bg-background px-3 py-1 rounded border border-border">4 OPEN POSITIONS</span>
              <span className="bg-background px-3 py-1 rounded border border-border">3 LOCATIONS</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family." },
              { title: "Learning & Growth", desc: "Training programs and certification support." },
              { title: "Flexible Hours", desc: "Work-life balance with flexible scheduling." },
              { title: "Team Culture", desc: "Collaborative and inclusive work environment." }
            ].map((perk, i) => (
              <div key={i} className="bg-background border border-border p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                <h3 className="text-xl font-display font-medium mb-3 text-foreground">{perk.title}</h3>
                <p className="text-sm text-[#6B6459] font-sans">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="container mx-auto px-4 py-16 md:py-32 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-fluid-h2 font-display font-medium text-foreground mb-12 md:mb-16">Open Positions</h2>
          <div className="flex flex-col gap-6">
            {[
              { role: "Senior Software Engineer", tags: ["Full Time", "Remote", "4+ Years"], skills: "React, Node.js, AWS" },
              { role: "Electronics Design Engineer", tags: ["Full Time", "On-site", "3+ Years"], skills: "PCB Design, IoT, C++" },
              { role: "Product Manager", tags: ["Full Time", "Hybrid", "5+ Years"], skills: "Agile, Jira, Strategy" },
              { role: "UI/UX Designer", tags: ["Full Time", "Remote", "2+ Years"], skills: "Figma, User Research, Prototyping" }
            ].map((job, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-card border border-border rounded-[2rem] hover:border-primary/50 transition-colors duration-300">
                <div className="flex flex-col gap-4">
                  <h3 className="text-fluid-h3 font-display font-medium text-foreground">{job.role}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {job.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs uppercase bg-background px-2 py-1 rounded border border-border text-[#6B6459]">{tag}</span>
                    ))}
                    <span className="font-mono text-xs uppercase bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">{job.skills}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <Button variant="outline" className="uppercase tracking-widest text-xs font-mono font-bold">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Apply Form */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-32">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-fluid-h2 font-display font-medium text-white mb-4">Update Your CV</h2>
          <p className="text-sm md:text-base text-[#6B6459] font-sans mb-10 md:mb-12">Submit your resume and we will get back to you.</p>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Full Name</label>
              <input type="text" className="bg-background/10 border border-border/20 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Email</label>
              <input type="email" className="bg-background/10 border border-border/20 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Role of Interest</label>
              <input type="text" className="bg-background/10 border border-border/20 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#6B6459]">Upload CV (PDF, DOC)</label>
              <div className="border-2 border-dashed border-border/20 rounded-lg p-8 text-center bg-background/5 hover:bg-background/10 transition-colors cursor-pointer">
                <span className="font-mono text-xs uppercase text-[#6B6459]">Drag and drop or click to upload</span>
              </div>
            </div>
            <Button size="lg" className="w-full uppercase tracking-widest text-xs font-mono font-bold bg-primary text-white hover:bg-primary-hover border-transparent mt-4">
              SUBMIT / UPDATE CV
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
