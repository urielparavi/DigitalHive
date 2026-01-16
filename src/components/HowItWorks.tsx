import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, Settings, TrendingUp } from "lucide-react";
import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface StepProps {
  icon: ReactNode;
  title: string;
  description: string;
  step: string;
}

const steps: StepProps[] = [
  {
    step: "01",
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: "פגישה ראשונית",
    description:
      "נבין את הצרכים והחזון שלך, נגדיר יעדים ונבנה תכנית עבודה מותאמת.",
  },
  {
    step: "02",
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: "תכנון והטמעה",
    description:
      "נבנה אסטרטגיה מותאמת וניישם פתרונות דיגיטליים מתקדמים לעסק שלך.",
  },
  {
    step: "03",
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "תוצאות ומעקב",
    description:
      "נעקוב אחרי הצלחת הקמפיינים ונבצע אופטימיזציה להשגת תוצאות מקסימליות.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-bold">
        איך זה{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          עובד{" "}
        </span>
        – מדריך של 3 שלבים
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        תהליך פשוט ויעיל שיעזור לך לבנות נוכחות דיגיטלית מנצחת.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ icon, title, description, step }: StepProps) => (
          <Card key={title} className="bg-muted/50 relative hover-lift group">
            <div className="absolute -top-4 right-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-110">
              {step}
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="grid gap-4 place-items-center">
                <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
};
