"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 2700,
    suffix: "+",
    description: "לקוחות מרוצים",
  },
  {
    value: 1800,
    suffix: "+",
    description: "פרויקטים שהושלמו",
  },
  {
    value: 112,
    suffix: "",
    description: "קמפיינים דיגיטליים",
  },
  {
    value: 98,
    suffix: "%",
    description: "שביעות רצון",
  },
];

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
): { count: number; ref: React.RefObject<HTMLDivElement | null> } {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

function StatCounter({ value, suffix, description, delay }: StatItem & { delay: number }) {
  const { count, ref } = useCountUp(value, 2000 + delay);

  return (
    <div
      ref={ref}
      className="relative p-6 text-center group cursor-default rounded-xl bg-gradient-to-b from-muted/30 to-transparent border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative space-y-1">
        <h2 className="text-4xl sm:text-5xl font-bold stat-number transition-transform duration-300 group-hover:scale-105">
          {formatNumber(count)}{suffix}
        </h2>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export const Statistics = () => {
  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <StatCounter
            key={stat.description}
            {...stat}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};
