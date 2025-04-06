import React, { useState, useEffect } from "react";
import { LanguageToggle } from "components/LanguageToggle";
import { useLanguageStore } from "utils/languageStore";
import { Navigation } from "components/Navigation";
import { MobileNavigation } from "components/MobileNavigation";
import { AboutSection } from "components/AboutSection";
import { AcademicSection } from "components/AcademicSection";
import { TechnicalSkillsSection } from "components/TechnicalSkillsSection";
import { ProductionsSection } from "components/ProductionsSection";
import { ContactSection } from "components/ContactSection";

export default function App() {
  const { language } = useLanguageStore();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle header styles based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    en: {
      greeting: "Hi, I'm Igor Duarte",
      subtitle: "Psychologist, researcher, and data science enthusiast with a focus on mental health",
      description: "Here you'll find a summary of my academic path, technical expertise, and ways to get in touch."
    },
    pt: {
      greeting: "Olá, sou Igor Duarte",
      subtitle: "Psicólogo, pesquisador e entusiasta de ciência de dados aplicada à saúde mental",
      description: "Aqui você encontrará um pouco sobre minha trajetória acadêmica, experiência técnica e formas de entrar em contato comigo."
    }
  };

  const activeContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed header with navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
      >
        <div className="font-bold text-xl text-teal-600">Duarte</div>
        <div className="flex items-center space-x-6">
          <Navigation className="hidden md:flex" />
          <LanguageToggle className="hover:text-teal-600 transition-colors" />
        </div>
      </header>

      {/* Mobile navigation menu */}
      <div className="fixed top-0 right-16 z-50 py-4">
        <MobileNavigation />
      </div>

      {/* Hero section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              {activeContent.greeting}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-teal-600">
              {activeContent.subtitle}
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl">
              {activeContent.description}
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
          </div>
          <div className="justify-self-center lg:justify-self-end order-first lg:order-last fade-in">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg shadow-lg overflow-hidden">
              {/* Profile portrait */}
              <img 
                src="https://lh3.googleusercontent.com/a-/ALV-UjWBIzRjnBjGEF7Le1kINTz3oTw4GHwIwB53AZvBea7eYcMGXBA0s5RhRa2SgFVo8-xkDGhlUTp-8pFTwywF13boE81W7QC4ew58FFqe5qkzjwyL5EePTswbXVaMkR6CyGcQQdS_hnkqTYuASGj5ZU3pOtQRgpq769f2Uk-KVWcPr0DCpGZ9tLLYgl5eeI9Qvc0LBpmmBHHvpJ_47fNkszK7tm7eW5GtYfqs0EbMAUOLc0FKpVAIbiVD4XWdYx2NKGnYX1JiFhxGc2CCzSZfvk-zjUXkucESgkRAKI1nZ7uxzHLnxpZIZ1Mxj7ofMUSKoxZC80pVEMX6PXfXPF_oPjKBfLKdk8d_ao5T-JjH23zhZN4Tb2qZs0nLScMkR9seH4QWvIL_FSUGxf9IOvUtkkAWNr4XSNpTMDTm40svUrCIsEC0r6--VhNPYW45SUmkrw7N8pu9GZOwY0ixWUdEEThkRuclJ0YpnlfvtUGVXHS_TkbFQrEhbIdnrlQts-Qx2cWjzF0QS_wT9fxlqtPxcOvXzf648YK4qSeXHt4q0vyT-uhk3wo80zD6IWysjGTjJZI-01jX6d3OLSXlhU-G-lHksMJKMOzIyG0fGkh6U0J63QYW81j-EgJgsu5rchLtn22aGK8GmdszecYqpi0nrUVWmkm91g5h2RwZtx-olSxw2GrdhMWa2MuZOU10goZnWs9TEiHnGFoTCHQT2U9HPwYQqfDiGDaZN7FWVOcdJompVb0HZPHbnWFa3MjRvHMnZ11Bj8uSfyWcb-XxGAITCNW6gG3ERVqYVOdgT3kdgBjKS6sSvdd72QfeBWSJ3VnZ3pgWtdFIVI_iN9xn0DJocJEYo6D_C7JAUVxTPA0xJHuEOTHChLHwmvXIEfhUM6MeF9_sFCopqU5LeCybdV3zAzgYj2iVE76r-qglWXNjXfv8VkSh1EH5AFrOSPsgall1COjYIzYoqrJqcey-VQooEUx-qE4=s576-c-no"
                alt="Igor Duarte - Professional Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empty sections with ids for navigation - will be implemented in future tasks */}
      {/* About Me section */}
      <section id="about" className="min-h-screen bg-gray-50 flex items-center justify-center py-20 md:py-28">
        <AboutSection />
      </section>
      {/* Academic Background section */}
      <section id="academic" className="min-h-screen flex items-center justify-center py-20 md:py-28">
        <AcademicSection />
      </section>
      {/* Technical Skills section */}
      <section id="skills" className="min-h-screen bg-gray-50 flex items-center justify-center py-20 md:py-28">
        <TechnicalSkillsSection />
      </section>
      {/* Productions section */}
      <section id="productions" className="min-h-screen flex items-center justify-center py-20 md:py-28">
        <ProductionsSection />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <ContactSection />
      </section>
    </div>
  );
}


