
"use client";

import { content } from "@/data/content";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Quote } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.images.gallery_interior}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Content Column */}
          <div className="w-full lg:w-2/3">
            <AnimatedSection delay={0.2}>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-8 leading-tight">
                  {content.text.about.title}
                </h2>
                
                <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                  {content.text.about.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 p-8 bg-[#F9F9F9] border-r-4 border-[#1A1A1A] rounded-l-2xl relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D2B48C] opacity-50" />
                  <p className="text-xl font-bold text-[#1A1A1A] italic relative z-10 pr-8">
                    "{content.text.about.quote}"
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

