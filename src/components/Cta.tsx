import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <ScrollReveal>
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            כל הרעיונות{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              והקונספטים שלך{" "}
            </span>
            בממשק אחד
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            הפלטפורמה שלנו מאגדת את כל הכלים הדרושים לך לניהול עסק מצליח במקום אחד נוח.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:me-4 md:w-auto pulse-glow">בקש הדגמה</Button>
          <Button variant="outline" className="w-full md:w-auto glow-border">
            צפה בכל התכונות
          </Button>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};
