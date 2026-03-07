'use client'

import { useLang } from "@/context/langContext";
import { translations } from "@/mocks/data/translation";

export default function Contact() {
    const { lang } = useLang();
    const t = translations[lang].contact;

    return (
        <section id="contact" className="py-32 text-center">
            <h2 className="mb-6 font-bold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
                {t.title}
            </h2>
            <p className="mb-12 mx-auto max-w-[600px] text-zinc-500" style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
                {t.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
                <a
                    href="mailto:rbv.rogelio.beltran@gmail.com"
                    className="inline-block py-3.5 px-8 text-white bg-zinc-900 no-underline rounded-sm font-semibold text-base"
                >
                    {t.email}
                </a>
                <a
                    href="https://www.linkedin.com/in/rogeliobeltran/"
                    target="_blank"
                    className="inline-block py-3.5 px-8 border-2 border-zinc-800 text-zinc-900 no-underline rounded-sm font-semibold text-base"
                >
                    {t.linkedin}
                </a>
            </div>
        </section>
    );
}