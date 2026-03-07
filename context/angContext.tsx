'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'es';

interface LangContextType {
    lang: Lang;
    toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
    lang: 'en',
    toggleLang: () => {}
});

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');
    const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');
    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}