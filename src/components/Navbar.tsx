"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { ContactModal } from "./ContactModal";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "אודות",
  },
  {
    href: "#services",
    label: "שירותים",
  },
  {
    href: "#testimonials",
    label: "לקוחות",
  },
  {
    href: "#pricing",
    label: "מחירים",
  },
  {
    href: "#faq",
    label: "שאלות נפוצות",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full border-b-border/50 bg-background/95 backdrop-blur-md animate-fade-in">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex flex-row-reverse justify-between items-center">
          {/* לוגו בצד ימין - עם flex-row-reverse מופיע ראשון מימין */}
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex items-center gap-2"
            >
              <span>DigitalHive</span>
              <Logo size={28} />
            </a>
          </NavigationMenuItem>

          {/* תפריט מובייל */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="אייקון תפריט"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] p-0 bg-gradient-to-b from-background to-muted/20 border-s-border/30">
                {/* Header with gradient */}
                <div className="p-6 pb-4 bg-gradient-to-b from-primary/5 to-transparent">
                  <SheetHeader>
                    <SheetTitle className="font-bold text-xl flex items-center gap-2 justify-center">
                      <span>DigitalHive</span>
                      <Logo size={24} />
                    </SheetTitle>
                  </SheetHeader>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-l from-transparent via-border to-transparent mx-4" />

                {/* Navigation links */}
                <nav className="flex flex-col gap-1 p-4 mt-2">
                  {routeList.map(({ href, label }: RouteProps, index) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="group py-3 px-4 text-lg font-medium text-muted-foreground hover:text-foreground rounded-xl transition-all duration-200 text-right relative overflow-hidden"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">{label}</span>
                    </a>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent">
                  <ContactModal
                    variant="default"
                    size="lg"
                    className="w-full shadow-lg shadow-primary/20"
                    showIcon={true}
                    buttonText="צור קשר"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </span>

          {/* תפריט דסקטופ - באמצע */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* כפתור צור קשר בצד שמאל - עם flex-row-reverse מופיע אחרון משמאל */}
          <div className="hidden md:flex gap-2">
            <ContactModal
              variant="secondary"
              size="default"
              className="border"
              showIcon={false}
            />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
