
"use client";

import { content } from "@/data/content";
import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button - Desktop & Mobile */}
      <a
        href={content.business.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 text-white">
            <MessageCircle size={28} />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute left-16 bg-white px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <p className="text-sm font-bold text-[#1A1A1A]">דברי איתנו בוואטסאפ</p>
          <p className="text-xs text-zinc-500">זמינות ברוב שעות היום</p>
        </div>
      </a>

      {/* Mobile Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 p-4 md:hidden z-40 flex items-center justify-between gap-4 safe-area-bottom">
        <a
          href={`tel:${content.business.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-3 rounded-full font-bold shadow-lg"
        >
          <Phone size={18} />
          חייגי
        </a>
        <a
          href={content.business.whatsappLink}
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-bold shadow-lg"
        >
          <MessageCircle size={18} />
          וואטסאפ
        </a>
      </div>
    </>
  );
};

