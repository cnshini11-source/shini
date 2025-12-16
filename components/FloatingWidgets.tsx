import React, { useState } from 'react';
import { 
  Accessibility, 
  ZoomIn, 
  Sun, 
  Underline, 
  X, 
  Type, 
  EyeOff, 
  PauseCircle, 
  RotateCcw 
} from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [a11yOpen, setA11yOpen] = useState(false);
  
  // State for active toggles to show visual feedback
  const [activeFeatures, setActiveFeatures] = useState<{ [key: string]: boolean }>({
    largeText: false,
    xlText: false,
    contrast: false,
    grayscale: false,
    links: false,
    readableFont: false,
    noMotion: false,
  });

  const toggleClass = (className: string, key: string) => {
    const html = document.documentElement;
    
    // Logic for Text Sizing (Mutually exclusive)
    if (key === 'largeText') {
      if (activeFeatures.largeText) {
        html.classList.remove('a11y-large-text');
        setActiveFeatures(prev => ({ ...prev, largeText: false }));
      } else {
        html.classList.remove('a11y-xl-text');
        html.classList.add('a11y-large-text');
        setActiveFeatures(prev => ({ ...prev, largeText: true, xlText: false }));
      }
      return;
    }
    
    if (key === 'xlText') {
      if (activeFeatures.xlText) {
        html.classList.remove('a11y-xl-text');
        setActiveFeatures(prev => ({ ...prev, xlText: false }));
      } else {
        html.classList.remove('a11y-large-text');
        html.classList.add('a11y-xl-text');
        setActiveFeatures(prev => ({ ...prev, xlText: true, largeText: false }));
      }
      return;
    }

    // Standard Toggles
    if (html.classList.contains(className)) {
      html.classList.remove(className);
      setActiveFeatures(prev => ({ ...prev, [key]: false }));
    } else {
      html.classList.add(className);
      setActiveFeatures(prev => ({ ...prev, [key]: true }));
    }
  };

  const resetAccessibility = () => {
    const html = document.documentElement;
    html.classList.remove(
      'a11y-large-text', 
      'a11y-xl-text', 
      'a11y-contrast', 
      'a11y-links', 
      'a11y-grayscale',
      'a11y-font',
      'a11y-no-motion'
    );
    setActiveFeatures({
      largeText: false,
      xlText: false,
      contrast: false,
      grayscale: false,
      links: false,
      readableFont: false,
      noMotion: false,
    });
  };

  const FeatureButton = ({ 
    icon: Icon, 
    label, 
    isActive, 
    onClick 
  }: { 
    icon: any, 
    label: string, 
    isActive: boolean, 
    onClick: () => void 
  }) => (
    <button 
      onClick={onClick} 
      className={`w-full text-right flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all duration-200 border ${
        isActive 
          ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.3)]' 
          : 'bg-neutral-800 text-gray-300 border-neutral-700 hover:bg-neutral-700 hover:text-white hover:border-neutral-600'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        {label}
      </div>
      {isActive && <div className="w-2 h-2 rounded-full bg-black shadow-sm"></div>}
    </button>
  );

  return (
    <>
      {/* --- RIGHT SIDE: WhatsApp --- */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://wa.me/972500000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-500 group flex items-center gap-0 hover:gap-3 overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="text-white flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.272-.57-.421M12 0C5.373 0 0 5.373 0 12c0 2.125.55 4.125 1.5 5.85L.5 23.5l5.8-1c1.65.9 3.55 1.5 5.7 1.5 6.627 0 12-5.373 12-12S18.627 0 12 0m0 22c-1.838 0-3.565-.494-5.05-1.35l-.365-.21-3.75.65.65-3.65-.225-.375C2.45 15.5 2 13.8 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10"/>
          </svg>
          <span className="max-w-0 group-hover:max-w-[150px] transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 font-bold text-lg">
            דברו איתנו
          </span>
        </a>
      </div>

      {/* --- LEFT SIDE: Accessibility (Centered Tab) --- */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50 flex items-start">
        
        {/* Trigger Tab - "Curtain" style (Dark Theme) */}
        <button 
          onClick={() => setA11yOpen(!a11yOpen)}
          className={`
            bg-neutral-900/95 backdrop-blur-md p-3 pr-4 rounded-r-xl shadow-[4px_0_20px_rgba(0,0,0,0.6)] 
            hover:bg-black hover:pr-5 transition-all duration-300 
            border-y border-r border-neutral-800 hover:border-[#C5A059]/40 flex items-center justify-center
            ${a11yOpen ? 'bg-black border-[#C5A059]/40' : ''}
          `}
          aria-label="פתח תפריט נגישות"
          title="תפריט נגישות"
        >
          <Accessibility size={28} className="text-blue-500" />
        </button>

        {/* Menu Panel - Dark Theme */}
        {a11yOpen && (
          <div className="ml-2 bg-neutral-900 text-white rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] w-80 border border-[#C5A059]/20 overflow-hidden flex flex-col animate-in fade-in slide-in-from-left-4 duration-300 max-h-[80vh]">
             
             {/* Header */}
             <div className="bg-black text-white p-4 flex justify-between items-center shrink-0 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                   <Accessibility size={20} className="text-blue-500" />
                   <span className="font-bold text-lg">תפריט נגישות</span>
                </div>
                <button 
                  onClick={() => setA11yOpen(false)} 
                  className="hover:bg-neutral-800 p-1 rounded transition-colors text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
             </div>

             {/* Content */}
             <div className="p-4 space-y-3 overflow-y-auto custom-scrollbar">
                
                <div className="grid grid-cols-2 gap-2">
                  <FeatureButton 
                    icon={ZoomIn} 
                    label="טקסט גדול" 
                    isActive={activeFeatures.largeText}
                    onClick={() => toggleClass('a11y-large-text', 'largeText')} 
                  />
                  <FeatureButton 
                    icon={ZoomIn} 
                    label="טקסט ענק" 
                    isActive={activeFeatures.xlText}
                    onClick={() => toggleClass('a11y-xl-text', 'xlText')} 
                  />
                </div>

                <FeatureButton 
                  icon={Sun} 
                  label="ניגודיות גבוהה" 
                  isActive={activeFeatures.contrast}
                  onClick={() => toggleClass('a11y-contrast', 'contrast')} 
                />

                <FeatureButton 
                  icon={EyeOff} 
                  label="גווני אפור" 
                  isActive={activeFeatures.grayscale}
                  onClick={() => toggleClass('a11y-grayscale', 'grayscale')} 
                />

                <FeatureButton 
                  icon={Underline} 
                  label="הדגשת קישורים" 
                  isActive={activeFeatures.links}
                  onClick={() => toggleClass('a11y-links', 'links')} 
                />

                <FeatureButton 
                  icon={Type} 
                  label="פונט קריא (Arial)" 
                  isActive={activeFeatures.readableFont}
                  onClick={() => toggleClass('a11y-font', 'readableFont')} 
                />

                <FeatureButton 
                  icon={PauseCircle} 
                  label="עצור אנימציות" 
                  isActive={activeFeatures.noMotion}
                  onClick={() => toggleClass('a11y-no-motion', 'noMotion')} 
                />

                <div className="pt-2 mt-2 border-t border-neutral-800">
                  <button 
                    onClick={resetAccessibility} 
                    className="w-full py-2 flex items-center justify-center gap-2 text-red-400 font-medium hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <RotateCcw size={16} />
                    איפוס הגדרות
                  </button>
                </div>

             </div>
          </div>
        )}
      </div>
    </>
  );
};