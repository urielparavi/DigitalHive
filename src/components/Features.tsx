import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "עיצוב רספונסיבי",
    description:
      "האתר שלך ייראה מושלם בכל מסך – מובייל, טאבלט ודסקטופ.",
    image: "/looking-ahead.png",
  },
  {
    title: "ממשק משתמש אינטואיטיבי",
    description:
      "חוויית משתמש חלקה ופשוטה שמובילה להמרות גבוהות יותר.",
    image: "/reflecting.png",
  },
  {
    title: "תובנות מבוססות נתונים",
    description:
      "ניתוח מתקדם וBI לשיפור מתמיד של הביצועים הדיגיטליים שלך.",
    image: "/growth.png",
  },
];

const featureList: string[] = [
  "שיווק דיגיטלי",
  "בניית אתרים",
  "SEO מקצועי",
  "ניהול רשתות חברתיות",
  "קמפיינים ממומנים",
  "עיצוב UX/UI",
  "אנליטיקה מתקדמת",
  "אוטומציה שיווקית",
  "ייעוץ דיגיטלי",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <ScrollReveal>
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        היתרונות{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          שלנו
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-3 mt-4 mb-8">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm cursor-default transition-all duration-300 hover:bg-primary/20 hover:text-primary">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="hover-lift group overflow-hidden">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="w-[200px] lg:w-[300px] mx-auto transition-transform duration-500 group-hover:scale-105"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
};
