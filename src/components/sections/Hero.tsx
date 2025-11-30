
"use client";

import { content } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Animation - Video-like effect */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
        }}
      >
        <img
          src={content.images.hero_background}
          alt="Hero Background"
          className="w-full h-full object-cover animate-hero-cinematic"
          style={{
            transformOrigin: 'center center',
          }}
        />
        
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center gap-6 pt-20">
        {/* Content Background Overlay - 20% */}
        <div className="absolute inset-0 -inset-x-4 md:-inset-x-12 bg-black/20 rounded-3xl backdrop-blur-[2px]"></div>
        
        {/* Headline */}
        <h1
          className="relative z-10 text-4xl md:text-6xl lg:text-8xl font-black text-white max-w-5xl leading-tight animate-fade-in-up stagger-1"
          style={{
            textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)",
          }}
        >
          {content.text.headlines.main}
        </h1>

        {/* Subheadline */}
        <h2
          className="relative z-10 text-lg md:text-2xl text-zinc-200 font-medium max-w-2xl animate-fade-in-up stagger-2"
          style={{
            textShadow: "0 2px 15px rgba(0,0,0,0.8)",
          }}
        >
          {content.text.headlines.sub}
        </h2>

        {/* CTAs */}
        <div className="relative z-10 flex flex-col md:flex-row gap-4 mt-8 animate-fade-in-up stagger-3">
          <Button
            size="lg"
            glow
            className="min-w-[200px] text-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            שרייני מקום עכשיו
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="min-w-[200px] text-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            גלי עוד
          </Button>
        </div>

        {/* Stats (Conditional) */}
        {content.text.stats.length > 0 && (
          <div className="relative z-10 mt-12 flex gap-8 items-center justify-center animate-slide-in-up stagger-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            {content.text.stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">{stat.value}</span>
                <span className="text-zinc-300 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Blobs/Elements - Enhanced for video feel */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#D2B48C]/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#1A1A1A]/40 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10" style={{ animationDelay: '2s' }}></div>
      
      {/* Additional floating light particles for dynamic feel */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] animate-float pointer-events-none z-[8]" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-[#D2B48C]/10 rounded-full blur-[80px] animate-float pointer-events-none z-[8]" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-white/3 to-transparent rounded-full blur-[60px] animate-pulse-glow pointer-events-none z-[8]" style={{ animationDuration: '6s' }}></div>
    </section>
  );
};

