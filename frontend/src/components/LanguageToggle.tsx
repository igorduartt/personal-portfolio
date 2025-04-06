import { useLanguageStore } from "utils/languageStore";
import { Button } from "@/components/ui/button";

export interface Props {
  className?: string;
}

export function LanguageToggle({ className = "" }: Props) {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`font-medium ${className}`}
      aria-label={`Switch to ${language === "en" ? "Portuguese" : "English"}`}
    >
      {language === "en" ? "PT" : "EN"}
    </Button>
  );
}
