import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "בסיסי",
    popular: 0,
    price: 0,
    description: "ייעוץ ראשוני חינם להכרת השירותים שלנו.",
    buttonText: "קבע פגישה",
    benefitList: [
      "פגישת ייעוץ חינם",
      "ניתוח נוכחות דיגיטלית",
      "המלצות ראשוניות",
      "הצעת מחיר מותאמת",
      "ללא התחייבות",
    ],
  },
  {
    title: "צמיחה",
    popular: 1,
    price: 2999,
    description: "חבילה מושלמת לעסקים קטנים ובינוניים.",
    buttonText: "התחל עכשיו",
    benefitList: [
      "בניית אתר תדמית",
      "ניהול רשתות חברתיות",
      "קמפיין גוגל בסיסי",
      "דוחות חודשיים",
      "תמיכה בשעות העבודה",
    ],
  },
  {
    title: "פרימיום",
    popular: 0,
    price: 7999,
    description: "פתרון מקיף לעסקים שרוצים לשלוט בשוק.",
    buttonText: "צור קשר",
    benefitList: [
      "אתר מתקדם עם מערכת ניהול",
      "שיווק דיגיטלי מלא",
      "אוטומציה שיווקית",
      "אנליטיקה מתקדמת",
      "תמיכה 24/7 ומנהל לקוח צמוד",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        חבילות{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          מחירים
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        חבילות מותאמות לכל גודל עסק. כל המחירים לא כוללים מע״מ.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`transition-all duration-300 hover:-translate-y-1 ${
              pricing.popular === PopularPlanType.YES
                ? "border-primary/50 shadow-lg shadow-primary/10 scale-105 lg:scale-110"
                : "hover:border-primary/30"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge className="text-sm bg-primary text-primary-foreground">
                    הכי פופולרי
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold stat-number">₪{pricing.price}</span>
                <span className="text-muted-foreground"> /חודש</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className={`w-full ${pricing.popular === PopularPlanType.YES ? "pulse-glow" : ""}`}>
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4 border-border/50" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex items-center">
                    <Check className="text-primary w-5 h-5 shrink-0" />{" "}
                    <h3 className="me-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
};
