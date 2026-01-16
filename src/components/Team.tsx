import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "עדי כהן",
    position: "מנכ\"לית ומייסדת",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "דוד לוי",
    position: "מנהל טכנולוגיות",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "נועה מזרחי",
    position: "מנהלת קריאייטיב",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "יוסי ישראלי",
    position: "מנהל שיווק דיגיטלי",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <ScrollReveal>
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          הצוות{" "}
        </span>
        שלנו
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        צוות מומחים עם ניסיון של שנים בשיווק דיגיטלי, פיתוח ועיצוב.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center hover-lift group"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover ring-4 ring-background transition-all duration-300 group-hover:ring-primary/30 group-hover:scale-105"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  מחויב להצלחת הלקוחות ולמתן שירות ברמה הגבוהה ביותר.
                </p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={`${buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })} icon-hover`}
                    >
                      <span className="sr-only">אייקון {name}</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
      </ScrollReveal>
    </section>
  );
};
