import React from 'react';
import { Play } from 'lucide-react';

export const HowToUse: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
       {/* Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">איך זה עובד?</h2>
          
          <div className="bg-[#0A0A0A] border border-[#C5A059]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(197,160,89,0.05)] relative overflow-hidden group hover:border-[#C5A059]/50 transition-colors duration-500">
            
            {/* Top Shine Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-70"></div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-6 text-[#C5A059] border border-[#C5A059]/20">
                <Play size={24} fill="currentColor" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">פשוט וקל לשימוש</h3>
              
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                מניחים את המכשיר בפה לפני השינה, מצמידים בעדינות לשיניים והוא מתמקם לבד. 
                <br className="hidden md:block" />
                לא צריך להפעיל שום דבר – <span className="text-[#C5A059] font-medium">פשוט הולכים לישון והוא עושה את העבודה</span> במהלך הלילה.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};