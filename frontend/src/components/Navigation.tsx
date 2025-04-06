import { useLanguageStore } from "utils/languageStore";
import { useSmoothScroll } from "utils/useSmoothScroll";

export interface Props {
  className?: string;
}

export function Navigation({ className = "" }: Props) {
  const { language } = useLanguageStore();
  const { scrollToElement } = useSmoothScroll();

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToElement(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
    // Navigate on Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToElement(href);
    }
  };

  return (
    <nav className={`flex space-x-6 ${className}`} aria-label="Main Navigation">
      {activeNavItems.map((item) => (
        <a
          key={item.href}
          href={`#${item.href}`}
          className="text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          onClick={(e) => handleClick(e, item.href)}
          onKeyDown={(e) => handleKeyDown(e, item.href)}
          role="menuitem"
          tabIndex={0}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
