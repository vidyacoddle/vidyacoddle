import * as React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden bg-background min-h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none -z-10 schematic-grid" />
      
      <div className="max-w-md w-full mx-auto p-8 bg-card border border-border rounded-[2rem] shadow-2xl relative overflow-hidden">
        {/* Top Status Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
        
        <div className="text-center mb-8">
          <span className="font-display font-bold text-2xl text-foreground mb-2 block">System Infrastructure Panel</span>
          <p className="text-sm text-[#6B6459] font-sans">Access your secure system infrastructure panel.</p>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-destructive mb-2 block">STATUS: OFFLINE</span>
          <p className="text-sm text-foreground font-sans">
            Portal Authentication is currently offline for scheduled maintenance.
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#6B6459] font-sans mb-6">
            Don&apos;t have an account? Contact support at <a href="mailto:vittape36@gmail.com" className="text-primary hover:underline">vittape36@gmail.com</a>
          </p>
          
          <Link href="/">
            <Button variant="outline" className="w-full uppercase tracking-widest text-xs font-mono font-bold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
