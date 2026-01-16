import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { ContactModal } from "./ContactModal";
import { Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="hero-bg min-h-[calc(100vh-4rem)]">
      {/* Background decorative elements */}
      <div className="hero-grid" />
      <div className="hero-shape hero-shape-1" />
      <div className="hero-shape hero-shape-2" />
      <div className="hero-shape hero-shape-3" />

      <div className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative z-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold animate-fade-in">
            <h1 className="inline">
              סוכנות דיגיטל מודרנית –{" "}
              <span className="inline bg-gradient-to-l from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text gradient-text-animate">
                DigitalHive
              </span>
            </h1>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 animate-fade-in-delay-1">
            בנה את הנוכחות הדיגיטלית שלך בקלות ובמהירות עם כל הכלים לפרויקט מצליח.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse animate-fade-in-delay-2">
            <a
              rel="noreferrer noopener"
              href="#newsletter"
              className={`w-full md:w-1/3 ${buttonVariants({
                size: "lg",
              })} pulse-glow`}
            >
              הישארו מעודכנים
              <Mail className="ms-2 w-4 h-4" />
            </a>

            <ContactModal className="w-full md:w-1/3" />
          </div>
        </div>

        {/* כרטיסים עם אנימציה */}
        <div className="z-10 animate-fade-in-delay-3">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};
