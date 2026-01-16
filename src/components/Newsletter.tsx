"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollReveal } from "./ScrollReveal";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("נרשם!");
  };

  return (
    <section id="newsletter">
      <div className="section-divider w-11/12 mx-auto" />

      <ScrollReveal>
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          רוצים לשמוע{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            עדכונים?
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          הירשמו לניוזלטר שלנו וקבלו טיפים לשיווק דיגיטלי, מגמות בתעשייה והצעות מיוחדות.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="example@email.com"
            className="bg-muted/50 dark:bg-muted/80 transition-all duration-300 focus:ring-2 focus:ring-primary/30"
            aria-label="אימייל"
            type="email"
          />
          <Button className="pulse-glow">הירשם</Button>
        </form>
      </div>
      </ScrollReveal>

      <div className="section-divider w-11/12 mx-auto" />
    </section>
  );
};
