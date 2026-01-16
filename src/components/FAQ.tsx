"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "./ScrollReveal";
import { ContactModal } from "./ContactModal";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "כמה זמן לוקח לבנות אתר?",
    answer: "תלוי במורכבות הפרויקט. אתר תדמית בסיסי יכול להיות מוכן תוך 2-3 שבועות, בעוד פרויקטים מורכבים יותר יכולים לקחת 1-2 חודשים.",
    value: "item-1",
  },
  {
    question: "האם אתם מציעים תחזוקה שוטפת?",
    answer: "כן! אנחנו מציעים חבילות תחזוקה חודשיות שכוללות עדכוני אבטחה, גיבויים, ותמיכה טכנית.",
    value: "item-2",
  },
  {
    question: "איך מתחילים לעבוד איתכם?",
    answer: "פשוט צרו קשר דרך הטופס או התקשרו אלינו. נקבע פגישת ייעוץ חינם להבנת הצרכים שלכם ונציע פתרון מותאם.",
    value: "item-3",
  },
  {
    question: "האם אתם עובדים עם עסקים קטנים?",
    answer: "בהחלט! יש לנו חבילות המותאמות לכל גודל עסק, מפרילנסרים ועד חברות גדולות.",
    value: "item-4",
  },
  {
    question: "מה כולל שירות השיווק הדיגיטלי?",
    answer: "השירות כולל ניהול קמפיינים בגוגל ופייסבוק, אופטימיזציה למנועי חיפוש (SEO), ניהול רשתות חברתיות, ודוחות ביצועים חודשיים.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <ScrollReveal>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          שאלות{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            נפוצות
          </span>
        </h2>

        <p className="text-xl text-muted-foreground text-center mb-8">
          מצאו תשובות לשאלות הנפוצות ביותר שלנו
        </p>

        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-right">{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-3">עדיין יש לך שאלות?</p>
          <ContactModal
            variant="outline"
            size="default"
            buttonText="צור קשר"
            showIcon={true}
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          />
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};
