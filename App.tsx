import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MechanismExplainer } from './components/MechanismExplainer';
import { HowItWorks } from './components/HowItWorks';
import { HowToUse } from './components/HowToUse';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Checkout } from './components/Checkout';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { FloatingWidgets } from './components/FloatingWidgets';

function App() {
  const [view, setView] = useState<'home' | 'checkout' | 'terms' | 'privacy'>('home');

  useEffect(() => {
    // Ensure smooth scroll to top when switching views
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#C5A059] selection:text-black overflow-x-hidden">
      <Header currentView={view} onViewChange={setView} />
      
      <main className="min-h-screen">
        {view === 'home' && (
          <div className="animate-fade-in-page">
            <Hero onNavigateCheckout={() => setView('checkout')} />
            <Features />
            <MechanismExplainer />
            <HowItWorks />
            <HowToUse />
            <Reviews />
            <FAQ />
          </div>
        )}
        
        {view === 'checkout' && (
          <div className="animate-page-enter">
            <Checkout />
          </div>
        )}
        
        {view === 'terms' && (
          <div className="animate-page-enter">
            <Terms onBack={() => setView('home')} />
          </div>
        )}
        
        {view === 'privacy' && (
          <div className="animate-page-enter">
            <PrivacyPolicy onBack={() => setView('home')} />
          </div>
        )}
      </main>

      <Footer currentView={view} onViewChange={setView} />
      <FloatingWidgets />
    </div>
  );
}

export default App;