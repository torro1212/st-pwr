
"use client";

import { content } from "@/data/content";
import { MessageCircle } from "lucide-react";

export const FloatingElements = () => {
  return (
    <>
      {/* WhatsApp Button */}
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
    </>
  );
};

