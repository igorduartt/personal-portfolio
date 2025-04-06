import React, { useEffect, useRef } from "react";
import { useLanguageStore } from "../store/languageStore";
import { DecorativeElement } from "components/DecorativeElement";
import { Separator } from "@/components/ui/separator";

/**
 * AboutSection Component
 * 
 * A bilingual section that displays Igor's professional background with fade-in animations.
 * 
 * Features:
 * - Bilingual support (English/Portuguese) using the language store
 * - Scroll-triggered fade-in animations with staggered delays
 * - Decorative elements positioned absolutely for visual interest
 * - Tech-inspired visual elements that align with the data science theme
 * - Typography that follows the design guidelines (bold headers, light body text)
 */
interface Props {
  className?: string;
}

interface Content {
  title: string;
  description: string[];
}

interface LanguageContent {
  en: Content;
  pt: Content;
}

export function AboutSection({ className = "" }: Props) {
  const { language } = useLanguageStore();
  const elementsRef = useRef<(HTMLDivElement | HTMLParagraphElement | null)[]>([]);

  // Bilingual content
  const content: LanguageContent = {
    en: {
      title: "About Me",
      description: [
        "I am a passionate software developer with expertise in web development and a strong focus on creating efficient, scalable solutions.",
        "With a background in computer science and years of experience in the industry, I specialize in building modern web applications using cutting-edge technologies.",
        "My approach combines technical excellence with a deep understanding of user needs, ensuring that every project delivers both functionality and value."
      ]
    },
    pt: {
      title: "Sobre Mim",
      description: [
        "Sou um desenvolvedor de software apaixonado com experiência em desenvolvimento web e um forte foco em criar soluções eficientes e escaláveis.",
        "Com formação em ciência da computação e anos de experiência na indústria, especializo-me em construir aplicações web modernas usando tecnologias de ponta.",
        "Minha abordagem combina excelência técnica com uma profunda compreensão das necessidades do usuário, garantindo que cada projeto entregue tanto funcionalidade quanto valor."
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

  return (
    <div className={`max-w-7xl w-full px-6 sm:px-8 lg:px-12 ${className} relative`}>
      {/* Decorative elements - positioned absolutely and only visible on large screens */}
      <DecorativeElement 
        variant="circle" 
        className="w-64 h-64 -top-10 -right-20 opacity-10 hidden lg:block" 
        color="bg-teal-500/20"
      />
      <DecorativeElement 
        variant="dot-grid" 
        className="bottom-10 -left-20 opacity-40 hidden lg:block" 
        color="bg-gray-300"
      />
      <DecorativeElement 
        variant="square" 
        className="w-40 h-40 -bottom-20 right-40 opacity-10 hidden lg:block" 
        color="bg-gray-400/20"
      />

      <div className="relative z-10">
        {/* Section heading with accent bar */}
        <div 
          ref={(el: HTMLDivElement | null) => {
            elementsRef.current[0] = el;
          }}
          className="fade-in-element fade-delay-1 space-y-3 mb-12"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {activeContent.title}
          </h2>
        </div>

        {/* Description paragraphs with staggered animation delays */}
        <div className="space-y-8 max-w-3xl">
          {activeContent.description.map((paragraph, index) => (
            <p 
              key={index} 
              ref={(el: HTMLParagraphElement | null) => {
                elementsRef.current[index + 1] = el;
              }}
              className={`text-lg text-gray-600 font-light leading-relaxed fade-in-element tracking-wide fade-delay-${index + 2}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Tech-inspired visual element - subtle data/tech design motif */}
        <div 
          ref={(el: HTMLDivElement | null) => {
            elementsRef.current[4] = el;
          }}
          className="mt-16 mb-8 fade-in-element fade-delay-4"
        >
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-sm bg-teal-500/10 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
            </div>
            <div className="h-5 w-16 bg-gradient-to-r from-teal-500/30 to-transparent rounded-sm"></div>
            <div className="h-5 w-5 rounded-sm bg-teal-500/10 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
            </div>
          </div>
        </div>

        {/* Visual divider - fading separator for visual sections */}
        <Separator className="my-10 max-w-xl bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  );
}

export default AboutSection;
