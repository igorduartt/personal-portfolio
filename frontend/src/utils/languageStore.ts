import { create } from 'zustand'

type Language = 'en' | 'pt'

interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'pt' : 'en' })),
}))
