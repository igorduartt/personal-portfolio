import React, { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "utils/languageStore";
import { DecorativeElement } from "components/DecorativeElement";
import { Separator } from "@/components/ui/separator";

/**
 * TechnicalSkillsSection Component
 * 
 * A bilingual section showcasing Igor's technical competencies with visual indicators.
 * 
 * Features:
 * - Bilingual support (English/Portuguese) using the language store
 * - Visual indicators/icons for each skill category
 * - Interactive elements with hover effects
 * - Keyboard navigation support for accessibility
 * - Scroll-triggered fade-in animations with staggered delays
 * - Responsive design for all screen sizes
 * - Minimalist aesthetic with proper spacing and typography
 */
export interface Props {
  className?: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color?: string;
}

export function TechnicalSkillsSection({ className = "" }: Props) {
  const { language } = useLanguageStore();
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [focusedSkill, setFocusedSkill] = useState<string | null>(null);

  // Bilingual content
  const content = {
    en: {
      title: "Technical Skills",
      proficiencyLabel: "Proficiency",
      categories: [
        {
          title: "Data Science",
          icon: "📊",
          color: "from-teal-400 to-teal-600",
          skills: [
            "Predictive modeling in mental health",
            "Supervised and unsupervised machine learning",
            "Data pipeline development with Python, R, and SQL",
            "Statistical analysis and hypothesis testing",
            "Time series analysis and forecasting",
            "Feature engineering and selection techniques"
          ]
        },
        {
          title: "AI & NLP",
          icon: "🧠",
          color: "from-blue-400 to-teal-500",
          skills: [
            "Use of LLMs (Large Language Models) for natural language processing (NLP)",
            "Applied AI in public health and neuroscience projects",
            "Text mining and sentiment analysis",
            "Computer vision applications in healthcare",
            "Transfer learning and fine-tuning pre-trained models",
            "Explainable AI techniques for healthcare applications"
          ]
        },
        {
          title: "Visualization & Automation",
          icon: "📈",
          color: "from-teal-400 to-cyan-500",
          skills: [
            "Dashboarding and automation with Power BI",
            "Data visualization and reporting",
            "Interactive data exploration tools",
            "Geospatial data visualization",
            "Automated reporting systems",
            "Real-time data monitoring dashboards"
          ]
        },
        {
          title: "Tools & Platforms",
          icon: "🔧",
          color: "from-gray-500 to-gray-600",
          skills: [
            "Experience with BigQuery, REDCap, Shiny apps",
            "APIs and model deployment",
            "Version control with Git and GitHub",
            "Containerization with Docker",
            "Cloud platforms (AWS, GCP, Azure)",
            "CI/CD pipelines for ML models"
          ]
        }
      ]
    },
    pt: {
      title: "Competências Técnicas",
      proficiencyLabel: "Proficiência",
      categories: [
        {
          title: "Ciência de Dados",
          icon: "📊",
          color: "from-teal-400 to-teal-600",
          skills: [
            "Modelagem preditiva em saúde mental",
            "Modelos de machine learning supervisionados e não supervisionados",
            "Criação de pipelines de dados com Python, R e SQL",
            "Análise estatística e testes de hipóteses",
            "Análise de séries temporais e previsão",
            "Engenharia e seleção de features"
          ]
        },
        {
          title: "IA & NLP",
          icon: "🧠",
          color: "from-blue-400 to-teal-500",
          skills: [
            "Uso de LLMs (Modelos de Linguagem) para NLP",
            "Aplicações de IA em saúde pública e neurociência",
            "Mineração de texto e análise de sentimentos",
            "Aplicações de visão computacional em saúde",
            "Transfer learning e fine-tuning de modelos pré-treinados",
            "Técnicas de IA explicável para aplicações em saúde"
          ]
        },
        {
          title: "Visualização & Automação",
          icon: "📈",
          color: "from-teal-400 to-cyan-500",
          skills: [
            "Visualização e automação com Power BI",
            "Visualização de dados e relatórios",
            "Ferramentas interativas de exploração de dados",
            "Visualização de dados geoespaciais",
            "Sistemas de relatórios automatizados",
            "Dashboards de monitoramento em tempo real"
          ]
        },
        {
          title: "Ferramentas & Plataformas",
          icon: "🔧",
          color: "from-gray-500 to-gray-600",
          skills: [
            "Experiência com BigQuery, REDCap, Shiny",
            "APIs e deploy de modelos",
            "Controle de versão com Git e GitHub",
            "Containerização com Docker",
            "Plataformas em nuvem (AWS, GCP, Azure)",
            "Pipelines CI/CD para modelos de ML"
          ]
        }
      ]
    }
  };

  const activeContent = content[language];

  // Handle keyboard navigation
  const handleSkillKeyDown = (e: React.KeyboardEvent, skill: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFocusedSkill(skill === focusedSkill ? null : skill);
    }
  };

  useEffect(() => {
    // Reset focused skill on language change
    setFocusedSkill(null);
  }, [language]);

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
    <div className={`max-w-7xl w-full px-4 sm:px-6 md:px-8 lg:px-12 ${className} relative`}>
      {/* Decorative elements - positioned absolutely and only visible on large screens */}
      <DecorativeElement 
        variant="circle" 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 -top-16 sm:-top-20 -right-8 sm:-right-10 opacity-10 hidden lg:block" 
        color="bg-teal-500/20"
      />
      <DecorativeElement 
        variant="square" 
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bottom-32 sm:bottom-40 -left-12 sm:-left-20 opacity-10 hidden lg:block" 
        color="bg-gray-400/20"
      />
      <DecorativeElement 
        variant="dot-grid" 
        className="bottom-8 sm:bottom-10 right-8 sm:right-10 opacity-30 hidden lg:block" 
        color="bg-gray-300"
      />

      <div className="relative z-10">
        {/* Section heading with accent bar */}
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="fade-in-element fade-delay-1 space-y-2 sm:space-y-3 mb-10 sm:mb-16"
        >
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {activeContent.title}
          </h2>
        </div>

        {/* Skills categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-16 max-w-4xl">
          {activeContent.categories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              ref={(el) => (elementsRef.current[categoryIndex + 1] = el)}
              className={`fade-in-element fade-delay-${categoryIndex + 2} space-y-4 sm:space-y-6`}
            >
              {/* Category heading with icon */}
              <div className="flex items-center space-x-3 sm:space-x-4 group">
                <div 
                  className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg
                    bg-white border border-gray-200 shadow-sm text-gray-600
                    transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}
                  aria-hidden="true"
                >
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight group-hover:text-teal-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills list */}
              <ul className="space-y-3 sm:space-y-5 pl-3 sm:pl-4">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className={`relative pl-6 sm:pl-7 text-sm sm:text-base text-gray-600 font-light leading-relaxed tracking-wide 
                      ${skill === focusedSkill ? "text-gray-900" : ""}
                      group transition-colors duration-300`}
                    tabIndex={0}
                    role="button"
                    aria-pressed={skill === focusedSkill}
                    onKeyDown={(e) => handleSkillKeyDown(e, skill)}
                    onClick={() => setFocusedSkill(skill === focusedSkill ? null : skill)}
                  >
                    {/* Custom animated bullet point */}
                    <div 
                      className={`absolute left-0 top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br 
                        ${category.color || "from-teal-400 to-teal-600"} 
                        ${skill === focusedSkill ? "opacity-100 scale-125" : "opacity-80"}
                        transform transition-all duration-300 group-hover:scale-125 group-hover:opacity-100`}
                    ></div>
                    <span className={`group-hover:text-gray-800 transition-colors duration-300 
                      ${skill === focusedSkill ? "font-normal" : ""}`}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Stats metrics - showing proficiency level */}
        <div 
          ref={(el) => (elementsRef.current[activeContent.categories.length + 1] = el)}
          className="mt-12 sm:mt-16 max-w-4xl fade-in-element fade-delay-6"
        >
          <h3 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-3 sm:mb-4 font-medium">
            {activeContent.proficiencyLabel}
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Python", level: 90 },
              { name: "R", level: 85 },
              { name: "SQL", level: 80 },
              { name: "Power BI", level: 75 },
              { name: "Machine Learning", level: 85 },
              { name: "Data Visualization", level: 80 },
              { name: "NLP", level: 75 },
              { name: "Git", level: 70 }
            ].map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">{tool.name}</div>
                  <div className="text-xs text-gray-500">{tool.level}%</div>
                </div>
                <div className="h-1 sm:h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full`}
                    style={{ width: `${tool.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tech-inspired visual element */}
        <div 
          ref={(el) => (elementsRef.current[activeContent.categories.length + 2] = el)}
          className="mt-12 sm:mt-16 mb-6 sm:mb-8 fade-in-element fade-delay-7"
          aria-hidden="true"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="h-4 sm:h-5 w-16 sm:w-20 bg-gradient-to-r from-teal-500/30 to-transparent rounded-sm"></div>
            <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-sm bg-teal-500/10 flex items-center justify-center">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500"></div>
            </div>
          </div>
        </div>

        {/* Visual divider */}
        <Separator className="my-8 sm:my-10 max-w-xl bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  );
}