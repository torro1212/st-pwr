
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button, cn } from "@/components/ui/button";
import { content } from "@/data/content";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "בית", href: "#hero" },
    { name: "שירותים", href: "#services" },
    { name: "אודות", href: "#about" },
    { name: "המלצות", href: "#testimonials" },
    { name: "שאלות נפוצות", href: "#faq" },
    { name: "צור קשר", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in-down">
          {/* Logo Image */}
          <img src={content.images.logo} alt={content.business.name} className="h-10 w-auto object-contain" />
          <span className={cn("text-xl font-black hidden md:block", isScrolled || "text-white")}>
            {content.business.name}
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 animate-fade-in-down stagger-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#D2B48C]",
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block animate-fade-in-down stagger-2">
          <Button
            variant={isScrolled ? "primary" : "secondary"}
            glow
            onClick={() => window.location.href = content.business.whatsappLink}
          >
            <Phone className="w-4 h-4 ml-2" />
            קבעי אימון
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-[#1A1A1A]" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-6 shadow-xl border-t border-gray-100 md:hidden flex flex-col gap-4 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-[#1A1A1A] hover:text-[#D2B48C]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => window.location.href = content.business.whatsappLink}
            >
              <Phone className="w-4 h-4 ml-2" />
              קבעי אימון
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

