'use client'

import { useLang } from "@/context/langContext";
import { projectsData, translations } from "@/mocks/data/translation";

export default function Projects() {
    const { lang } = useLang();
    const t = translations[lang].projects;
    const projects = projectsData[lang];

    return (
        <section id="projects" className="py-16 sm:py-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
                {t.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                        <div className="p-6 sm:p-8 bg-gray-50 border-b border-gray-200 grow flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                                {project.badge && (
                                    <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full whitespace-nowrap">
                                        {project.badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base mb-6 grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-sm text-xs font-semibold tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}