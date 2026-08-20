"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.24 15.09 13.64 14.86 13.56C14.63 13.47 14.47 13.43 14.3 13.68C14.14 13.93 13.67 14.48 13.52 14.65C13.38 14.81 13.23 14.83 12.98 14.71C12.73 14.58 11.93 14.32 10.98 13.47C10.24 12.81 9.74 11.99 9.6 11.74C9.45 11.49 9.58 11.36 9.71 11.23C9.82 11.12 9.96 10.94 10.09 10.79C10.22 10.64 10.26 10.53 10.34 10.37C10.42 10.2 10.38 10.06 10.32 9.93C10.26 9.81 9.77 8.6 9.56 8.1C9.36 7.61 9.16 7.68 9.01 7.67C8.87 7.66 8.7 7.66 8.54 7.66C8.37 7.66 8.1 7.72 7.87 7.97C7.65 8.22 7.01 8.81 7.01 10.03C7.01 11.25 7.9 12.42 8.02 12.59C8.15 12.75 9.77 15.26 12.26 16.33C12.85 16.59 13.31 16.74 13.67 16.86C14.26 17.05 14.8 17.02 15.23 16.96C15.71 16.89 16.7 16.36 16.9 15.79C17.11 15.21 17.11 14.72 17.05 14.61C16.99 14.51 16.82 14.45 16.56 14.37Z" />
  </svg>
);

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;

      // Trigger visibility after scrolling 30% of the page (or >300px on short pages)
      if (scrollProgress >= 30 || window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Run initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className={`fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-stretch shadow-[0_-4px_20px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)] bg-[#111111] transition-all duration-300 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Call Now Button */}
      <a
        href="tel:+971564410998"
        className="flex-1 bg-[#111111] hover:bg-black text-white flex items-center justify-center gap-2.5 py-3.5 px-3 font-sans font-bold text-xs tracking-wider uppercase transition-colors active:opacity-90 select-none min-h-[52px]"
      >
        <Phone className="w-4 h-4 text-white" />
        <span>CALL NOW</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971564410998?text=Hi%20BuildWise,%20I%20would%20like%20to%20inquire%20about%20business%20setup%20in%20Dubai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#c4a470] hover:bg-[#b59560] text-white flex items-center justify-center gap-2.5 py-3.5 px-3 font-sans font-bold text-xs tracking-wider uppercase transition-colors active:opacity-90 select-none min-h-[52px]"
      >
        <WhatsAppIcon className="w-4 h-4 text-white" />
        <span>WHATSAPP</span>
      </a>
    </aside>
  );
}
