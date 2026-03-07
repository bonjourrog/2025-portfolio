'use client'

import { useLang } from "@/context/langContext";
import { translations } from "@/mocks/data/translation";

export default function Header() {
    const { lang, toggleLang } = useLang();
    const t = translations[lang];

    const anchors = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-2xl font-bold tracking-tight">RB</div>
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
                    {t.nav.map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${anchors[index]}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(anchors[index]);
                                }}
                                className="font-medium hover:text-gray-600 transition-colors duration-300 cursor-pointer relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleLang}
                    className="text-sm font-semibold px-4 py-2 border-2 border-gray-900 rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                    {lang === 'en' ? 'ES' : 'EN'}
                </button>
            </nav>
        </header>
    );
}