'use client'

import { useLang } from "@/context/langContext";
import { translations } from "@/mocks/data/translation";

export default function About() {
    const { lang } = useLang();
    const t = translations[lang].about;

    return (
        <section id="about" className="py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{t.p1}</p>
                    <p className="text-gray-600 mb-4">{t.p2}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-8">{t.journeyTitle}</p>
                    <ul className="space-y-2 text-gray-600">
                        {t.journey.map((item, idx) => (
                            <li key={idx} className="py-2">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}