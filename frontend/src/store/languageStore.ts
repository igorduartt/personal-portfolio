import { create, StateCreator } from 'zustand';

type Language = 'en' | 'pt';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

type LanguageStore = StateCreator<LanguageState>;

export const useLanguageStore = create<LanguageState>((set: LanguageStore) => ({
  language: 'en',
  setLanguage: (language: Language) => set({ language }),
})); 