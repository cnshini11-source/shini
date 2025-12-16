import React from 'react';
import { Instagram, Facebook, Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  currentView?: 'home' | 'checkout' | 'terms' | 'privacy';
  onViewChange?: (view: 'home' | 'checkout' | 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentView, onViewChange }) => {
  const handleNavigation = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onViewChange?.('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onViewChange?.('terms');
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onViewChange?.('privacy');
  };

  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8 text-center md:text-right">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-black tracking-widest text-[#C5A059] mb-4">SHINI</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              אנחנו ב-Shini מאמינים ששינה טובה היא הבסיס לחיים טובים. הערכה שלנו פותחה כדי לתת לכם ולבני הזוג שלכם שקט נפשי (ושינה שקטה).
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" onClick={(e) => handleNavigation('features', e)} className="hover:text-[#C5A059] transition-colors">על הערכה</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNavigation('how-it-works', e)} className="hover:text-[#C5A059] transition-colors">איך זה עובד</a></li>
              <li><a href="#reviews" onClick={(e) => handleNavigation('reviews', e)} className="hover:text-[#C5A059] transition-colors">ביקורות</a></li>
              <li><a href="#faq" onClick={(e) => handleNavigation('faq', e)} className="hover:text-[#C5A059] transition-colors">שאלות נפוצות</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">משפטיות</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" onClick={handleTermsClick} className="hover:text-[#C5A059] transition-colors">תנאי שימוש</a></li>
              <li><a href="#" onClick={handlePrivacyClick} className="hover:text-[#C5A059] transition-colors">מדיניות פרטיות</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">מדיניות החזרים</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">הצהרת נגישות</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">צרו קשר</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} /> support@shini-sleep.co.il
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} /> 050-0000000
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MessageCircle size={16} /> זמינים בווצאפ
              </li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
               <a href="https://www.instagram.com/shin_sleep.pro?igsh=cGhpMGJ0ZGJ1Z2s4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C5A059]"><Instagram size={20} /></a>
               <a href="#" className="text-gray-500 hover:text-[#C5A059]"><Facebook size={20} /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 Shini Deep Sleep Pro. כל הזכויות שמורות.</p>
          <p>נבנה בסטנדרט הגבוה ביותר.</p>
        </div>
      </div>
    </footer>
  );
};