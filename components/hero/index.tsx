'use client'

import { useLang } from "@/context/langContext";
import { translations } from "@/mocks/data/translation";

export default function Hero() {
    const { lang } = useLang();
    const t = translations[lang].hero;

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="flex flex-col justify-center py-24 min-h-[80vh]">
            <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                Rogelio Beltran
            </p>
            <h1 className="font-bold leading-[1.15] mb-6 tracking-tight" style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}>
                {t.title}
            </h1>
            <p className="text-zinc-500 max-w-[560px] mb-10 font-normal leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
                {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('projects');
                    }}
                    className="inline-block py-3.5 px-8 bg-zinc-900 text-white no-underline rounded-sm font-semibold border border-zinc-900 cursor-pointer text-sm hover:bg-zinc-700 transition-colors duration-200"
                >
                    {t.cta}
                </a>
                <a
                    href="https://github.com/bonjourrog"
                    target="_blank"
                    className="inline-flex items-center gap-2 py-3.5 px-6 border border-gray-200 rounded-sm text-sm font-semibold text-zinc-700 no-underline hover:border-zinc-900 hover:text-zinc-900 transition-all duration-200"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/rogeliobeltran/"
                    target="_blank"
                    className="inline-flex items-center gap-2 py-3.5 px-6 border border-gray-200 rounded-sm text-sm font-semibold text-zinc-700 no-underline hover:border-zinc-900 hover:text-zinc-900 transition-all duration-200"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                </a>
            </div>
        </section>
    );
}