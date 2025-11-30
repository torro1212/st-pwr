
"use client";

import { content } from "@/data/content";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Activity, Leaf, Minimize2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const icons = {
  service_pilates: Minimize2,
  service_functional: Activity,
  nutrition_workshop: Leaf,
  service_yoga: Leaf, // Fallback
};

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.images.gallery_interior}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl px-8 py-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">השירותים שלנו</h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              כל מה שאת צריכה כדי להגיע לגרסה הטובה ביותר שלך, במקום אחד.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.text.services.map((service, index) => {
            // @ts-expect-error - icons map keys are strings
            const Icon = icons[service.imageKey] || Activity;
            const imageUrl = content.images[service.imageKey as keyof typeof content.images];

            return (
              <AnimatedSection key={index} delay={index * 0.1} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 h-full flex flex-col">
                  {/* Image Area */}
                  <div className="h-64 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img
                      src={imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-md group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#1A1A1A]" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">{service.name}</h3>
                    <p className="text-zinc-600 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Button variant="ghost" className="p-0 hover:bg-transparent text-[#1A1A1A] font-bold group-hover:text-[#D2B48C] transition-colors flex items-center gap-2">
                        קראי עוד <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="min-w-[250px]"
            >
              רוצה לשמוע עוד? דברי איתנו
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

