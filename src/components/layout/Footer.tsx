"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <footer className="w-full border-t border-border bg-background pt-24 pb-12 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          <div className="flex flex-col gap-6 md:col-span-1">
            <Link href="/" className="font-display font-bold text-xl tracking-tight">
              VittaTech
            </Link>
            <p className="text-[#6B6459] text-sm max-w-xs leading-relaxed font-sans">
              Creating innovative technology solutions that help businesses thrive in the digital world. We combine technical expertise with creative thinking to deliver exceptional results.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm text-foreground">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#6B6459]">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/innovation" className="hover:text-foreground transition-colors">Innovation</Link></li>
              <li><Link href="/tender-documents" className="hover:text-foreground transition-colors">e-Tender/Documents</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm text-foreground">Ecosystem &amp; Media</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#6B6459]">
              <li><Link href="/partnership" className="hover:text-foreground transition-colors">Partnership</Link></li>
              <li><Link href="/press" className="hover:text-foreground transition-colors">Press &amp; Brand Assets</Link></li>
              <li><Link href="/vendor-register" className="hover:text-foreground transition-colors">Vendor Registration</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Tech Blog</Link></li>
              <li><Link href="/login" className="hover:text-foreground transition-colors">Portal Login</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm text-foreground">Contact Info</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#6B6459]">
              <li><a href="mailto:vittape36@gmail.com" className="hover:text-foreground transition-colors">vittape36@gmail.com</a></li>
              <li><span className="text-[#6B6459]">+91 88473 52309</span></li>
              <li><span className="text-[#6B6459]">IT City Mohali 160055</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-mono text-xs text-[#6B6459]">
            SYSTEM STATUS: ONLINE // HQ: IT CITY MOHALI
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-xs text-[#6B6459] font-mono items-start md:items-center">
            <span>© 2026 VittaTech. All rights reserved. Last updated: June 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
