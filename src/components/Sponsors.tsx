import { Building2, Briefcase, Store, Factory, Landmark, ShoppingBag } from "lucide-react";
import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ClientProps {
  icon: ReactNode;
  name: string;
}

const clients: ClientProps[] = [
  {
    icon: <Building2 size={28} />,
    name: "TechVision",
  },
  {
    icon: <Briefcase size={28} />,
    name: "StartupIL",
  },
  {
    icon: <Store size={28} />,
    name: "ShopMax",
  },
  {
    icon: <Factory size={28} />,
    name: "IndustriX",
  },
  {
    icon: <Landmark size={28} />,
    name: "FinanceHub",
  },
  {
    icon: <ShoppingBag size={28} />,
    name: "RetailPro",
  },
];

export const Sponsors = () => {
  return (
    <section id="clients" className="container pt-24 sm:py-32">
      <ScrollReveal>
      <h2 className="text-center text-md lg:text-xl font-bold mb-10 text-primary">
        לקוחות מרוצים שסומכים עלינו
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {clients.map(({ icon, name }: ClientProps) => (
          <div
            key={name}
            className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 cursor-default"
          >
            <span className="text-primary/70 group-hover:text-primary transition-colors duration-300">
              {icon}
            </span>
            <h3 className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {name}
            </h3>
          </div>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
};
