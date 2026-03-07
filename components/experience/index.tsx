'use client'

import { useLang } from "@/context/langContext";
import { experienceData, translations } from "@/mocks/data/translation";

export default function Experience() {
    const { lang } = useLang();
    const t = translations[lang].experience;
    const experiences = experienceData[lang];

    return (
        <section id="experience" className="py-16 sm:py-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
                {t.title}
            </h2>
            <div className="space-y-12">
                {experiences.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-gray-900 pl-6 sm:pl-8 relative">
                        <div className="absolute -left-[7px] top-0 w-3 h-3 bg-gray-900 rounded-full" />
                        <h3 className="text-xl sm:text-2xl font-semibold mb-1">{exp.title}</h3>
                        <div className="text-gray-400 text-sm sm:text-base mb-2">{exp.role}</div>
                        <div className="text-gray-300 text-xs sm:text-sm mb-4">{exp.date}</div>
                        <p className="text-gray-600 mb-4 max-w-[50em]">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {exp.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block px-3 sm:px-4 py-2 bg-gray-50 border border-gray-200 rounded text-xs sm:text-sm font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}