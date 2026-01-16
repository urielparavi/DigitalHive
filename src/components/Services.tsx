import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Globe, Target, Zap, Users, BarChart3, Palette } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ServiceProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const serviceList: ServiceProps[] = [
  {
    title: "בניית אתרים",
    description:
      "עיצוב ופיתוח אתרים מותאמים אישית שמייצגים את המותג שלך בצורה מקצועית.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "שיווק דיגיטלי",
    description:
      "קמפיינים ממוקדים בגוגל, פייסבוק ואינסטגרם שמביאים לידים איכותיים.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "אוטומציה שיווקית",
    description:
      "חיסכון בזמן ובמשאבים עם מערכות אוטומציה חכמות לשיווק ומכירות.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    title: "ניהול רשתות חברתיות",
    description:
      "בניית קהילה פעילה וניהול תוכן מקצועי ברשתות החברתיות.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "אנליטיקה ו-BI",
    description:
      "ניתוח מתקדם של הנתונים לקבלת החלטות מושכלות ושיפור ביצועים.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    title: "עיצוב UX/UI",
    description:
      "עיצוב חוויית משתמש מושלמת שמובילה להמרות גבוהות יותר.",
    icon: <Palette className="w-6 h-6 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <ScrollReveal>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              השירותים{" "}
            </span>
            שלנו
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            פתרונות דיגיטליים מקיפים שיעזרו לעסק שלך לצמוח ולהצליח.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="hover-lift group">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-2xl transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image
          src="/cube-leg.png"
          alt="שירותי DigitalHive"
          width={300}
          height={300}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
        />
      </div>
      </ScrollReveal>
    </section>
  );
};
