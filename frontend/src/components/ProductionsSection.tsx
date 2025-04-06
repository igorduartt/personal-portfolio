import React from 'react';
import { useLanguageStore } from 'utils/languageStore';

export const ProductionsSection = () => {
  const { language } = useLanguageStore();

  const content = {
    en: {
      title: "Technical Productions",
      subtitle: "Explore my technical work, research papers, and projects",
      items: [
        {
          title: "Enhanced neurobiological biomarker differentiation for attention-deficit/hyperactivity disorder through a risk-informed design",
          description: "A study of 2511 Brazilian children aged 6–14 found that dividing controls into high- and low-risk groups improved the detection of ADHD biomarkers.",
          thumbnail: "https://media.springernature.com/w316/springer-static/cover-hires/journal/787?as=webp/300x200",
          link: "https://link.springer.com/article/10.1007/s00787-024-02622-4",
          category: "Research"
        },
        {
          title: "Depression risk score calculator for children and adolescents",
          description: "Calculate the Individual Level Probability of Developing Depression with the IDEA Risk Score",
          thumbnail: "https://mqmentalhealth.org/wp-content/uploads/2020_MQ_YELLOW_RGB_HORZ_WHITE.svg",
          link: "https://prodiariskscore.shinyapps.io/idea_calculator/",
          category: "Project"
        },
        {
          title: "Veja magazine",
          description: "ADHD: research could yield unprecedented test to diagnose the condition",
          thumbnail: "https://veja.abril.com.br/wp-content/uploads/2017/04/cerebro-20131018-066.jpg?quality=70&strip=info&w=1125&h=720&crop=1/300x200",
          link: "https://veja.abril.com.br/saude/tdah-pesquisa-pode-render-exame-inedito-para-diagnosticar-condicao",
          category: "Article"
        },
        {
          title: "Attention-deficit/hyperactivity disorder in Mozambique: an epidemiological investigation in a primary school sample",
          description: "A study of 748 primary school students in Nampula, Mozambique, found an ADHD prevalence of 13.4% (6.7% using stricter criteria), with about one-third of ADHD cases also showing disruptive behavior disorders.",
          thumbnail: "https://cdn.ncbi.nlm.nih.gov/pubmed/7e7ad262-b370-490b-9751-e68ac1c1c5b4/core/images/pubmed-logo-blue.svg",
          link: "https://pubmed.ncbi.nlm.nih.gov/38243805/",
          category: "Research"
        },
        {
          title: "Depression level calculator",
          description: "Depression level calculator based on 2019 Brazilian regulations using IRT",
          thumbnail: "https://mheg.shinyapps.io/phq9-score/_w_7aec08dead9547dc9ac94b375a3016fb/img/cism.svg",
          link: "https://mheg.shinyapps.io/phq9-score/",
          category: "Project"
        },
        {
          title: "UOL magazine",
          description: "Created by Brazilians, online calculator measures levels of depression",
          thumbnail: "https://conteudo.imguol.com.br/c/galeria/f9/2024/11/19/obesidade-consulta-com-psicologo-saude-mental-compulsao-alimentar-1732053961559_v2_900x506.jpg.webp",
          link: "https://www.uol.com.br/vivabem/noticias/redacao/2025/03/26/calculadora-online-sintomas-depressao.htm",
          category: "Article"
        }
      ]
    },
    pt: {
      title: "Produções Técnicas",
      subtitle: "Explore alguns dos meus trabalhos e colaborações técnicas, artigos de pesquisa e projetos",
      items: [
        {
          title: "Enhanced neurobiological biomarker differentiation for attention-deficit/hyperactivity disorder through a risk-informed design",
          description: "Um estudo com 2.511 crianças brasileiras de 6 a 14 anos descobriu que a divisão dos controles em grupos de alto e baixo risco melhorou a detecção de biomarcadores de TDAH.",
          thumbnail: "https://media.springernature.com/w316/springer-static/cover-hires/journal/787?as=webp/300x200",
          link: "https://link.springer.com/article/10.1007/s00787-024-02622-4",
          category: "Pesquisa"
        },
        {
          title: "Calculadora de risco de depressão em crianças e adolescentes",
          description: "Calcular a probabilidade individual de desenvolver depressão com a pontuação de risco do IDEA",
          thumbnail: "https://mqmentalhealth.org/wp-content/uploads/2020_MQ_YELLOW_RGB_HORZ_WHITE.svg",
          link: "https://prodiariskscore.shinyapps.io/idea_calculator/",
          category: "Projeto"
        },
        {
          title: "Matéria - Revista Veja",
          description: "TDAH: pesquisa pode render exame inédito para diagnosticar condição",
          thumbnail: "https://veja.abril.com.br/wp-content/uploads/2017/04/cerebro-20131018-066.jpg?quality=70&strip=info&w=1125&h=720&crop=1/300x200",
          link: "https://veja.abril.com.br/saude/tdah-pesquisa-pode-render-exame-inedito-para-diagnosticar-condicao",
          category: "Artigo"
        },
        {
          title: "Attention-deficit/hyperactivity disorder in Mozambique: an epidemiological investigation in a primary school sample",
          description: "Um estudo com 748 alunos do ensino fundamental em Nampula, Moçambique, constatou uma prevalência de TDAH de 13,4% (6,7% usando critérios mais rigorosos), com cerca de um terço dos casos de TDAH também apresentando distúrbios de comportamento perturbador.",
          thumbnail: "https://cdn.ncbi.nlm.nih.gov/pubmed/7e7ad262-b370-490b-9751-e68ac1c1c5b4/core/images/pubmed-logo-blue.svg",
          link: "https://pubmed.ncbi.nlm.nih.gov/38243805/",
          category: "Pesquisa"
        },
        {
          title: "Calculadora de níveis de depressão baseada em amostra brasileira",
          description: "Calculadora de nível de depressão com base nas regulamentações brasileiras de 2019 usando Teoria de resposta ao item (TRI)",
          thumbnail: "https://mheg.shinyapps.io/phq9-score/_w_7aec08dead9547dc9ac94b375a3016fb/img/cism.svg",
          link: "https://mheg.shinyapps.io/phq9-score/",
          category: "Projeto"
        },
        {
          title: "Matéria - UOL",
          description: "Criada por brasileiros, calculadora on-line mede níveis de depressão",
          thumbnail: "https://conteudo.imguol.com.br/c/galeria/f9/2024/11/19/obesidade-consulta-com-psicologo-saude-mental-compulsao-alimentar-1732053961559_v2_900x506.jpg.webp",
          link: "https://www.uol.com.br/vivabem/noticias/redacao/2025/03/26/calculadora-online-sintomas-depressao.htm",
          category: "Artigo"
        }
      ]
    }
  };

  const activeContent = content[language];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{activeContent.title}</h2>
        <p className="text-xl text-gray-600">{activeContent.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeContent.items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}; 