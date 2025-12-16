import React, { useState } from 'react';
import { Button } from './Button';
import { ShieldCheck, Truck, RefreshCw, Lock } from 'lucide-react';

export const Checkout: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<string>('כרטיס אשראי');
  const price = 219;
  
  const PRODUCT_IMAGE_URL = "https://i.imgur.com/R4A8pSJ.png";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a real payment processor
    alert('תודה על הזמנתך! (זוהי הדגמה - ההזמנה נקלטה במערכת)');
  };

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Product Summary */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
             <div className="text-center lg:text-right">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">השלימו את ההזמנה</h2>
                <p className="text-gray-400">הצטרפו לאלפי לקוחות שישנים טוב יותר בלילה.</p>
             </div>

             <div className="bg-black p-4 md:p-6 rounded-2xl border border-neutral-800 flex flex-row gap-4 md:gap-6 items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
                   <img 
                      src={PRODUCT_IMAGE_URL}
                      alt="Shini Deep Sleep Pro" 
                      className="w-full h-full object-cover"
                   />
                </div>
                <div className="flex-1 text-right">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">Shini Deep Sleep Pro</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-3">ערכת שינה מלאה: מכשיר חכם, כיסוי עיניים, פותחי נחירות.</p>
                    
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center bg-neutral-900 border border-gray-700 rounded-lg">
                            <button 
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="px-3 py-1 text-white hover:bg-gray-800 transition text-lg w-10 h-8 flex items-center justify-center"
                              type="button"
                              aria-label="הפחת כמות"
                            >-</button>
                            <span className="px-3 py-1 text-white font-mono w-8 text-center">{quantity}</span>
                            <button 
                              onClick={() => setQuantity(quantity + 1)}
                              className="px-3 py-1 text-white hover:bg-gray-800 transition text-lg w-10 h-8 flex items-center justify-center"
                              type="button"
                              aria-label="הוסף כמות"
                            >+</button>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-[#C5A059]">
                           ₪{price * quantity}
                        </div>
                    </div>
                </div>
             </div>

             {/* Trust Badges - Grid for mobile */}
             <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 bg-neutral-800/50 p-2 rounded-lg">
                   <ShieldCheck className="text-[#C5A059] flex-shrink-0" size={18} />
                   <span>אחריות לשנה</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 bg-neutral-800/50 p-2 rounded-lg">
                   <Truck className="text-[#C5A059] flex-shrink-0" size={18} />
                   <span>משלוח מהיר</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 bg-neutral-800/50 p-2 rounded-lg">
                   <Lock className="text-[#C5A059] flex-shrink-0" size={18} />
                   <span>תשלום מאובטח</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 bg-neutral-800/50 p-2 rounded-lg">
                   <RefreshCw className="text-[#C5A059] flex-shrink-0" size={18} />
                   <span>מדיניות החזרים</span>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-black p-6 md:p-8 rounded-2xl border border-[#C5A059]/30 shadow-[0_0_50px_rgba(197,160,89,0.05)] order-2 lg:order-2">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">פרטי משלוח</h3>
            
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-sm text-gray-400">שם מלא</label>
                   <input 
                     type="text" 
                     name="name"
                     autoComplete="name"
                     className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all placeholder-gray-600" 
                     placeholder="ישראל ישראלי" 
                     required 
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-sm text-gray-400">טלפון</label>
                   <input 
                     type="tel" 
                     name="phone"
                     autoComplete="tel"
                     inputMode="numeric"
                     className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all placeholder-gray-600" 
                     placeholder="050-0000000" 
                     dir="ltr"
                     style={{ textAlign: 'right' }}
                     required 
                   />
                </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm text-gray-400">אימייל לקבלה חשבונית</label>
                 <input 
                   type="email" 
                   name="email"
                   autoComplete="email"
                   inputMode="email"
                   className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all placeholder-gray-600" 
                   placeholder="email@example.com" 
                   dir="ltr"
                   style={{ textAlign: 'right' }}
                   required 
                 />
              </div>

              <div className="grid grid-cols-3 gap-4">
                 <div className="col-span-2 space-y-2">
                    <label className="text-sm text-gray-400">עיר</label>
                    <input 
                      type="text" 
                      name="city"
                      autoComplete="address-level2"
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all" 
                      required 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm text-gray-400">מס' בית</label>
                    <input 
                      type="text" 
                      name="houseNumber"
                      autoComplete="address-line2"
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all" 
                      required 
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm text-gray-400">כתובת (רחוב)</label>
                 <input 
                   type="text" 
                   name="street"
                   autoComplete="street-address"
                   className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all" 
                   required 
                 />
              </div>

               <div className="space-y-2">
                 <label className="text-sm text-gray-400">הערות לשליח (קומה, קוד כניסה...)</label>
                 <textarea className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:outline-none transition-all h-20 resize-none"></textarea>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-800">
                 <div className="text-sm text-gray-400 mb-3">בחר אמצעי תשלום</div>
                 <div className="grid grid-cols-3 gap-3 mb-6">
                    {['כרטיס אשראי', 'Bit', 'PayPal'].map((method) => (
                      <div 
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        className={`py-3 px-1 rounded-lg text-center text-sm border cursor-pointer transition-all duration-300 select-none ${
                          paymentMethod === method 
                            ? 'bg-[#C5A059]/10 border-[#C5A059] text-[#C5A059] font-bold shadow-[0_0_10px_rgba(197,160,89,0.2)]' 
                            : 'bg-neutral-800 border-neutral-700 text-gray-400 hover:bg-neutral-700'
                        }`}
                      >
                        {method}
                      </div>
                    ))}
                 </div>

                 <Button type="submit" className="w-full text-xl py-4 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                    שליחת הזמנה - ₪{price * quantity}
                 </Button>

                 <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-600">
                    <Lock size={12} />
                    <span>האתר מאובטח בתקן PCI DSS המחמיר ביותר</span>
                 </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};