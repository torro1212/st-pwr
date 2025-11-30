
"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormState("success");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
       {/* Background Image with Mandatory Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={content.images.cta_background}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Column */}
          <div className="w-full lg:w-1/2">
             <AnimatedSection className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">הפרטים התקבלו בהצלחה!</h3>
                  <p className="text-zinc-500">אנחנו נחזור אליך בהקדם לתיאום האימון.</p>
                  <Button 
                    className="mt-8" 
                    variant="outline" 
                    onClick={() => setFormState("idle")}
                  >
                    שלחי הודעה נוספת
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">מוכנה להתחיל?</h2>
                  <p className="text-zinc-500 mb-8">השאירי פרטים ונחזור אליך לתיאום אימון ניסיון</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">שם מלא</label>
                      <Input required placeholder="השם שלך" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">טלפון</label>
                      <Input required type="tel" placeholder="050-0000000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">הודעה (אופציונלי)</label>
                      <Textarea placeholder="היי, אשמח לשמוע פרטים על..." />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg" 
                      glow 
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 ml-2 animate-spin" /> שולח...
                        </>
                      ) : (
                        "אני רוצה להתחיל!"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </AnimatedSection>
          </div>

          {/* Info Column */}
          <div className="w-full lg:w-1/2 text-white flex flex-col justify-center">
            <AnimatedSection delay={0.2}>
              <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8">
                <h2 
                  className="text-4xl md:text-5xl font-black mb-8"
                  style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
                >
                  אנחנו כאן בשבילך
                </h2>
                <p className="text-zinc-300 text-lg mb-12 max-w-md">
                  הסטודיו ממוקם בלב פתח תקווה, במרכז נגיש עם חניה בשפע. בואי להכיר אותנו!
                </p>

                <div className="space-y-8">
                  <a 
                    href={`tel:${content.business.phone}`}
                    className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#D2B48C] flex items-center justify-center text-[#1A1A1A] group-hover:scale-110 transition-transform">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">התקשרי אלינו</h4>
                      <p className="text-zinc-300">{content.business.phone}</p>
                    </div>
                  </a>

                  <a 
                    href={content.business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#D2B48C] flex items-center justify-center text-[#1A1A1A] group-hover:scale-110 transition-transform">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">הגיעי אלינו</h4>
                      <p className="text-zinc-300">{content.business.address}</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

