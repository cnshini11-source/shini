import React, { useEffect } from 'react';
import { Lock, Eye, Database, Cookie, Share2, Mail } from 'lucide-react';
import { Button } from './Button';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-12 border-b border-gray-800 pb-8">
          <Button variant="outline" onClick={onBack} className="mb-8 text-sm px-6 py-2">
            חזרה לדף הבית
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">מדיניות פרטיות</h1>
          <p className="text-[#C5A059]">עודכן לאחרונה: פברואר 2024</p>
        </div>

        <div className="space-y-12">
          
          {/* Intro */}
          <div className="bg-black/30 p-6 rounded-2xl border border-neutral-800">
            <p className="text-lg leading-relaxed">
              אנו ב-<strong>Shini Deep Sleep Pro</strong> מכבדים את פרטיותך ומחויבים להגן על המידע האישי שלך.
              מסמך זה מתאר את האופן שבו אנו אוספים, משתמשים ושומרים על המידע שלך בעת השימוש באתר ובעת ביצוע רכישה.
            </p>
          </div>

          {/* Section 1 - Information Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Database className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">1. איסוף מידע</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>
                בעת ביצוע הזמנה באתר, אנו אוספים את הפרטים הבאים הנדרשים לביצוע העסקה והמשלוח:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4 text-gray-400">
                <li>שם מלא</li>
                <li>כתובת למשלוח וחיוב</li>
                <li>כתובת דואר אלקטרוני</li>
                <li>מספר טלפון</li>
              </ul>
              <p className="text-sm mt-4 border-t border-gray-800 pt-4">
                * אנו <strong>לא</strong> שומרים פרטי כרטיסי אשראי. הסליקה מתבצעת באמצעות ספק שירותי סליקה חיצוני ומאובטח בתקן PCI-DSS המחמיר ביותר.
              </p>
            </div>
          </section>

          {/* Section 2 - Usage */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Eye className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">2. שימוש במידע</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>המידע שנאסף משמש אותנו למטרות הבאות:</p>
              <ul className="list-disc list-inside space-y-2 mr-4 text-gray-400">
                <li>עיבוד והשלמת ההזמנה שלך.</li>
                <li>משלוח המוצרים לכתובת שסיפקת.</li>
                <li>יצירת קשר במקרה של עדכונים לגבי ההזמנה או שירות לקוחות.</li>
                <li>משלוח עדכונים שיווקיים ומבצעים (רק במידה ואישרת זאת במפורש).</li>
                <li>שיפור חווית המשתמש באתר.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 - Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Cookie className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">3. עוגיות (Cookies)</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>
                האתר משתמש ב"עוגיות" (Cookies) לצורך תפעולו השוטף והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר, לאימות פרטים, וכדי להתאים את האתר להעדפותיך האישיות.
              </p>
              <p>
                ניתן לשנות את הגדרות הדפדפן שלך כדי לחסום עוגיות, אך הדבר עלול לפגוע בחווית השימוש באתר.
              </p>
            </div>
          </section>

           {/* Section 4 - Third Parties */}
           <section>
            <div className="flex items-center gap-3 mb-4">
               <Share2 className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">4. מסירת מידע לצד שלישי</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>
                אנו מתחייבים שלא להעביר את פרטיך האישיים לצדדים שלישיים, למעט במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4 text-gray-400">
                <li>לחברת השילוח לצורך ביצוע המשלוח.</li>
                <li>לחברת הסליקה לצורך אישור העסקה.</li>
                <li>במקרה של דרישה חוקית בצו בית משפט.</li>
              </ul>
              <p className="font-bold text-white mt-2">אנו לעולם לא נמכור את המידע האישי שלך למפרסמים.</p>
            </div>
          </section>

          {/* Section 5 - Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Lock className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">5. אבטחת מידע</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>
                האתר מאובטח באמצעות פרוטוקול SSL (Secure Sockets Layer) המצפין את התקשורת בין המחשב שלך לשרתי האתר. אנו נוקטים באמצעי זהירות מקובלים על מנת לשמור, ככל האפשר, על סודיות המידע.
              </p>
            </div>
          </section>

          {/* Section 6 - Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Mail className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">6. יצירת קשר</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800">
              <p className="mb-4">
                בכל שאלה בנוגע למדיניות הפרטיות או למידע האישי שלך, ניתן לפנות אלינו:
              </p>
              <div className="flex flex-col gap-2 text-white">
                 <span>דוא"ל: support@shini-sleep.co.il</span>
                 <span>טלפון: 050-0000000</span>
              </div>
            </div>
          </section>

        </div>
        
        <div className="mt-12 text-center">
            <Button onClick={onBack} className="w-full md:w-auto px-12">
                קראתי והבנתי - חזרה לאתר
            </Button>
        </div>

      </div>
    </section>
  );
};