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
    <header className="sticky border-b-[1px] top-0 z-40 w-full border-b-slate-700 bg-background animate-fade-in">
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
              <SheetTrigger className="px-2" aria-label="אייקון תפריט">
                <Menu className="flex md:hidden h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl flex items-center gap-2 justify-center">
                    <span>DigitalHive</span>
                    <Logo size={24} />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <ContactModal
                    variant="secondary"
                    size="default"
                    className="w-[110px] border"
                    showIcon={false}
                  />
                </nav>
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
