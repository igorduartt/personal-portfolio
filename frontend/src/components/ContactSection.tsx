import React from 'react';
import { useLanguageStore } from 'utils/languageStore';

export const ContactSection = () => {
  const { language } = useLanguageStore();

  const content = {
    en: {
      title: "Connect with Me",
      subtitle: "Feel free to reach out through any of these platforms",
      socialTitle: "Social Media",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          )
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/yourusername",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          )
        },
        {
          name: "Email",
          url: "mailto:your.email@example.com",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          name: "ResearchGate",
          url: "https://www.researchgate.net/profile/yourusername",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 0h-15C2.12 0 0 2.12 0 4.5v15C0 21.88 2.12 24 4.5 24h15c2.38 0 4.5-2.12 4.5-4.5v-15C24 2.12 21.88 0 19.5 0zM9.5 19.5H6v-9h3.5v9zm-1.75-10.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11.75 10.5h-3.5v-5.25c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.25H8.5v-9h3.5v1.5c.83-1.12 2.17-1.5 3.5-1.5 2.38 0 4.5 1.12 4.5 4.5v4.5z"/>
            </svg>
          )
        }
      ]
    },
    pt: {
      title: "Conecte-se Comigo",
      subtitle: "Sinta-se à vontade para entrar em contato através de qualquer uma dessas plataformas",
      socialTitle: "Redes Sociais",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/yourusername",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          )
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/yourusername",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          )
        },
        {
          name: "Email",
          url: "mailto:your.email@example.com",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          name: "ResearchGate",
          url: "https://www.researchgate.net/profile/yourusername",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 0h-15C2.12 0 0 2.12 0 4.5v15C0 21.88 2.12 24 4.5 24h15c2.38 0 4.5-2.12 4.5-4.5v-15C24 2.12 21.88 0 19.5 0zM9.5 19.5H6v-9h3.5v9zm-1.75-10.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11.75 10.5h-3.5v-5.25c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.25H8.5v-9h3.5v1.5c.83-1.12 2.17-1.5 3.5-1.5 2.38 0 4.5 1.12 4.5 4.5v4.5z"/>
            </svg>
          )
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

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {activeContent.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="text-gray-600 group-hover:text-teal-600 transition-colors duration-300 mb-3">
                {link.icon}
              </div>
              <span className="text-lg font-medium text-gray-700 group-hover:text-teal-600 transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}; 