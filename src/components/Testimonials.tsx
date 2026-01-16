import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=33",
    name: "דני כהן",
    userName: "בעלים, חנות אונליין",
    comment: "מאז שעובדים עם DigitalHive, המכירות שלנו עלו ב-40%. צוות מקצועי עם תוצאות אמיתיות.",
  },
  {
    image: "https://i.pravatar.cc/150?img=47",
    name: "יעל לוי",
    userName: "מנכ\"לית, סטארטאפ טכנולוגי",
    comment: "קיבלנו אתר מדהים שמייצג את המותג שלנו בצורה מושלמת. שירות אדיב ומקצועי!",
  },
  {
    image: "https://i.pravatar.cc/150?img=52",
    name: "אורי ישראלי",
    userName: "מנהל שיווק, רשת קמעונאית",
    comment: "הקמפיינים הדיגיטליים שלהם הביאו לנו תוצאות מעבר לציפיות. ממליץ בחום!",
  },
  {
    image: "https://i.pravatar.cc/150?img=23",
    name: "מיכל אברהם",
    userName: "יזמית, עסק קטן",
    comment: "סוף סוף מצאתי סוכנות שמבינה את הצרכים של עסקים קטנים. מחירים הוגנים ותוצאות מצוינות.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-bold">
        מה{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          הלקוחות שלנו{" "}
        </span>
        אומרים
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        הצלחת הלקוחות שלנו היא ההצלחה שלנו. הנה מה שיש להם לספר על העבודה איתנו.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden hover-lift group"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/50">
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg transition-colors duration-300 group-hover:text-primary">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
      </ScrollReveal>
    </section>
  );
};
