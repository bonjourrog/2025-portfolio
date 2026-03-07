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
        <section id="hero" className="flex flex-col justify-center py-32 min-h-screen">
            <h1 className="font-bold leading-[1.2] mb-6 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}>
                {t.title}
            </h1>
            <p className="text-zinc-600 max-w-[600px] mb-8 font-normal" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                {t.subtitle}
            </p>
            <a
                href="#projects"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                }}
                className="inline-block w-fit py-3.5 px-8 bg-zinc-900 text-white no-underline rounded-sm font-semibold border border-zinc-900 cursor-pointer text-sm"
            >
                {t.cta}
            </a>
        </section>
    );
}