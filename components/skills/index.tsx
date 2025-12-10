import { SkillCategory } from "@/entity/skillsCategory";
import { SKILLCATEGORY_DATA_MOCK } from "@/mocks/data/skillCategory";

export default function Skills() {
    const skillCategories: SkillCategory[] = SKILLCATEGORY_DATA_MOCK;
    return (
        <section id="skills" className="py-16 sm:py-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
                Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                    <div
                        key={category.id}
                        className="p-6 sm:p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-900 hover:bg-white transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-6">
                            {category.category}
                        </h3>
                        <ul className="space-y-2">
                            {category.skills.map((skill, idx) => (
                                <li
                                    key={idx}
                                    className="py-2 text-gray-500 text-sm sm:text-base flex items-center"
                                >
                                    <span className="mr-3 text-gray-900 font-bold">•</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}