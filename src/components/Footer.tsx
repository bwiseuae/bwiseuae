import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.887 2.892 2.894 2.894 0 0 1-2.895-2.892 2.894 2.894 0 0 1 2.895-2.892c.254 0 .502.033.737.095v-3.52a6.37 6.37 0 0 0-.737-.042 6.333 6.333 0 0 0-6.332 6.336 6.333 6.333 0 0 0 6.332 6.336 6.333 6.333 0 0 0 6.332-6.336V9.014a8.211 8.211 0 0 0 4.77 1.522V7.09a4.814 4.814 0 0 1-1.002-.404z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-alabaster border-t border-[#C5A880]/20 text-charcoal pt-16 pb-8 relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 right-0 w-[20%] h-[30%] bg-[radial-gradient(circle_at_bottom_right,rgba(197,168,128,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-200/50">

          {/* Column 1: Brand details (occupies 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group select-none">
              <div className="hidden w-8 h-8 rounded-none border border-champagne-gold bg-transparent flex items-center justify-center">
                <span className="font-serif text-sm font-bold text-champagne-gold ">O</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="hidden font-serif text-lg font-bold tracking-tight text-charcoal leading-none">
                  Open Business
                </span>
                <span className="hidden font-sans text-[9px] tracking-[0.2em] text-champagne-gold font-semibold uppercase leading-none mt-1">
                  in UAE
                </span>
                <Image
                  src="/images/Build%20Wise%20Desktop%20logo.png" // Change extension to .svg if needed
                  alt="Open Business Logo"
                  width={160}
                  height={45}
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed max-w-sm">
              Helping entrepreneurs and businesses establish a prestigious presence in the UAE. Complete company formation, residency, bank onboarding, and advisory.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/18YuNkGgot" },
                { icon: Instagram, href: "https://www.instagram.com/buildwiseuae" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@buildwisecomser?_r=1&_t=ZS-98Rlp8vqagR" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/build-wise-commercial-services-f-z-e-129700428" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-none border border-neutral-200 hover:border-champagne-gold hover:text-champagne-gold flex items-center justify-center text-slate-grey transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services links */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <h4 className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.2em]">
              Services
            </h4>
            <ul className="space-y-3 font-sans text-xs tracking-wider uppercase font-semibold">
              {[
                "Company Formation",
                "Business Setup",
                "Visa Services",
                "Bank Account Assistance",
                "VAT Registrations",
              ].map((link, index) => (
                <li key={index}>
                  <Link href="/services" className="text-slate-grey hover:text-champagne-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company links */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <h4 className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.2em]">
              Company
            </h4>
            <ul className="space-y-3 font-sans text-xs tracking-wider uppercase font-semibold">
              {[
                { name: "About Us", href: "/about" },
                { name: "FAQs", href: "/faq" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-grey hover:text-champagne-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <h4 className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.2em]">
              Contact
            </h4>
            <ul className="space-y-4 font-sans text-xs sm:text-sm text-slate-grey">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+971564410998" className="hover:text-champagne-gold transition-colors font-medium">
                  +971 56 441 0998
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:naaz@buildwiseuae.com" className="hover:text-champagne-gold transition-colors font-medium">
                  naaz@buildwiseuae.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Premises B.C. 1308392, Ajman Free Zone C1 Building, Ajman Free Zone, Ajman, UAE
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-0.5" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM, Saturday : 9:30 AM – 04:30 PM (GMT+4)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-grey/60">
          <span>
            © 2026 Open Business in UAE. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-champagne-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-champagne-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
