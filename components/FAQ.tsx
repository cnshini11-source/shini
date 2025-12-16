import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    question: "תוך כמה זמן רואים שינוי בנחירות?",
    answer: "ברוב המקרים מרגישים שיפור משמעותי כבר מהלילה הראשון. עם זאת, לגוף לוקח זמן להתרגל לשינה עם המכשיר, ולכן מומלץ להשתמש בו במשך 3-5 לילות ברציפות לקבלת התוצאה המקסימלית."
  },
  {
    question: "האם זה מתאים לכל אחד?",
    answer: "כן, הערכה תוכננה להתאים לרוב המוחלט של המבוגרים. המכשיר ופותחי הנחירות עשויים סיליקון רפואי גמיש ומגיעים במספר גדלים בתוך הערכה, כך שתוכלו למצוא את ההתאמה המושלמת עבורכם."
  },
  {
    question: "איך מנקים את המוצרים?",
    answer: "הניקוי פשוט מאוד. מומלץ לשטוף את חלקי הסיליקון במים פושרים עם מעט סבון עדין לאחר כל שימוש. יש לייבש לחלוטין באוויר לפני החזרה לקופסה. את כיסוי העיניים ניתן לנקות עם מטלית לחה."
  },
  {
    question: "תוך כמה זמן המשלוח מגיע?",
    answer: "אנו שולחים את ההזמנות באמצעות שליח עד הבית. זמן האספקה הוא בדרך כלל בין 2 ל-4 ימי עסקים לרוב חלקי הארץ."
  },
  {
    question: "יש אחריות?",
    answer: "בוודאי. אנו מעניקים אחריות מלאה של 12 חודשים על המכשיר ועל הקופסה כנגד פגמים בייצור. אנחנו בטוחים באיכות המוצר שלנו."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">שאלות נפוצות</h2>
          <p className="text-gray-400">כל מה שרציתם לדעת על Shini Deep Sleep Pro</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`border border-neutral-800 rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-neutral-900 border-[#C5A059]' : 'bg-black hover:border-gray-700'}`}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
                onClick={() => toggleIndex(index)}
              >
                <span className={`text-lg font-medium ${openIndex === index ? 'text-[#C5A059]' : 'text-white'}`}>
                  {item.question}
                </span>
                {openIndex === index ? <Minus className="text-[#C5A059]" /> : <Plus className="text-gray-500" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-neutral-800/50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};