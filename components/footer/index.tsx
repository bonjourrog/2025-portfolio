'use client'
import { useLang } from '@/context/langContext';
import { LINKS_DATA_MOCK } from '@/mocks/data/links';
import { translations } from '@/mocks/data/translation';

export default function Footer() {
    const { lang } = useLang();
    const t = translations[lang];

    return (
        <footer className="mt-16 py-12 px-8 border-t border-zinc-200">
            <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-8">
                <div className="text-zinc-400 text-sm">© 2025 Rogelio Beltran. {t.footer}</div>
                <div className="flex gap-8 flex-wrap">
                    {LINKS_DATA_MOCK.map((elem, idx) => (
                        <a key={idx} target="_blank" href={elem.link} className="text-zinc-800 no-underline text-sm font-semibold hover:text-zinc-500 transition-colors">
                            {elem.title}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}