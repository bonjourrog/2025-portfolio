import { Project } from "@/entity/project";
import { PROJECT_DATA_MOCK } from "@/mocks/data/projects";

export default function Projects() {
    const projects: Project[] = PROJECT_DATA_MOCK;
    return (
        <section id="projects" className="py-16 sm:py-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
                Proyectos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                        <div className="p-6 sm:p-8 bg-gray-50 border-b border-gray-200 grow flex flex-col">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                {project.title}
                            </h3>
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
    )
}