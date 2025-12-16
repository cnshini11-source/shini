import React, { useEffect } from 'react';
import { Shield, FileText, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface TermsProps {
  onBack: () => void;
}

export const Terms: React.FC<TermsProps> = ({ onBack }) => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">תנאי שימוש ותקנון אתר</h1>
          <p className="text-[#C5A059]">עודכן לאחרונה: פברואר 2024</p>
        </div>

        <div className="space-y-12">
          
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <FileText className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">1. כללי</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>
                ברוכים הבאים לאתר Shini Deep Sleep Pro (להלן: "האתר"). האתר משמש כחנות וירטואלית למכירת מוצרי שינה ואיכות חיים.
              </p>
              <p>
                הוראות תקנון זה יחולו על כל שימוש ורכישה שיעשו על ידך באתר, ומהווים את הבסיס המשפטי לכל דיון בינך לבין מפעיל האתר. גלישה באתר ו/או רכישת מוצר בו מהווה את הסכמתך לקבל ולנהוג על פי התקנון.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <Shield className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">2. אבטחת מידע ופרטיות</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <p>
                אנו לוקחים את פרטיותך ברצינות רבה. האתר מאובטח באמצעות פרוטוקול SSL מתקדם להצפנת מידע.
              </p>
              <p>
                פרטי האשראי של המשתמשים אינם נשמרים במאגרי המידע של האתר אלא מועברים ישירות לחברת הסליקה המאושרת על פי תקן PCI-DSS.
              </p>
              <p>
                האתר מתחייב לא לעשות שימוש בפרטי הלקוחות הרשומים באתר אלא לצרכי תפעול האתר בלבד, ועל מנת לאפשר את ביצוע ההזמנה והעברת אינפורמציה ללקוח.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <RefreshCw className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">3. מדיניות משלוחים וביטולים</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <h3 className="font-bold text-white text-lg">אספקה ומשלוח</h3>
              <p>
                זמני האספקה להם אנו מתחייבים הם עד 7 ימי עסקים (ובדרך כלל בין 2-4 ימים). המשלוח מתבצע באמצעות שליח עד הבית.
              </p>
              
              <h3 className="font-bold text-white text-lg mt-6">ביטול עסקה</h3>
              <p>
                האמור בסעיף זה כפוף לחוק הגנת הצרכן התשמ"א 1981.
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>ביטול עסקה ייעשה תוך 14 ימים מקבלת המוצר, ובתנאי שהמוצר לא נפתח ושלא נעשה בו שימוש.</li>
                <li>
                  <strong className="text-white">הערה חשובה:</strong> בשל אופיים ההיגייני של מוצרי "Shini Deep Sleep Pro" (מוצרים הבאים במגע עם הגוף/פה), לא ניתן להחזיר או להחליף מוצר שאריזתו נפתחה, בהתאם להוראות משרד הבריאות וחוק הגנת הצרכן.
                </li>
                <li>במקרה של ביטול עקב פגם במוצר, החברה תישא בהוצאות המשלוח והלקוח יזוכה במלוא הסכום או יקבל מוצר חלופי.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
               <AlertCircle className="text-[#C5A059]" />
               <h2 className="text-2xl font-bold text-white">4. הגבלת אחריות רפואית</h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-neutral-800 border-l-4 border-l-[#C5A059] space-y-4">
              <p className="font-bold text-white">
                המוצרים הנמכרים באתר אינם תרופה ואינם מיועדים להחליף ייעוץ רפואי מקצועי.
              </p>
              <p>
                מכשיר ה-Shini נועד לסייע בפתיחת דרכי נשימה ובמניעת נחירות. עם זאת, נחירות עשויות להיות סימפטום לבעיות רפואיות אחרות (כגון דום נשימה בשינה). במידה והנך סובל/ת מבעיות רפואיות כרוניות, מומלץ להיוועץ ברופא לפני השימוש.
              </p>
              <p>
                החברה לא תהיה אחראית לכל נזק ישיר או עקיף שייגרם כתוצאה משימוש שלא בהתאם להוראות היצרן.
              </p>
            </div>
          </section>

        </div>
        
        <div className="mt-12 text-center">
            <Button onClick={onBack} className="w-full md:w-auto px-12">
                אני מסכים/ה - חזרה לרכישה
            </Button>
        </div>

      </div>
    </section>
  );
};
