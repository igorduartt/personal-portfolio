import React, { useEffect, useRef } from "react";
import { useLanguageStore } from "utils/languageStore";
import { DecorativeElement } from "components/DecorativeElement";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

/**
 * AcademicSection Component
 * 
 * A bilingual timeline showcasing Igor's academic achievements with fade-in animations.
 * 
 * Features:
 * - Bilingual support (English/Portuguese) using the language store
 * - Vertical timeline layout for visual hierarchy of academic history
 * - Scroll-triggered fade-in animations with staggered delays
 * - Responsive design for all screen sizes
 * - Accessibility features including keyboard navigation
 * - Interactive elements with subtle hover effects
 * - Typography that follows the design guidelines (bold headers, light body text)
 */
export interface Props {
  className?: string;
}

interface TimelineItem {
  title: string;
  description?: string;
  year?: string;
  highlight?: boolean;
  icon?: string;
}

export function AcademicSection({ className = "" }: Props) {
  const { language } = useLanguageStore();
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  // Bilingual content
  const content = {
    en: {
      title: "Academic Background",
      ariaLabel: "Timeline of academic achievements",
      items: [
        {
          title: "Bachelor's degree in Psychology",
          year: "2021",
          icon: "🎓"
        },
        {
          title: "Master's in Psychiatry and Behavioral Sciences",
          description: "Federal University of Rio Grande do Sul",
          year: "2023",
          icon: "🔬",
          highlight: true
        },
        {
          title: "PhD Student in Psychiatry",
          description: "University of São Paulo",
          year: "Current",
          icon: "🧠",
          highlight: true
        },
        {
          title: "Data analysis and LLM consultant.",
          year: "Current",
          icon: "💻"
        },
        {
          title: "Donald Cohen Fellow at IACAPAP Congress",
          description: "2024",
          icon: "🌟",
          highlight: true
        },
        {
          title: "Researcher CISM/USP",
          year: "Current",
          icon: "🔄"
        },
        {
          title: "Research experience",
          description: "Neuroimaging, ADHD, predict models, and data science applied to psychiatry",
          icon: "💻"
        }
      ]
    },
    pt: {
      title: "Formação Acadêmica",
      ariaLabel: "Linha do tempo de conquistas acadêmicas",
      items: [
        {
          title: "Graduação em Psicologia",
          year: "2021",
          icon: "🎓"
        },
        {
          title: "Mestrado em Psiquiatria e Ciências do Comportamento",
          description: "Universidade Federal do Rio Grande do Sul",
          year: "2023",
          icon: "🔬",
          highlight: true
        },
        {
          title: "Doutorando em Psiquiatria",
          description: "Universidade de São Paulo",
          year: "Atual",
          icon: "🧠",
          highlight: true
        },
        {
          title: "Consultor de análise de dados e LLM",
          year: "Atual",
          icon: "💻"
        },
        {
          title: "Donald Cohen Fellow no Congresso da IACAPAP",
          description: "2024",
          icon: "🌟",
          highlight: true
        },
        {
          title: "Pesquisador no CISM/USP",
          year: "Atual",
          icon: "🔄"
        },
        {
          title: "Experiência com pesquisa",
          description: "Neuroimagem, TDAH, modelos preditivos em psiquiatria e ciência de dados aplicada à psiquiatria",
          icon: "💻"
        }
      ]
    }
  };

  const activeContent = content[language];

  useEffect(() => {
    // IntersectionObserver to trigger animations when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the visible class to trigger the animation
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Observe all elements in the refs array
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Cleanup observer on unmount
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextElement = document.getElementById(`timeline-item-${index + 1}`);
      if (nextElement) nextElement.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevElement = document.getElementById(`timeline-item-${index - 1}`);
      if (prevElement) prevElement.focus();
    }
  };

  return (
    <div className={`max-w-7xl w-full px-6 sm:px-8 lg:px-12 ${className} relative`}>
      {/* Decorative elements - positioned absolutely and only visible on large screens */}
      <DecorativeElement 
        variant="square" 
        className="w-48 h-48 -top-20 -left-10 opacity-10 hidden lg:block" 
        color="bg-teal-500/20"
      />
      <DecorativeElement 
        variant="dot-grid" 
        className="top-40 -right-10 opacity-40 hidden lg:block" 
        color="bg-gray-300"
      />
      <DecorativeElement 
        variant="circle" 
        className="w-64 h-64 -bottom-40 left-40 opacity-10 hidden lg:block" 
        color="bg-gray-400/20"
      />

      <div className="relative z-10">
        {/* Section heading with accent bar */}
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="fade-in-element fade-delay-1 space-y-3 mb-16"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {activeContent.title}
          </h2>
        </div>

        {/* Timeline */}
        <div 
          className="space-y-0 max-w-3xl relative pl-12 sm:pl-14 md:pl-16 ml-0 sm:ml-4 md:ml-8" 
          role="region" 
          aria-label={activeContent.ariaLabel}
        >
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-teal-500 via-teal-400/50 to-transparent"></div>
          
          {/* Timeline items */}
          {activeContent.items.map((item, index) => (
            <div 
              key={index}
              id={`timeline-item-${index}`}
              ref={(el) => (elementsRef.current[index + 1] = el)}
              className={`fade-in-element fade-delay-${Math.min(index + 2, 8)} relative pb-12 last:pb-0 timeline-item`}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="article"
              aria-labelledby={`timeline-title-${index}`}
            >
              {/* Timeline dot with icon */}
              <div 
                className={`absolute -left-[24px] sm:-left-[32px] top-0 mt-1 flex items-center justify-center w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] rounded-full 
                  ${item.highlight ? 'bg-teal-500 shadow-md shadow-teal-500/30' : 'bg-gray-200 border border-gray-300'} 
                  group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              >
                <span className="text-[8px] sm:text-[10px]" aria-hidden="true">{item.icon}</span>
              </div>
              
              {/* Content */}
              <div className="space-y-2 relative transition-all duration-300 ease-in-out group hover:translate-x-1">
                {/* Year badge if available */}
                {item.year && (
                  <span className="absolute -left-[68px] sm:-left-[76px] top-0 mt-0.5 hidden sm:inline-block">
                    <Badge variant="outline" className="text-xs font-normal text-gray-500 bg-white/80 border-gray-200 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors duration-300">
                      {item.year}
                    </Badge>
                  </span>
                )}
                
                <div className="flex items-start">
                  <h3 
                    id={`timeline-title-${index}`}
                    className="text-xl font-bold text-gray-800 tracking-tight group-hover:text-teal-600 transition-colors duration-300"
                  >
                    {item.title}
                  </h3>
                </div>
                
                {/* For mobile - show year inline */}
                {item.year && (
                  <div className="text-xs font-normal text-gray-500 sm:hidden group-hover:text-teal-600 transition-colors duration-300">
                    {item.year}
                  </div>
                )}
                
                {item.description && (
                  <p className="text-base text-gray-600 font-light leading-relaxed tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tech-inspired visual element */}
        <div 
          ref={(el) => (elementsRef.current[activeContent.items.length + 1] = el)}
          className="mt-16 mb-8 fade-in-element fade-delay-8"
          aria-hidden="true"
        >
          <div className="flex items-center space-x-3">
            <div className="h-5 w-20 bg-gradient-to-r from-teal-500/30 to-transparent rounded-sm"></div>
            <div className="h-5 w-5 rounded-sm bg-teal-500/10 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
            </div>
          </div>
        </div>

        {/* Visual divider */}
        <Separator className="my-10 max-w-xl bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  );
}