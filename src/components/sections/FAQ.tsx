
"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Plus, Minus } from "lucide-react";


export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.images.service_pilates}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">שאלות נפוצות</h2>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {content.text.faq.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#F9F9F9] border-[#D2B48C] shadow-md"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-right flex items-center justify-between outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-bold text-[#1A1A1A]">{item.question}</span>
                  <span className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                    {openIndex === index ? <Minus className="text-[#D2B48C]" /> : <Plus className="text-zinc-400" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-zinc-600 leading-relaxed border-t border-gray-100 mx-6 mt-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

