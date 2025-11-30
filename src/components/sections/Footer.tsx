
"use client";

import { content } from "@/data/content";
import { Facebook, Instagram, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white pt-20 pb-10 border-t border-zinc-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.images.hero_background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <img src={content.images.logo} alt={content.business.name} className="h-12 mb-6 object-contain brightness-0 invert" />
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {content.text.about.content[0]}
            </p>
            <div className="flex gap-4">
              {content.business.socials.map((social, index) => {
                const Icon = social.platform === "facebook" ? Facebook : Instagram;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-[#D2B48C] hover:text-[#1A1A1A] transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">ניווט מהיר</h4>
            <ul className="space-y-4">
              {["בית", "שירותים", "אודות", "המלצות", "צור קשר"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === "בית" ? "hero" : item === "שירותים" ? "services" : item === "אודות" ? "about" : item === "המלצות" ? "testimonials" : "contact"}`}
                    className="text-zinc-400 hover:text-[#D2B48C] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-[#D2B48C] transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">פרטי קשר</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>{content.business.address}</li>
              <li>
                  <a href={`tel:${content.business.phone}`} className="hover:text-[#D2B48C] transition-colors">
                      {content.business.phone}
                  </a>
              </li>
              <li>{content.business.location}</li>
            </ul>
          </div>
          
          {/* Map/Extra Column */}
           <div>
            <h4 className="text-lg font-bold mb-6">אזורי שירות</h4>
            <p className="text-zinc-400 mb-4">
                {content.business.serviceArea}
            </p>
            <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[#D2B48C] hover:text-white transition-colors font-medium text-sm"
            >
                חזרה לראש העמוד <ArrowUp size={16} />
            </button>
          </div>
        </div>

        </div>
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} {content.business.name}. כל הזכויות שמורות.</p>
          <p>נבנה באהבה.</p>
        </div>
      </div>
    </footer>
  );
};

