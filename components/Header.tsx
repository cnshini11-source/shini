import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView?: 'home' | 'checkout' | 'terms' | 'privacy';
  onViewChange?: (view: 'home' | 'checkout' | 'terms' | 'privacy') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView = 'home', onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setMobileMenuOpen(false);
    
    if (id === 'checkout') {
      onViewChange?.('checkout');
      window.scrollTo(0, 0);
      return;
    }

    if (currentView !== 'home') {
      onViewChange?.('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goHome = () => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onViewChange?.('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'על הערכה', id: 'features' },
    { label: 'איך זה עובד', id: 'how-it-works' },
    { label: 'ביקורות', id: 'reviews' },
    { label: 'שאלות נפוצות', id: 'faq' },
    { label: 'רכישה', id: 'checkout' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${
          isScrolled || currentView !== 'home' ? 'bg-black/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-800' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div onClick={goHome} className="cursor-pointer relative z-50">
            <h1 className="text-2xl md:text-3xl font-black tracking-widest text-gradient-gold">SHINI</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`transition-colors text-sm font-medium tracking-wide ${
                  item.id === 'checkout' 
                    ? 'text-[#C5A059] font-bold border border-[#C5A059] px-4 py-1.5 rounded-full hover:bg-[#C5A059] hover:text-black transition-all' 
                    : 'text-gray-300 hover:text-[#C5A059]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#C5A059] relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 flex items-center justify-center ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 text-center w-full px-8">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-2xl font-bold transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${item.id === 'checkout' ? 'text-[#C5A059]' : 'text-white'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};