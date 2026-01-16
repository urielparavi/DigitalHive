"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, Quote, TrendingUp } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const cards = [
  {
    id: "testimonial",
    content: (
      <Card className="w-[340px] h-[180px] drop-shadow-xl shadow-white/10 border-primary/20 bg-card">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="border-2 border-primary/30">
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>די</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">דני ישראלי</CardTitle>
            <CardDescription>@dani_israeli</CardDescription>
          </div>
          <Quote className="ms-auto text-primary/40 h-8 w-8" />
        </CardHeader>
        <CardContent className="text-muted-foreground">
          סוכנות DigitalHive הפכה את האתר שלנו למצוין תוך ימים ספורים. מקצוענים אמיתיים!
        </CardContent>
      </Card>
    ),
  },
  {
    id: "team",
    content: (
      <Card className="w-[340px] h-[320px] flex flex-col justify-center items-center drop-shadow-xl shadow-white/10 border-primary/20 bg-card">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="משתמש אווטאר"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover border-4 border-primary/30"
          />
          <CardTitle className="text-center">לאה מירנדה</CardTitle>
          <CardDescription className="font-normal text-primary">
            מפתחת פרונט-אנד
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2 text-muted-foreground">
          <p>נהניתי לראות איך רעיונות שלי הופכים לקמפיינים דיגיטליים עם תוצאות מדהימות.</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-1">
            <a
              rel="noreferrer noopener"
              href="#"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="fill-foreground w-5 h-5"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "pricing",
    content: (
      <Card className="w-[340px] h-[380px] drop-shadow-xl shadow-white/10 border-primary/20 bg-card">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            פרימיום
            <Badge variant="secondary" className="text-sm text-primary">
              הכי פופולרי
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">₪49</span>
            <span className="text-muted-foreground"> /חודש</span>
          </div>
          <CardDescription>
            מתאים לעסקים קטנים ובינוניים שרוצים לצמוח.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">בחר תוכנית</Button>
        </CardContent>
        <hr className="w-4/5 m-auto mb-4 border-primary/20" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {["4 חברי צוות", "4GB אחסון", "עד 6 עמודים", "תמיכה בעדיפות"].map((benefit) => (
              <span key={benefit} className="flex">
                <Check className="text-primary" />
                <h3 className="me-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "stats",
    content: (
      <Card className="w-[340px] h-[200px] drop-shadow-xl shadow-white/10 border-primary/20 bg-card">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
            <TrendingUp className="text-primary" />
          </div>
          <div>
            <CardTitle>תוצאות מוכחות</CardTitle>
            <CardDescription className="text-md mt-2">
              מעל 2,700 לקוחות מרוצים ו-1,800 פרויקטים שהושלמו בהצלחה.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around text-center">
            <div>
              <p className="text-2xl font-bold text-primary">2.7K+</p>
              <p className="text-sm text-muted-foreground">לקוחות</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">1.8K+</p>
              <p className="text-sm text-muted-foreground">פרויקטים</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">112</p>
              <p className="text-sm text-muted-foreground">קמפיינים</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
];

export const HeroCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex flex-col items-center justify-center relative w-[400px] h-[450px]">
      {/* אינדיקטורים */}
      <div className="absolute -bottom-8 flex gap-2 z-20">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setActiveIndex(index);
                setIsAnimating(false);
              }, 300);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* כרטיסיות */}
      <div className="relative w-full h-full flex items-center justify-center">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + cards.length) % cards.length;
          const isNext = index === (activeIndex + 1) % cards.length;

          return (
            <div
              key={card.id}
              className={`absolute transition-all duration-500 ease-out ${
                isActive
                  ? "opacity-100 scale-100 translate-x-0 z-10"
                  : isPrev
                  ? "opacity-0 scale-90 translate-x-full z-0"
                  : isNext
                  ? "opacity-0 scale-90 -translate-x-full z-0"
                  : "opacity-0 scale-75 translate-x-0 z-0"
              } ${isAnimating && isActive ? "opacity-0 scale-95" : ""}`}
            >
              {card.content}
            </div>
          );
        })}
      </div>

      {/* אפקט זוהר */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
      </div>
    </div>
  );
};
