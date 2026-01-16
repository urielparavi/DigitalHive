import { Building2, Briefcase, Store, Factory, Landmark, ShoppingBag } from "lucide-react";
import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ClientProps {
  icon: ReactNode;
  name: string;
}

const clients: ClientProps[] = [
  {
    icon: <Building2 size={34} />,
    name: "TechVision",
  },
  {
    icon: <Briefcase size={34} />,
    name: "StartupIL",
  },
  {
    icon: <Store size={34} />,
    name: "ShopMax",
  },
  {
    icon: <Factory size={34} />,
    name: "IndustriX",
  },
  {
    icon: <Landmark size={34} />,
    name: "FinanceHub",
  },
  {
    icon: <ShoppingBag size={34} />,
    name: "RetailPro",
  },
];

export const Sponsors = () => {
  return (
    <section id="clients" className="container pt-24 sm:py-32">
      <ScrollReveal>
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        לקוחות מרוצים שסומכים עלינו
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {clients.map(({ icon, name }: ClientProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
};
