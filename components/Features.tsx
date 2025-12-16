import React from 'react';
import { Moon, Glasses, Wind } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: <Moon />,
    title: 'מכשיר נגד נחירות',
    description: 'פותח את דרכי האוויר ומפחית נחירות באופן מיידי.',
    image: "https://i.imgur.com/oWgNIg2.png"
  },
  {
    icon: <Wind />,
    title: 'מכשיר לפתיחת הנשימה',
    description: 'מרחיב בעדינות את הנחיריים כדי לאפשר זרימת אוויר חלקה ומוגברת, מונע גודש ומקל על הנשימה באופן מיידי.',
    image: "https://i.imgur.com/94bI0Ho.jpg"
  },
  {
    icon: <Glasses />,
    title: 'כיסוי עיניים 3D פרימיום',
    description: 'עיצוב תלת-ממדי ארגונומי שלא לוחץ על העפעפיים, מאפשר מצמוץ חופשי וחוסם אור ב-100% לשינה עמוקה ואיכותית.',
    image: "https://i.imgur.com/LNt9yZ9.jpeg"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-neutral-950 relative overflow-hidden contain-content">
      {/* PERFORMANCE FIX: Replaced 'blur' filters with radial-gradients. 
          Blur requires heavy GPU calculation per frame. Radial gradients are rendered as simple textures. */}
      
      {/* Background Dark Base */}
      <div className="absolute inset-0 bg-neutral-950"></div>
      
      {/* Optimized Glow Effect (Right Top) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(8,47,73,0.15)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            מה יש בערכה?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 font-light text-lg">שלושת מוצרי הפרימיום לחווית שינה מושלמת</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 shadow-xl transition-all duration-300 hover:border-[#C5A059]/50"
            >
              {/* Background Image - Lazy Loaded */}
              <div className="absolute inset-0 bg-neutral-900">
                {feature.image && (
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-transform duration-500 ease-out will-change-transform"
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-colors duration-300">
                       {React.cloneElement(feature.icon as React.ReactElement<any>, { 
                         className: "w-7 h-7 text-white group-hover:text-black transition-colors duration-300" 
                       })}
                    </div>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light opacity-90 group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};