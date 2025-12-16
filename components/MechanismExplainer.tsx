import React from 'react';
import { Activity, Wind, Zap, ShieldCheck } from 'lucide-react';

export const MechanismExplainer: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden contain-content">
      
      {/* Background - Simplified for performance */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://i.imgur.com/oWgNIg2.png" 
          alt="Structure" 
          loading="lazy"
          className="w-full h-full object-cover grayscale mix-blend-screen"
        />
        
        {/* CSS Animation Scanner */}
        <div className="absolute left-0 right-0 h-1 bg-[#C5A059]/50 shadow-[0_0_15px_#C5A059] blur-[2px] z-10 animate-scan"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/30 px-4 py-1.5 rounded-full mb-6">
                <ShieldCheck size={14} className="text-[#C5A059]" />
                <span className="text-[#C5A059] text-xs font-bold tracking-widest uppercase">SMART EMS™ TECHNOLOGY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
             המדע שמאחורי <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C5A059] to-[#8A6D3B]">השקט שלכם</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            תהליך ביו-טכנולוגי תלת-שלבי המבטיח נתיב אוויר פתוח.
            </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
            
            {/* Spine Line - CSS Gradient */}
            <div className="hidden md:block absolute top-[40px] left-0 right-0 h-px bg-neutral-900 z-0">
               <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>
            </div>
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-neutral-900 z-0">
               <div className="w-full h-full bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8 md:mb-12">
                        <div className="w-20 h-20 rounded-full bg-black border border-neutral-800 flex items-center justify-center relative z-10 group-hover:border-red-500 transition-colors duration-300 shadow-2xl">
                            <Activity size={32} className="text-gray-400 group-hover:text-red-500 transition-colors" />
                        </div>
                    </div>
                    
                    <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl w-full hover:border-red-500/30 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3">זיהוי ביומטרי</h3>
                        <p className="text-gray-300 leading-relaxed text-base font-medium">
                            חיישנים מדויקים סורקים את דפוסי הנשימה ומזהים את תדר הקול הייחודי של תחילת הנחירה.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8 md:mb-12">
                         {/* PERFORMANCE FIX: Replaced expensive 'blur-xl' div with simple radial gradient */}
                         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(197,160,89,0.2)_0%,transparent_70%)]"></div>
                        <div className="w-24 h-24 -mt-2 rounded-full bg-neutral-900 border border-[#C5A059]/50 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(197,160,89,0.2)]">
                            <Zap size={40} className="text-[#C5A059]" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#C5A059]/10 to-transparent border border-[#C5A059]/20 p-8 rounded-2xl w-full relative transform md:-translate-y-4 shadow-lg">
                        <h3 className="text-2xl font-bold text-white mb-3">גירוי אקטיבי</h3>
                        <p className="text-gray-200 leading-relaxed text-base font-medium">
                            המכשיר שולח פולס מיקרו-חשמלי עדין המכווץ את שריר הגרון ופותח את נתיב האוויר.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8 md:mb-12">
                        <div className="w-20 h-20 rounded-full bg-black border border-neutral-800 flex items-center justify-center relative z-10 group-hover:border-blue-400 transition-colors duration-300">
                            <Wind size={32} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </div>
                    </div>
                    
                    <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl w-full hover:border-blue-400/30 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3">שינה עמוקה</h3>
                        <p className="text-gray-300 leading-relaxed text-base font-medium">
                            זרימת האוויר חוזרת לסדרה, רמת החמצן בדם עולה, והשינה הופכת לרציפה.
                        </p>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};