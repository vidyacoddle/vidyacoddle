"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Careers", href: "/careers" },
  { name: "e-Tender", href: "/tender-documents" },
  { name: "Login", href: "/login" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur transition-all duration-300 ${scrolled ? 'border-b border-border' : 'border-b border-transparent'}`}>
      <div className="h-16 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold tracking-tight text-foreground text-xl">
              Vidya Coddletech
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-card border border-border rounded-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-[#6B6459]">Booking Q4 engagements</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group text-sm font-medium transition-colors py-1 ${
                  isActive ? "text-foreground" : "text-[#6B6459] hover:text-foreground"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Link href="/contact" tabIndex={-1}>
              <Button size="sm">
                Start a project
              </Button>
            </Link>
          </div>
          <button 
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden flex items-center justify-center min-w-[48px] min-h-[48px] p-2 text-foreground rounded-md active:bg-black/5"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border py-4 px-4 flex flex-col gap-2 shadow-2xl overflow-y-auto z-50"
          style={{ maxHeight: 'calc(100vh - 4rem)', paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                  isActive ? "bg-primary/10 text-primary" : "text-[#6B6459] hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="px-4 mt-4 mb-2">
            <Link href="/contact" onClick={() => setIsOpen(false)} tabIndex={-1}>
              <Button size="lg" className="w-full">
                Start a project
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
