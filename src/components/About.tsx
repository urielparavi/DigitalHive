import { Statistics } from "./Statistics";
import { ScrollReveal } from "./ScrollReveal";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <ScrollReveal>
      <div className="bg-muted/50 border rounded-lg py-12 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src="/pilot.png"
            alt="אודות DigitalHive"
            width={300}
            height={300}
            className="w-[300px] object-contain rounded-lg transition-transform duration-500 hover:scale-105"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  אודותינו{" "}
                </span>
                – מי אנחנו
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                אנחנו סוכנות דיגיטל חדשנית שמתמחה ביצירת פתרונות מותאמים אישית לעסקים.
                הצוות שלנו מורכב ממומחי פרונט-אנד, בק-אנד, שיווק דיגיטלי ועיצוב חוויית משתמש.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                מטרתנו היא לספק פתרונות איכותיים שמביאים ערך אמיתי ללקוחות ומסייעים להם
                לצמוח בעולם הדיגיטלי התחרותי של היום.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};
