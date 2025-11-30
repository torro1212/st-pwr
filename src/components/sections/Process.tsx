
"use client";

import { content } from "@/data/content";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const Process = () => {
  return (
    <section className="py-24 md:py-32 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.images.equipment_detail}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-block bg-black/20 backdrop-blur-sm rounded-2xl px-8 py-6">
            <h2 className="text-4xl md:text-5xl font-black mb-4">{content.text.process.title}</h2>
            <p className="text-zinc-400 text-lg">הדרך שלך לתוצאות מתחילה כאן</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-zinc-800 w-full -z-10">
             <div className="absolute inset-0 bg-gradient-to-r from-[#D2B48C] to-[#D2B48C] w-0 animate-[width_2s_ease-out_forwards]"></div>
          </div>

          {content.text.process.steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.2} className="relative group">
              <div className="flex flex-col items-center text-center bg-black/20 backdrop-blur-sm rounded-2xl p-6">
                {/* Number Circle */}
                <div className="w-24 h-24 rounded-full bg-[#1A1A1A] border-2 border-[#D2B48C] flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300 z-10">
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                  <div className="absolute inset-0 rounded-full bg-[#D2B48C]/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#D2B48C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-black/20 backdrop-blur-sm rounded-full p-4">
            <Button
              glow
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              מתחילים עכשיו <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

