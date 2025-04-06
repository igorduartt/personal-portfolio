import React, { useState } from "react";
import { useLanguageStore } from "utils/languageStore";
import { useSmoothScroll } from "utils/useSmoothScroll";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNavigation() {
  const { language } = useLanguageStore();
  const { scrollToElement } = useSmoothScroll();
  const [open, setOpen] = useState(false);

  const navItems = {
    en: [
      { label: "Home", href: "home" },
      { label: "About", href: "about" },
      { label: "Academic", href: "academic" },
      { label: "Skills", href: "skills" },
      { label: "Contact", href: "contact" }
    ],
    pt: [
      { label: "Início", href: "home" },
      { label: "Sobre", href: "about" },
      { label: "Acadêmico", href: "academic" },
      { label: "Habilidades", href: "skills" },
      { label: "Contato", href: "contact" }
    ]
  };

  const activeNavItems = navItems[language];

  const handleNavigation = (href: string) => {
    scrollToElement(href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-800"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px]">
        <nav className="flex flex-col space-y-4 mt-8" aria-label="Mobile Navigation">
          {activeNavItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="text-gray-600 hover:text-teal-600 font-medium text-lg py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.href);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNavigation(item.href);
                }
              }}
              role="menuitem"
              tabIndex={0}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
