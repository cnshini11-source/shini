import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "התאמה טבעית",
      description: "העיצוב הארגונומי מתלבש בעדינות מאחורי האוזן. אין צורך בכיוונון מסובך – המבנה הגמיש מתאים את עצמו אליכם ברגע."
    },
    {
      id: "02",
      title: "הפעלה חכמה",
      description: "לחיצה אחת והמכשיר נכנס לפעולה. חיישני ה-Smart EMS™ מזהים אוטומטית כניסה למצב שינה ומתחילים בניטור שקט.",
    },
    {
      id: "03",
      title: "שינה עמוקה",
      description: "ברגע שמתחילה נחירה, המכשיר שולח איתות זעיר לשריר הגרון. נתיב האוויר נפתח, הנחירה נפסקת, ואתם (ובני הזוג) ממשיכים לישון."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-black relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-neutral-800 pb-8">
            <div className="max-w-2xl">
                <span className="text-[#C5A059] font-bold tracking-widest text-sm uppercase mb-4 block">User Guide</span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    פשוט. חכם. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#C5A059] to-[#E6C88B]">שקט.</span>
                </h2>
            </div>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed md:text-left">
                טכנולוגיה מורכבת שארזנו למוצר שכל אחד יכול להפעיל בשניות. ללא אפליקציות מסובכות וללא חוטים.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
                <div key={step.id} className="group relative p-8 h-full min-h-[320px] flex flex-col justify-between bg-neutral-900/40 border border-neutral-800 hover:border-[#C5A059]/50 transition-all duration-500 rounded-2xl overflow-hidden">
                    
                    {/* Background Gradient on Hover - Replaces heavy blur with performant gradient opacity */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-6xl md:text-7xl font-black text-neutral-800 group-hover:text-neutral-700 transition-colors duration-500 font-mono select-none">
                                {step.id}
                            </span>
                            <div className="w-12 h-[1px] bg-[#C5A059] origin-right transform scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors duration-300">
                            {step.title}
                        </h3>
                        
                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            {step.description}
                        </p>
                    </div>

                    {/* Bottom Active Indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};