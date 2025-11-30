
"use client";

import { content } from "@/data/content";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.images.service_functional}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block bg-black/20 backdrop-blur-sm rounded-2xl px-8 py-6">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">מה הלקוחות אומרות</h2>
            <p className="text-xl text-zinc-200">אלפי נשים כבר בחרו בסטודיו פאוור</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.text.testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-tr-[3rem] rounded-bl-[3rem] border border-gray-100 h-full flex flex-col relative group">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-[#D2B48C]/20 group-hover:text-[#D2B48C]/40 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D2B48C] text-[#D2B48C] animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>

                <p className="text-lg text-zinc-600 mb-6 flex-grow italic relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{testimonial.author}</h4>
                    <span className="text-sm text-zinc-400">לקוחה מאומתת</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              glow
              className="min-w-[250px]"
            >
              הצטרפי ללקוחות המרוצות שלנו
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

